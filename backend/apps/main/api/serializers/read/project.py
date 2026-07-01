from rest_framework import serializers

from apps.main.models.project import Project, ProjectTool, ProjectFeature, ProjectCapability, ProjectImages


class ReadProjectCapabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCapability
        fields = ('id', 'capability')
        read_only_fields = ('id',)


class ReadProjectToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectTool
        fields = ('id', 'tool')
        read_only_fields = ('id',)


class ReadProjectFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectFeature
        fields = ('id', 'feature')
        read_only_fields = ('id',)


class ReadProjectImagesSerializer(serializers.ModelSerializer):
    project = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = ProjectImages
        fields = ('id', 'image', 'project')
        read_only_fields = ('id',)


class ProjectListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'description', 'image', 'project_url', 'github_url')
        read_only_fields = ('id',)


class ProjectDetailSerializer(ProjectListSerializer):
    tools = ReadProjectToolSerializer(read_only=True, many=True)
    features = ReadProjectFeatureSerializer(read_only=True, many=True)
    capabilities = ReadProjectCapabilitySerializer(read_only=True, many=True)
    images = ReadProjectImagesSerializer(read_only=True, many=True)

    class Meta(ProjectListSerializer.Meta):
        fields = ProjectListSerializer.Meta.fields + ('tools', 'features', 'capabilities', 'images')
        read_only_fields = ('tools', 'features', 'capabilities', 'images')
