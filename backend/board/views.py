from rest_framework import viewsets
from board.serializers import CategorySerializer, PostSerializer
from board.models import Category, Post


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer