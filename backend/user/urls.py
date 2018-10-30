from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from . import views

app_name = 'user'

router = routers.DefaultRouter()
router.register(r'register', views.CreateUserViewSet)
router.register(r'post', views.UserPostViewSet, base_name='post')

urlpatterns = [
    path('', include(router.urls)),
    path('api-token-auth/', obtain_auth_token, name='api-token-auth'),
]
