from backend.app import app, db
from backend.models import User
from flask import request, jsonify
from werkzeug.security import generate_password_hash
from backend.utils import token_required


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
