# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
# from django.contrib.postgres.fields import HStoreField
import reversion
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
class BaseModelTemplate(models.Model):
    additional_notes =models.CharField(max_length=150, blank=True, null=True, default='')
    created_on = models.DateTimeField(auto_now_add=True)
    last_updated_on = models.DateTimeField(auto_now=True)
    # custom_data = HStoreField(null=True, blank=True)
    
    class Meta:
        abstract = True
        ordering = ['-last_updated_on']

    def __unicode__(self):
        return str(self.id)