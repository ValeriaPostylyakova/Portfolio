from rest_framework import serializers

from apps.main.models.development_history import DevelopmentHistory, DevelopmentHistoryIcons


class DevelopmentHistoryListIconsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DevelopmentHistoryIcons
        fields = ('id', 'image',)
        read_only_fields = ('id',)


class DevelopmentHistoryListSerializer(serializers.ModelSerializer):
    icons = DevelopmentHistoryListIconsSerializer(many=True, read_only=True)

    class Meta:
        model = DevelopmentHistory
        fields = ('id', 'title', 'description', 'date', 'icons')
        read_only_fields = ('id', 'icons')
