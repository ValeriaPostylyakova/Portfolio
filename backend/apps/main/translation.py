from modeltranslation.translator import TranslationOptions, register

from apps.main.models import (
    DevelopmentHistory,
    Project,
    ProjectCapability,
    ProjectFeature,
)


@register(DevelopmentHistory)
class DevelopmentHistoryTranslationOptions(TranslationOptions):
    fields = ("title", "description", "date")


@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ("description",)


@register(ProjectFeature)
class ProjectFeatureTranslationOptions(TranslationOptions):
    fields = ("name",)


@register(ProjectCapability)
class ProjectCapabilityTranslationOptions(TranslationOptions):
    fields = ("name",)
