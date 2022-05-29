INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.postgres',
]


#External

INSTALLED_APPS += [
    'rest_framework',
    'rest_framework.authtoken',
    #'django_filters',
    'rest_framework_filters',
    'rest_framework_swagger',
    'django_extensions',
    'dry_rest_permissions',
     'huey.contrib.djhuey',
]


INSTALLED_APPS += [
    'app_core.base_model',
    # User App
    'app_users.custom_auth',
    # Core Apps
    'app_core.build_configs',
    'app_core.discover_insights',
]