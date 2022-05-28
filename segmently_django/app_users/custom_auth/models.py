# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    mobile_no = models.CharField(max_length=30, blank=True, default='')

    def __unicode__(self):
        return self.username
