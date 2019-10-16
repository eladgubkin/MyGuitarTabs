from backend.app import db
from datetime import datetime

favorites = db.Table('favorites',
                     db.Column('user_id', db.String(32),
                               db.ForeignKey('users.user_id')),
                     db.Column('song_id', db.String(32), db.ForeignKey('songs.song_id')))


class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.String(32), primary_key=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(80), nullable=False)
    favorites = db.relationship(
        'Song', secondary=favorites, backref=db.backref('favorites'), lazy='dynamic')
    created_at = db.Column(
        db.DateTime, nullable=False, default=datetime.utcnow)


class Song(db.Model):
    __tablename__ = 'songs'
    song_id = db.Column(db.String(32), primary_key=True)
    song_name = db.Column(db.String(80), nullable=True)
    song_artist = db.Column(db.String(80), nullable=True)
    song_type = db.Column(db.String(80), nullable=True)
    rating = db.Column(db.Float, nullable=True)
    author = db.Column(db.String(80), nullable=True)
    author_id = db.Column(db.Integer, nullable=True)
    key = db.Column(db.String(80), nullable=True)
    tuning_name = db.Column(db.String(80), nullable=True)
    tutning_value = db.Column(db.String(80), nullable=True)
    difficulty = db.Column(db.String(80), nullable=True)
    last_edit_by = db.Column(db.String(80), nullable=True)
    last_edit_by_id = db.Column(db.Integer, nullable=True)
    content = db.Column(db.Text, nullable=True)
    strummings = db.Column(db.Text, nullable=True)
    contributors = db.Column(db.Text, nullable=True)
    recommended_tabs = db.Column(db.Text, nullable=True)
