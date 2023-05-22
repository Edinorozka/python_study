from django.contrib import admin
from .models import Post, Category


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'publish', 'status', 'category')
    list_filter = ('status', 'created', 'publish', 'author', 'category')
    search_fields = ('title', 'body')
    prepopulated_fields = {'id': ('title',)}
    raw_id_fields = ('author',)
    date_hierarchy = 'publish'
    ordering = ['status', 'publish', 'category']


admin.site.register(Post, PostAdmin)