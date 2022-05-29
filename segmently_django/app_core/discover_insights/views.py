# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from .models import DiscoverInsights
from .serializers import DiscoverInsightsSerializer
from rest_framework import viewsets
from .filters import DiscoverInsightsFilter

# Create your views here.
class DiscoverInsightsViewSet(viewsets.ModelViewSet):
    queryset = DiscoverInsights.objects.all()
    serializer_class = DiscoverInsightsSerializer
    ordering_fields = ('__all__')
    filter_class = DiscoverInsightsFilter