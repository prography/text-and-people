
from board.models import Category, Post, Comment
from django.utils import timezone
from rest_framework import serializers


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('name', )


class PostSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), allow_null=True)
    created_date = serializers.HiddenField(default=timezone.now)

    class Meta:
        model = Post
        fields = ('title', 'user', 'body', 'category', 'created_date', 'published_date', 'good',)


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    created_date = serializers.HiddenField(default=timezone.now)

    class Meta:
        model = Comment
        fields = ('id', 'post', 'user', 'body', 'created_date',)
