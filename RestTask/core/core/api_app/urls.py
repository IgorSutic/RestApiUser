from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('viewset', views.Simplic, basename='viewset')

urlpatterns = [
    path('sample/', views.SampleViewApi.as_view()),
    path('sample/<int:id>/', views.SampleViewApi.as_view()),
    path('', include(router.urls)),
]
