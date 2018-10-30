from board.models import Category, Post, Comment
from board.serializers import CategorySerializer, PostSerializer, CommentSerializer
from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet
from rest_framework_extensions.mixins import NestedViewSetMixin


class CategoryViewSet(viewsets.ModelViewSet):
        queryset = Category.objects.all()
        serializer_class = CategorySerializer


class PostViewSet(NestedViewSetMixin, ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentViewSet(NestedViewSetMixin, ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
