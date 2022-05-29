# import os
# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'compose',
        'USER': 'root',
        'PASSWORD': 'example',
        'HOST': 'localhost',
    }
}
