from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'category', views.CategoryViewSet, base_name='category')
router.register(r'post', views.PostViewSet, base_name='post')

app_name = 'board'
urlpatterns = router.urls

# from rest_framework.routers import DefaultRouter
#
# from board.api.views import PostViewSet, CategoryViewSet, BoardViewSet
#
# router = DefaultRouter()
# router.register(r'post', PostViewSet, base_name='post')
# router.register(r'board', BoardViewSet, base_name='board')
# router.register(r'category', CategoryViewSet, base_name='category')
#
# app_name = 'board'
# urlpatterns = router.urls
