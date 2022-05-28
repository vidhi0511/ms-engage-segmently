from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.authtoken import views
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_swagger.views import get_swagger_view

from swagger.custom import SwaggerSchemaView
from api.v1 import urlpatterns as apiv1pattern

urlpatterns = [
    url(r'^admin/', admin.site.urls),
]

urlpatterns += [
    # This url handles authentication token for REST
    # Updated url earlier -> ^api-token-auth/
    url(r'^api/token-auth/', views.obtain_auth_token),
]

"""
This handles the api routes that are created in the api folder
apiv1pattern signifies first version of apis which are used
Router is used to ensure all of the routes are created in /api/v<n>/
"""
urlpatterns += apiv1pattern

"""
This adds graphql routes
"""

# Static
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    url(r'^swagger/', SwaggerSchemaView.as_view())
    #url(r'^swagger/', get_swagger_view(title='Pastebin API'))
]

