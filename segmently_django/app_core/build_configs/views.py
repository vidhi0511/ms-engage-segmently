# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from .models import BuildConfig
from .serializers import BuildConfigSerializer
from rest_framework import viewsets
from .filters import BuildConfigFilter

# Create your views here.
class BuildConfigViewSet(viewsets.ModelViewSet):
    queryset = BuildConfig.objects.all()
    serializer_class = BuildConfigSerializer
    ordering_fields = ('__all__')
    filter_class = BuildConfigFilter