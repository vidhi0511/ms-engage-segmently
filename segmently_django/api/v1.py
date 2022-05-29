from django.conf.urls import url, include
from rest_framework import routers

from app_users.custom_auth.views import UserViewSet
from app_core.build_configs.views import BuildConfigViewSet



router = routers.DefaultRouter()

router.register(r'api/v1/users/user', UserViewSet)
router.register(r'api/v1/core/build-config', BuildConfigViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
]
