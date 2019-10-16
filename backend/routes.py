from backend.app import app, db
from backend.models import User
from flask import request, jsonify, make_response
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from backend.decorators import token_required
from sqlalchemy.exc import IntegrityError
from backend.scraper import get_urls, get_tabs


# Get all users
@app.route('/api/users/all', methods=['GET'])
def get_all_users():
    users = User.query.all()
    output = []

    for user in users:
        user_data = {}
        user_data['user_id'] = user.user_id
        user_data['name'] = user.name
        user_data['email'] = user.email
        user_data['password'] = user.password
        user_data['created_at'] = user.created_at
        output.append(user_data)

    return jsonify(output)


# Get current user
@app.route('/api/users/current', methods=['GET'])
@token_required
def get_current_user(current_user):
    user_data = {}
    user_data['user_id'] = current_user.user_id
    user_data['name'] = current_user.name
    user_data['email'] = current_user.email
    user_data['password'] = current_user.password
    user_data['created_at'] = current_user.created_at

    return jsonify(user_data)


# Delete current user
@app.route('/api/users/current', methods=['DELETE'])
@token_required
def delete_current_user(current_user):
    db.session.delete(current_user)
    db.session.commit()

    return jsonify({'message': 'The user has been deleted!'})


# Update current user
@app.route('/api/users/current', methods=['PUT'])
@token_required
def update_current_user(current_user):
    data = request.get_json()

    if data.get('email'):
        current_user.email = data.get('email')

    if data.get('name'):
        current_user.name = data.get('name')

    if data.get('password'):
        current_user.password = generate_password_hash(
            data.get('password'), method='sha256')

    db.session.commit()

    return jsonify({'message': 'The user has been updated!'})


# Register
@app.route('/api/register', methods=['POST'])
def create_new_user():
    data = request.get_json()

    hashed_password = generate_password_hash(data['password'], method='sha256')
    try:
        user = User(
            user_id=str(uuid.uuid4().hex),
            name=data['name'],
            email=data['email'],
            password=hashed_password)
        db.session.add(user)
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        return jsonify({'email': 'This email is already registered'}), 400

    token = jwt.encode({
        'user_id': user.user_id,
        'exp': datetime.datetime.utcnow() +
        datetime.timedelta(hours=12)},
        app.config['SECRET_KEY'])

    return jsonify({'token': token.decode('UTF-8')})


# Login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()

    if not user:
        return jsonify({'email': "User not found"}), 400

    if check_password_hash(user.password, data['password']):
        token = jwt.encode({
            'user_id': user.user_id,
            'exp': datetime.datetime.utcnow() +
            datetime.timedelta(hours=12)},
            app.config['SECRET_KEY'])

        return jsonify({'token': token.decode('UTF-8')})
    else:
        return jsonify({'password': 'Password incorrect'}), 400


# Get song urls by search string
@app.route('/api/songs/urls', methods=['GET'])
# @token_required
def get_songs_urls():
    search_string = request.args.get('search_string')
    try:
        urls = get_urls(search_string)
        return jsonify(urls)
    except Exception as e:
        print(e)
        return jsonify([]), 400


# Get tabs for song by url
@app.route('/api/songs/tabs', methods=['GET'])
# @token_required
def get_songs_tabs():
    url = request.args.get('url')
    try:
        tabs = get_tabs(url)
        return jsonify(tabs)
    except Exception as e:
        print(e)
        return jsonify([]), 400
