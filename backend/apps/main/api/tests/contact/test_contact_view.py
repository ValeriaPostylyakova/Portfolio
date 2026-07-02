from unittest.mock import patch

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase


class ContactViewTests(APITestCase):
    def setUp(self):
        self.url = reverse('contact')

        self.valid_data = {
            "name": "Valeria Postylyakova",
            "email": "valeria.postylyakova@test.com",
            "message": "Hello, this is a test message."
        }

    @patch("apps.main.api.serializers.write.contact.EmailSendSerializer.save")
    def test_contact_success(self, mock_save):
        response = self.client.post(self.url, self.valid_data)

        self.assertEqual(response.status_code, status.HTTP_202_ACCEPTED)

        self.assertEqual(
            response.data,
            {
                "success": True,
                "message": "Сообщение принято в обработку."
            }
        )

        mock_save.assert_called_once()
