from django.conf.urls import url, include
from rest_framework import routers

from app_users.custom_auth.views import UserViewSet
from app_core.build_configs.views import BuildConfigViewSet
from app_core.discover_insights.views import DiscoverInsightsViewSet




router = routers.DefaultRouter()

router.register(r'api/v1/users/user', UserViewSet)
router.register(r'api/v1/core/build-config', BuildConfigViewSet)
router.register(r'api/v1/core/discover-insights', DiscoverInsightsViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
]
