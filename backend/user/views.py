from rest_framework import viewsets

from board.models import Post
from board.serializers import PostSerializer
from .models import User
from .serializers import CreateUserSerializer


class CreateUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer


class UserPostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(user=self.request.user)