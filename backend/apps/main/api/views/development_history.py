from rest_framework.generics import ListAPIView

from apps.main.api.serializers.read.development_history import ReadDevelopmentHistorySerializer
from apps.main.models import DevelopmentHistory


class DevelopmentHistoryViewSet(ListAPIView):
    queryset = DevelopmentHistory.objects.prefetch_related("icons").order_by("id")
    serializer_class = ReadDevelopmentHistorySerializer
