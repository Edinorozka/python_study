from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated

from .models import Post, Category
from .serializer import PostSerializers, CategorySerializers


class PostAPIPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 100

class PostAPIList(generics.ListCreateAPIView):
    queryset = Post.objects.filter(status="published")
    serializer_class = PostSerializers
    pagination_class = PostAPIPagination


class PostAPIUpdate(generics.RetrieveUpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializers
    #permission_classes = IsAuthenticated


class CategoryView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializers


