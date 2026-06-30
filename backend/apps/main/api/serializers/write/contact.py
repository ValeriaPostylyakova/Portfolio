from rest_framework import serializers


class WriteContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=155, required=True)
    email = serializers.EmailField(required=True)
    message = serializers.CharField(required=True, max_length=5000)