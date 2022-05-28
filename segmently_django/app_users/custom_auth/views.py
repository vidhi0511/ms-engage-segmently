    # -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth import get_user_model
User = get_user_model()
from .serializers import UserSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from .filters import UserFilter

# Create your views here.
# ViewSets define the view behavior.

class UserViewSet(viewsets.ModelViewSet):
    
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_class = UserFilter

    def retrieve(self, request, pk=None):
        print(pk)

        if request.user and pk == 'me':
            
            serializer_instance = request.user # Else User.objects.xxxx was suppoed to be used

            return Response(UserSerializer(instance=serializer_instance).data)

        return super(UserViewSet, self).retrieve(request, pk)
