from backend.app import app
from flask import jsonify
from backend.models import Label
from backend.utils import token_required


# # Get all labels
# @app.route('/api/labels/all', methods=['GET'])
# def get_all_labels():
#     labels = Label.query.all()
#     output = []

#     for label in labels:
#         label_data = {}
#         label_data['label_id'] = label.label_id
#         label_data['user_id'] = label.user_id
#         label_data['label_name'] = label.label_name
#         label_data['songs'] = label.songs
#         output.append(label_data)

#     return jsonify(output)


# Get all labels for current_user
@app.route('/api/labels/all', methods=['GET'])
@token_required
def get_current_labels(current_user):
    labels = current_user.labels
    return jsonify(labels)
