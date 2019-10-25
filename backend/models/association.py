from backend.app import db


association = db.Table('association',
                       db.Column('user_id', db.String(32),
                                 db.ForeignKey('users.user_id')),
                       db.Column('song_id', db.String(32),
                                 db.ForeignKey('songs.song_id')),
                       db.Column('label_id', db.String(32),
                                 db.ForeignKey('labels.label_id')))
