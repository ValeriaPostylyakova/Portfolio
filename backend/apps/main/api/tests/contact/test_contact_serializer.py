from unittest import TestCase
from unittest.mock import patch

from kombu.exceptions import OperationalError
from rest_framework import serializers

from apps.main.api.serializers.write.contact import EmailSendSerializer


class EmailSendSerializerTests(TestCase):

    def setUp(self):
        self.valid_data = {
            "name": "Valeria Postylyakova",
            "email": "valeria.postylyakova@test.com",
            "message": "Hello, this is a test message."
        }

    @patch(
        "apps.main.api.serializers.write.contact.send_feedback_email_task.delay"
    )
    def test_delay_called(self, mock_delay):
        serializer = EmailSendSerializer(data=self.valid_data)

        self.assertTrue(serializer.is_valid())

        serializer.save()

        mock_delay.assert_called_once_with(
            name="Valeria Postylyakova",
            email="valeria.postylyakova@test.com",
            message="Hello, this is a test message."
        )

    @patch(
        "apps.main.api.serializers.write.contact.send_feedback_email_task.delay"
    )
    def test_operational_error(self, mock_delay):
        mock_delay.side_effect = OperationalError()

        serializer = EmailSendSerializer(data=self.valid_data)

        self.assertTrue(serializer.is_valid())

        with self.assertRaises(serializers.ValidationError):
            serializer.save()
