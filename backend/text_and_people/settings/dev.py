try:
    from .base import *
except ImportError:
    pass

INSTALLED_APPS += [
    'debug_toolbar',
]

MIDDLEWARE += [
    'debug_toolbar.middleware.DebugToolbarMiddleware',
]

BROKER_BACKEND = 'memory'
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
INTERNAL_IPS = ['127.0.0.1', ]
ALLOWED_HOSTS = ['*', ]
