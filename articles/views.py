from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import ArticleSerializer, UserSerializer
from .models import Article, User
# from django.shortcuts import get_object_or_404
from .permissions import IsOwnerOrReadOnly 

class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ArticleSerializer
    # permission_classes = (IsOwnerOrReadOnly,)
    
    def get_queryset(self):
        pk = self.kwargs['pk']
        return Article.objects.filter(id=pk)

class UserListAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    
    def get_queryset(self):
        pk = self.kwargs['pk']
        return User.objects.filter(id=pk)


class ArticleListFrontendView(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    """Returns published Articles"""
    def get_queryset(self):
        queryset = Article.objects.filter(phase='pub')
        return queryset
    
class PersonalArticleList(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    """Returns Articles written by User"""
    def get_queryset(self):
        queryset = Article.objects.all()
        queryset = Article.objects.filter(author=self.request.user)
        return queryset
    
    # class PurchaseList(generics.ListAPIView):
    # serializer_class = PurchaseSerializer

    # def get_queryset(self):
    #     """
    #     Optionally restricts the returned purchases to a given user,
    #     by filtering against a `username` query parameter in the URL.
    #     """
    #     queryset = Purchase.objects.all()
    #     username = self.request.query_params.get('username')
    #     if username is not None:
    #         queryset = queryset.filter(purchaser__username=username)
    #     return queryset

        # queryset = Article.objects.all()
        # staff = self.request.query_params.get('is_staff')
        # if staff:
        #     queryset = queryset.filter(user__name=Article.author)
        # else:
        #     queryset = Article.objects.filter(phase='pub')
        # return queryset
