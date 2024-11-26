from django.shortcuts import render

# Create your views here.
#MANEL'S VIEWS :

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http.response import JsonResponse
from .models import User,Ecrivain,Ecrit,Enrolled,Comment,Favoris
from .serializers import UserSerializer,EcrivainSerializer,EcritSerializer,EnrolledSerializer,CommentSerializer,FavorisSerializer

from django.core.files.storage import default_storage

@csrf_exempt
class SearchEcritView(APIView):
    def get(self, request):
        ecrit_type = request.query_params.get('type')  # Get the type (article, cours, thèse)

        if ecrit_type not in ['article', 'cours', 'thèse']:
            return Response({"error": "Invalid type. Valid options are 'article', 'cours', or 'thèse'."},
                            status=status.HTTP_400_BAD_REQUEST)

        # Filter by type and search query (if provided)
        results = Ecrit.objects.filter(type=ecrit_type)


        serializer = EcritSerializer(results, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


