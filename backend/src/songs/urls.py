from rest_framework import routers
from .api import SongViewSet

router = routers.DefaultRouter()
router.register('api/songs', SongViewSet, 'songs')

urlpatterns = router.urls
