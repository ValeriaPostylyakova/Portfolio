from django.contrib import admin

from apps.main.models import (
    DevelopmentHistory,
    DevelopmentHistoryIcons,
)


class DevelopmentHistoryIconsInline(admin.TabularInline):
    model = DevelopmentHistoryIcons
    extra = 1


@admin.register(DevelopmentHistory)
class DevelopmentHistoryAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "date",
    )
    search_fields = (
        "title",
        "description",
    )
    ordering = ("-date",)
    inlines = [
        DevelopmentHistoryIconsInline,
    ]