from backend.app import db
from datetime import datetime


class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.String(32), primary_key=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(80), nullable=False)
    # favorites = db.relationship(
    #     'Song', secondary=favorites, backref=db.backref('favorites'), lazy='dynamic')
    created_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow)
