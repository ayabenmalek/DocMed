from rest_framework import serializers
from .models import User,Ecrivain,Ecrit,Enrolled,Comment,Favoris
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'nom', 'prenom', 'email', 'password', 'medical']
        extra_kwargs = {'password': {'write_only': True}}
    def create(self, validated_data):
        user = User(
            nom=validated_data['nom'],
            prenom=validated_data['prenom'],
            email=validated_data['email'],
            medical=validated_data['medical']
        )
        user.password = validated_data['password']  # Add password hashing later
        user.save()
        return user    

class EcrivainSerializer(serializers.ModelSerializer):
    cv = serializers.ImageField(required=True)
    certificats = serializers.ImageField(required=True)

    class Meta:
        model = Ecrivain
        fields = ['id', 'nom', 'prenom', 'email', 'num_tlphn',
                  'nationalite', 'cv', 'certificats', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        ecrivain = Ecrivain(
            nom=validated_data['nom'],
            prenom=validated_data['prenom'],
            email=validated_data['email'],
            num_tlphn=validated_data.get('num_tlphn', ''),
            nationalite=validated_data['nationalite'],
            cv=validated_data['cv'],
            certificats=validated_data['certificats']
        )
        ecrivain.password = make_password(validated_data['password'])  # Hash the password
        ecrivain.save()
        return ecrivain
    

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

        

