from songs.models import Song
from rest_framework import viewsets, permissions
from .serializers import SongSerializer


class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    permission_classes = [permissions.AllowAny]

    serializer_class = SongSerializer

    # def get_queryset(self):
    #   return self.request.user.songs.all()

    # def perform_create(self, serializer):
    #   serializer.save(owner=self.request.user)
