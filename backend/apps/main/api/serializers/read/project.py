from rest_framework import serializers

from apps.main.models.project import Project, ProjectTool, ProjectFeature, ProjectCapability, ProjectImages


class ProjectCapabilityListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCapability
        fields = ('id', 'name')
        read_only_fields = ('id',)


class ProjectToolListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectTool
        fields = ('id', 'tool')
        read_only_fields = ('id',)


class ProjectFeatureListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectFeature
        fields = ('id', 'name')
        read_only_fields = ('id',)


class ProjectImagesListSerializer(serializers.ModelSerializer):
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
    tools = ProjectToolListSerializer(read_only=True, many=True)
    features = ProjectFeatureListSerializer(read_only=True, many=True)
    capabilities = ProjectCapabilityListSerializer(read_only=True, many=True)
    images = ProjectImagesListSerializer(read_only=True, many=True)

    class Meta(ProjectListSerializer.Meta):
        fields = ProjectListSerializer.Meta.fields + ('tools', 'features', 'capabilities', 'images')
        read_only_fields = ('tools', 'features', 'capabilities', 'images')
