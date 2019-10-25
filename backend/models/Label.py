from backend.app import db


class Label(db.Model):
    __tablename__ = 'labels'

    label_id = db.Column(db.String(32), primary_key=True)
    user_id = db.Column(db.String(32), db.ForeignKey('users.user_id'))
    name = db.Column(db.String(50), nullable=False)
