from rest_framework.generics import ListAPIView

from apps.main.api.serializers.read.skills import ReadSkillsSerializer
from apps.main.models import Skills


class SkillsViewSet(ListAPIView):
    queryset = Skills.objects.all()
    serializer_class = ReadSkillsSerializer