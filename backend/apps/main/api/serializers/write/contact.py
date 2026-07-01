from kombu.exceptions import OperationalError
from rest_framework import serializers

from apps.main.api.tasks.send_feedback_email import send_feedback_email_task


class EmailSendSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=155, required=True)
    email = serializers.EmailField(required=True)
    message = serializers.CharField(required=True, max_length=5000)

    def create(self, validated_data):
        try:
            send_feedback_email_task.delay(**validated_data)
        except OperationalError:
            raise serializers.ValidationError("Сервис отправки сообщений временно недоступен.")

        return validated_data
