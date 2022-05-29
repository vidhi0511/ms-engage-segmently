# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.apps import AppConfig


class BuildConfigConfig(AppConfig):
    name = 'app_core.build_configs'

    def ready(self):
        import app_core.build_configs.signals
