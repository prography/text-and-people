from django.utils import timezone
from rest_framework import serializers

from board.models import Category, Post, Comment


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)


class PostSerializer(serializers.HyperlinkedModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), allow_null=True)
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    created_date = serializers.HiddenField(default=timezone.now)

    class Meta:
        model = Post
        fields = ('title', 'user', 'body', 'category', 'created_date', 'published_date')


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    created_date = serializers.HiddenField(default=timezone.now)

    class Meta:
        model = Comment
        fields = ('id', 'body', 'user', 'created_date', 'post')
