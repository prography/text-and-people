try:
    from .base import *
except ImportError:
    pass

BROKER_BACKEND = 'memory'
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
