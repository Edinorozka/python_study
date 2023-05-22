from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _


class Post(models.Model):
    class PostStatus(models.TextChoices):
        DRAFT = "draft", _('Draft')
        PUBLISHED = "published", _('Published')

    id = models.indexes
    title = models.CharField(max_length=250)
    author = models.ForeignKey(User, related_name='blog_posts', on_delete=models.CASCADE)
    category = models.ForeignKey('Category', on_delete=models.PROTECT, null=True)
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10, choices=PostStatus.choices, default=PostStatus.DRAFT)

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name
