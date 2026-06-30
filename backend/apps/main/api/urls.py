from django.urls import path, include
from rest_framework import routers

from apps.main.api.views import ProjectViewSet, DevelopmentHistoryViewSet, SkillsViewSet

router = routers.DefaultRouter()
router.register('projects', ProjectViewSet)

urlpatterns = [
    # Подключаем роутер
    path('', include(router.urls)),
    path('development-history/', DevelopmentHistoryViewSet.as_view(), name='development-history-list'),
    path('skills/', SkillsViewSet.as_view(), name='skills-list'),
]
