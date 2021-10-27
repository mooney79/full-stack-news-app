from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.serializers import Serializer
from .serializers import ArticleSerializer, BitesizeSerializer, UserSerializer
from .models import Article, User, Bitesize
# from django.shortcuts import get_object_or_404
from .permissions import IsOwnerOrReadOnly 

class ArticleListAPIView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ArticleSerializer
    # permission_classes = (IsOwnerOrReadOnly,)
    
    def get_queryset(self):
        pk = self.kwargs['pk']
        return Article.objects.filter(id=pk)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

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
    permission_classes = (IsAuthenticatedOrReadOnly,)
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



class BitesizeAPIViewList(generics.ListCreateAPIView):
    serializer_class = BitesizeSerializer
    queryset = Bitesize.objects.all()
    permission_classes = (IsAuthenticatedOrReadOnly,)


class BitesizeDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BitesizeSerializer

    # permission_classes = (IsOwnerOrReadOnly,)
    
    def get_queryset(self):
        pk = self.kwargs['pk']
        return Bitesize.objects.filter(id=pk)



class DraftsList(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    """Returns Drafts written by User"""
    def get_queryset(self):
        queryset = Article.objects.all()
        queryset = Article.objects.filter(phase='dft')
        return queryset

class SubsList(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    """Returns Submitted written by User"""
    def get_queryset(self):
        queryset = Article.objects.all()
        queryset = Article.objects.filter(phase='sub')
        return queryset

class PubsList(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    """Returns Published written by User"""
    def get_queryset(self):
        queryset = Article.objects.all()
        queryset = Article.objects.filter(phase='pub')
        return queryset

class RejList(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    """Returns Rej written by User"""
    def get_queryset(self):
        queryset = Article.objects.all()
        queryset = Article.objects.filter(phase='rej')
        return queryset

class PersonalDraftsList(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    """Returns Drafts written by User"""
    def get_queryset(self):
        queryset = Article.objects.all()
        queryset = Article.objects.filter(author=self.request.user)
        queryset = Article.objects.filter(phase='dft')
        return queryset

class PersonalSubsList(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    """Returns Submitted written by User"""
    def get_queryset(self):
        queryset = Article.objects.all()
        queryset = Article.objects.filter(author=self.request.user)
        queryset = Article.objects.filter(phase='sub')
        return queryset

class PersonalPubsList(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    """Returns Published written by User"""
    def get_queryset(self):
        queryset = Article.objects.all()
        queryset = Article.objects.filter(author=self.request.user)
        queryset = Article.objects.filter(phase='pub')
        return queryset

class PersonalRejList(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    """Returns Rej written by User"""
    def get_queryset(self):
        queryset = Article.objects.all()
        queryset = Article.objects.filter(author=self.request.user)
        queryset = Article.objects.filter(phase='rej')
        return queryset



# class ArticleListConspiracyView(generics.ListCreateAPIView):
#     serializer_class = ArticleSerializer
#     permission_classes = (IsAuthenticatedOrReadOnly,)
#     """Returns published Articles with category Conspiracy"""
#     def is_conspiracy(self):
#         if Article.object.category1 == 'con':
#             return True
#         elif Article.object.catgory2 == "con":
#             return True
#         elif Article.object.category3 == "con":
#             return True
#         else:
#             return False

#     def get_queryset(self):
#         queryset = Article.objects.filter(self=is_Conspiracy())
#         return queryset


#         def myFunc(x):
#   if x < 18:
#     return False
#   else:
#     return True

# adults = filter(myFunc, ages)

# for x in adults:
#   print(x)
    
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
