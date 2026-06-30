from django.contrib import admin

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
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "project_url",
        "github_url",
    )
    search_fields = (
        "title",
        "description",
    )
    list_filter = (
        "tools",
        "features",
        "capabilities",
    )
    filter_horizontal = (
        "tools",
        "features",
        "capabilities",
    )
    inlines = [
        ProjectImagesInline,
    ]


@admin.register(ProjectTool)
class ProjectToolAdmin(admin.ModelAdmin):
    list_display = ("tool",)
    search_fields = ("tool",)


@admin.register(ProjectFeature)
class ProjectFeatureAdmin(admin.ModelAdmin):
    list_display = ("feature",)
    search_fields = ("feature",)


@admin.register(ProjectCapability)
class ProjectCapabilityAdmin(admin.ModelAdmin):
    list_display = ("capability",)
    search_fields = ("capability",)