from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/', views.ArticleDetailAPIView.as_view(), name="article_detail"),
    path('', views.ArticleListAPIView.as_view(), name="article_list", ),
    path('users/', views.UserListAPIView.as_view(), name="user_list"),
    path('users/<int:pk>/', views.UserDetailAPIView.as_view(), name="user_detail"),
    path('pub/', views.ArticleListFrontendView.as_view(), name="article_page_list"),
    path('personal/', views.PersonalArticleList.as_view(), name="my_articles_list"),    
    path('personal/dft/', views.PersonalDraftsList.as_view(), name="my_articles_list"),    
    path('personal/sub/', views.PersonalSubsList.as_view(), name="my_articles_list"),    
    path('personal/pub/', views.PersonalPubsList.as_view(), name="my_articles_list"),    
    path('personal/rej/', views.PersonalRejList.as_view(), name="my_articles_list"),    
    path('bitesize/', views.BitesizeAPIViewList.as_view(), name="bitesize_news_list"),   
    path('bitesize/<int:pk>/', views.BitesizeDetailAPIView.as_view(), name="bitesize_details"),
    path('dfts/', views.DraftsList.as_view(), name="drafts_list"),
    path('subs/', views.SubsList.as_view(), name="subs_list"),
    path('pubs/', views.PubsList.as_view(), name="pubs_list"),
    path('rej/', views.RejList.as_view(), name="rej_list"),
]

# path('con/', views.ArticleListConspiracyView.as_view(), name="conspiracy_list"),


