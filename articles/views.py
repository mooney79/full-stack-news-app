from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import ArticleSerializer
from .models import Article
# from django.shortcuts import get_object_or_404
from .permissions import IsOwnerOrReadOnly 

class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ArticleSerializer
    permission_classes = (IsOwnerOrReadOnly,)
    
    def get_queryset(self):
        pk = self.kwargs['pk']
        return Article.objects.filter(id=pk)


