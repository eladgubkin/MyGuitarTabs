from backend.app import db


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
    # contributors = db.Column(db.Text, nullable=True)
    # recommended_tabs = db.Column(db.Text, nullable=True)
