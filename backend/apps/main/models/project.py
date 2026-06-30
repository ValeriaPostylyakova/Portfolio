import uuid
from django.db import models

class Project(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images', blank=True, null=True)

    project_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)

    tools = models.ManyToManyField('ProjectTool', related_name='projects', blank=True)
    features = models.ManyToManyField('ProjectFeature', related_name='projects', blank=True)
    capabilities = models.ManyToManyField('ProjectCapability', related_name='projects', blank=True)

    def __str__(self):
        return self.title


class ProjectImages(models.Model):
    image = models.ImageField(upload_to='project_images')
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')

    def __str__(self):
        return f"{self.project.title} - {self.image.name}"

class ProjectFeature(models.Model):
    feature = models.CharField(max_length=100)

    def __str__(self):
        return self.feature

class ProjectCapability(models.Model):
    capability = models.CharField(max_length=100)

    def __str__(self):
        return self.capability

class ProjectTool(models.Model):
    tool = models.CharField(max_length=100)

    def __str__(self):
        return self.tool