from django.db import models
from django.contrib.auth.models import User


class Song(models.Model):
    song_name = models.CharField(max_length=100, default=None)
    artist = models.CharField(max_length=100, default=None)
    type = models.CharField(max_length=100, default=None)
    rating = models.FloatField(default=None)
    author = models.CharField(max_length=100, default=None)
    author_id = models.IntegerField(default=None)
    key = models.CharField(max_length=100, default=None)
    tuning_name = models.CharField(max_length=100, default=None)
    tuning_value = models.CharField(max_length=100, default=None)
    difficulty = models.CharField(max_length=100, default=None)
    last_edit_by = models.CharField(max_length=100, default=None)
    last_edit_by_id = models.IntegerField(default=None)
    content = models.CharField(max_length=10000000, default=None)
    strumming = models.CharField(max_length=10000000, default=None)
    contributors = models.CharField(max_length=10000000, default=None)
    recommended_tabs = models.CharField(max_length=10000000, default=None)

    # name = models.CharField(max_length=100)
    # email = models.EmailField(max_length=100, unique=True)
    # message = models.CharField(max_length=500, blank=True)
    # created_at = models.DateTimeField(auto_now_add=True)
