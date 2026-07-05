from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.main.api.serializers.write.contact import EmailSendSerializer

import logging

logger = logging.getLogger(__name__)


class ContactView(APIView):
    def post(self, request, *args, **kwargs):
        logger.info(
            "Получена форма обратной связи от пользователя: %s",
            request.data.get("email")
        )

        serializer = EmailSendSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        logger.info(
            "Запрос на отправку сообщения успешно поставлен в очередь. Email: %s",
            serializer.validated_data["email"],
        )

        return Response({
            "success": True,
            "message": "Сообщение принято в обработку."
        }, status=status.HTTP_202_ACCEPTED)
