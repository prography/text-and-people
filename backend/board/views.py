from rest_framework import viewsets
from board.serializers import CategorySerializer
from board.models import Category


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
