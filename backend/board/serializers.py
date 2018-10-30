from django.contrib.auth import get_user_model
from rest_framework import serializers

from board.models import Category, Post


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'email', 'name')


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)


class PostSerializer(serializers.HyperlinkedModelSerializer):
    author = AuthorSerializer(read_only=True)
    category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ('title', 'author', 'body', 'category', 'created_date', 'published_date', 'good')
