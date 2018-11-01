from django.urls import path, include
from rest_framework import routers
from . import views
from rest_framework.authtoken.views import obtain_auth_token


app_name = 'user'

router = routers.DefaultRouter()
router.register(r'register', views.CreateUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-token-auth', obtain_auth_token)
]
