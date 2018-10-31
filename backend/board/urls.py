from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'category', views.CategoryViewSet, base_name='category')
router.register(r'post', views.PostViewSet, base_name='post')
router.register(r'comment', views.CommentViewSet, base_name='comment')

app_name = 'board'
urlpatterns = router.urls
