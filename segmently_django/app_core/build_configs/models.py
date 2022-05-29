from app_core.base_model.models import BaseModelTemplate

from django.db import models
from django.utils import timezone

STATUS_CHOICES = (
    ("QUEUED","QUEUED"),
    ("EXECUTING","EXECUTING"),
    ("PROCESSED","PROCESSED")
)

# Create your models here.
class BuildConfig(BaseModelTemplate) :
    name = models.CharField(max_length=200)
    segment = models.CharField(max_length=200)
    config_input_data = models.TextField(blank=True, null=True)
    analytics_output_data = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=200,blank=True, null=True, choices=STATUS_CHOICES, default=STATUS_CHOICES[0][0])
    
    class Meta:
        ordering=['-name']
        indexes=[
            models.indexes.Index(fields=['name']),
            models.indexes.Index(fields=['-name']),
        ]
    