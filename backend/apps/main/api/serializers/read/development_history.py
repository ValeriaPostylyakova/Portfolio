from rest_framework import serializers

from apps.main.models.development_history import DevelopmentHistory, DevelopmentHistoryIcons


class ReadDevelopmentHistoryIconsSerializer(serializers.ModelSerializer):
    development_history = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = DevelopmentHistoryIcons
        fields = ('id', 'image', 'development_history')
        read_only_fields = ('id',)

class ReadDevelopmentHistorySerializer(serializers.ModelSerializer):
    icons = ReadDevelopmentHistoryIconsSerializer(many=True, read_only=True)
    class Meta:
        model = DevelopmentHistory
        fields = ('id', 'title', 'description', 'date', 'icons')
        read_only_fields = ('id', 'icons')