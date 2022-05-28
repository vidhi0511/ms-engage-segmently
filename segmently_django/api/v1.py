from django.conf.urls import url, include
from rest_framework import routers

from app_users.custom_auth.views import UserViewSet



router = routers.DefaultRouter()

router.register(r'api/v1/users/user', UserViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
]
