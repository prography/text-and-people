from board.models import Category, Post, Comment
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from board.serializers import CategorySerializer, PostSerializer, CommentSerializer
from rest_framework import viewsets


class CategoryViewSet(viewsets.ModelViewSet):
        queryset = Category.objects.all()
        serializer_class = CategorySerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filter_fields = ('post', )

