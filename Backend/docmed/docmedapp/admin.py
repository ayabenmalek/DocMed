from django.contrib import admin
from .models import User,Ecrivain,Ecrit,Enrolled,Comment,Favoris 

# Register your models here.

admin.site.register(User)
admin.site.register(Ecrivain)
admin.site.register(Ecrit)
admin.site.register(Enrolled)
admin.site.register(Comment)
