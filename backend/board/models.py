
from django.db import models
from django.utils import timezone
from user.models import GithubUser


class Category(models.Model):   #카테고리
    name = models.CharField(max_length=20)


class Post(models.Model):       #포스트
    title = models.CharField(max_length=200)
    author = models.ForeignKey(GithubUser, on_delete=models.CASCADE)
    body = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(default=timezone.now, blank=True, null=True)
    good = models.IntegerField()


class Comment(models.Model):    #댓글
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(GithubUser, on_delete=models.CASCADE)
    body = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)




