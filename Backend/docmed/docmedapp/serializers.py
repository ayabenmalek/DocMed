from rest_framework import serializers
from .models import User,Ecrivain,Ecrit,Enrolled,Comment,Favoris

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class EcrivainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ecrivain
        fields = '__all__'

class EcritSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ecrit
        fields = '__all__'

class EnrolledSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrolled
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Comment
        fields = '__all__'

class FavorisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favoris
        fields = '__all__'

        

