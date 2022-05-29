from app_core.base_model.models import BaseModelTemplate

from django.db import models
from django.utils import timezone


# Create your models here.
class DiscoverInsights(BaseModelTemplate) :
    segment = models.CharField(max_length=200)
    kpi_data = models.TextField(blank=True, null=True)
    graph_data = models.TextField(blank=True, null=True)
    
    class Meta:
        ordering =['-last_updated_on']
        indexes=[
            models.indexes.Index(fields=['segment']),
            models.indexes.Index(fields=['-segment']),
        ]
    