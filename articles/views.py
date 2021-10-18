from rest_framework import generics
from .serializers import ArticleSerializer
from .models import Article
from django.shortcuts import get_object_or_404

class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ArticleSerializer
    
    def get_queryset(self):
        pk = self.kwargs['pk']
        return Article.objects.filter(id=pk)
