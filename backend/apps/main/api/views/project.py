from rest_framework import viewsets

from apps.main.api.serializers.read.project import ReadProjectSerializer
from apps.main.models import Project


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.prefetch_related('tools', 'features', 'images', 'capabilities')
    serializer_class = ReadProjectSerializer