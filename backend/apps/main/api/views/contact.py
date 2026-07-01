from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.main.api.serializers.write.contact import EmailSendSerializer


class ContactView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = EmailSendSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({
            "success": True,
            "message": "Сообщение принято в обработку."
        }, status=status.HTTP_202_ACCEPTED)
