from backend.app import app, db
from backend.models import User
from flask import request, jsonify
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from sqlalchemy.exc import IntegrityError


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
