from django.urls import path, include
from rest_framework import routers

from apps.main.api.views import ProjectViewSet, DevelopmentHistoryListAPIView, SkillsViewSet, ContactView

router = routers.DefaultRouter()
router.register('projects', ProjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('development-history/', DevelopmentHistoryListAPIView.as_view(), name='development-history-list'),
    path('skills/', SkillsViewSet.as_view(), name='skills-list'),
    path('send-feedback-email/', ContactView.as_view(), name='contact')
]
