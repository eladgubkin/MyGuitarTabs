from backend.app import db
from backend.models.association import association
from datetime import datetime


class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.String(32), primary_key=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           default=datetime.utcnow)
    labels = db.relationship('Label')

    association = db.relationship(
        'Song', secondary=association, backref=db.backref('association'), lazy='dynamic')
