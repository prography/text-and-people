from django.urls import path
from rest_framework_extensions.routers import ExtendedSimpleRouter
from board.views import CategoryViewSet, PostViewSet, CommentViewSet


router = ExtendedSimpleRouter()
router.register(r'category', CategoryViewSet, base_name='category')


(
    router.register(r'post', PostViewSet)
          .register(r'comment',
                    CommentViewSet,
                    base_name='comment-books',
                    parents_query_lookups=['post'])
)


app_name = 'board'
urlpatterns = router.urls
