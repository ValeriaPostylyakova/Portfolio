from modeltranslation.translator import register, TranslationOptions

from apps.main.models import DevelopmentHistory, Project, ProjectFeature, ProjectCapability


@register(DevelopmentHistory)
class DevelopmentHistoryTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'date')


@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ('description',)


@register(ProjectFeature)
class ProjectFeatureTranslationOptions(TranslationOptions):
    fields = ('feature',)


@register(ProjectCapability)
class ProjectCapabilityTranslationOptions(TranslationOptions):
    fields = ('capability',)
