from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

from apps.main.models import (
    Project,
    ProjectImages,
    ProjectTool,
    ProjectFeature,
    ProjectCapability,
)


class ProjectImagesInline(admin.TabularInline):
    model = ProjectImages
    extra = 1


@admin.register(Project)
class ProjectAdmin(TranslationAdmin):
    pass


@admin.register(ProjectTool)
class ProjectToolAdmin(admin.ModelAdmin):
    list_display = ("tool",)
    search_fields = ("tool",)


@admin.register(ProjectFeature)
class ProjectFeatureAdmin(TranslationAdmin):
    pass


@admin.register(ProjectCapability)
class ProjectCapabilityAdmin(TranslationAdmin):
    pass
