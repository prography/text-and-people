from django.urls import path, include
from rest_framework import routers
from . import views

app_name = 'board'

router = routers.DefaultRouter()
router.register(r'board', views.CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]