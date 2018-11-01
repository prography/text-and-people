from django.urls import path
from rest_framework.routers import DefaultRouter
from board.views import CategoryViewSet, PostViewSet, CommentViewSet


router = DefaultRouter()
router.register(r'category', CategoryViewSet, base_name='category')
router.register(r'post', PostViewSet, base_name='post')
router.register(r'comment', CommentViewSet, base_name='comment')

app_name = 'board'
urlpatterns = router.urls
