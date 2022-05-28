REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    # 'rest_framework.renderers.BrowsableAPIRenderer',
    ),
    # Authentication means getting the User Object
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication'
    ],
    # Permission means handling permissions for accessing database
    'DEFAULT_PERMISSION_CLASSES': [
        #'rest_framework.permissions.IsAuthenticated'
    ],

    'DEFAULT_FILTER_BACKENDS':
    (
        'rest_framework_filters.backends.RestFrameworkFilterBackend',
        'rest_framework.filters.OrderingFilter',
    ),

    'DEFAULT_PAGINATION_CLASS': 'helpers.pagination.StandardResultsSetPagination',
    'PAGINATE_BY_PARAM': 'page_size',
    'PAGE_SIZE': 20,

    'DATETIME_FORMAT': "iso-8601",
    'DATETIME_INPUT_FORMATS': ["iso-8601"],

    'DATE_FORMAT': "%d/%m/%Y",
    'DATE_INPUT_FORMATS': ["%d/%m/%Y"],

    'TIME_FORMAT': "%I:%M:%S %p",
    'TIME_INPUT_FORMATS': ["%I:%M:%S %p"],

    'UNICODE_JSON': False,
}
