import logging

from kombu.exceptions import OperationalError
from rest_framework import serializers

from apps.main.api.tasks.send_feedback_email import send_feedback_email_task

logger = logging.getLogger(__name__)


class EmailSendSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=155, required=True)
    email = serializers.EmailField(required=True)
    message = serializers.CharField(required=True, max_length=5000)

    def create(self, validated_data):
        logger.info(
            "Постановка задачи на отправку письма в очередь. Email: %s",
            validated_data["email"],
        )

        try:
            send_feedback_email_task.delay(**validated_data)
        except OperationalError:
            logger.exception(
                "Не удалось поставить задачу отправки письма в очередь Celery."
            )
            raise serializers.ValidationError("Сервис отправки сообщений временно недоступен.")

        return validated_data
