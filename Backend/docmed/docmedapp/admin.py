from django.contrib import admin
from .models import User,Ecrivain,Ecrit,Enrolled,Comment,Favoris 

# Register your models here.

admin.site.register(User)
admin.site.register(Ecrivain)
@admin.register(Ecrit)
class EcritAdmin(admin.ModelAdmin):
    list_display = ('ecrit_id', 'titre', 'type', 'ecrivain', 'date_published')  # Fields to display in the list view
    list_filter = ('type', 'date_published')  # Add filters for type and date
    search_fields = ('titre', 'ecrivain__name')  # Enable search by title or ecrivain's name
    ordering = ('-date_published',)  # Order by date_published (most recent first)
admin.site.register(Enrolled)
admin.site.register(Comment)
admin.site.register(Favoris)
