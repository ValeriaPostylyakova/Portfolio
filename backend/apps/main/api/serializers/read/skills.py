from rest_framework import serializers

from apps.main.models.skills import Skills


class SkillsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ('id', 'name')
        read_only_fields = ('id',)
