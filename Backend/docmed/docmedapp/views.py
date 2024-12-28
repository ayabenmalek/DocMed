
# Create your views here.
#MANEL'S VIEWS :

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Ecrit,Comment,Favoris
from .serializers import EcritSerializer,CommentSerializer,FavorisSerializer
from datetime import datetime,timedelta 
from django.db.models import Count



class SearchEcritApiView(APIView): 
    def get(self, request): 
        ecrit_type = request.query_params.get('type')  # Get the type (article, cours, these)
        search_query = request.query_params.get('q')

        if ecrit_type not in ['article', 'cours', 'these']:
            return Response({"error": "Invalid type. Valid options are 'article', 'cours', or 'these'."},
                            status=status.HTTP_400_BAD_REQUEST)
        
        results = Ecrit.objects.filter(type=ecrit_type)

        if search_query:
            results = results.filter(titre__icontains=search_query)

        serializer = EcritSerializer(results, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
            


class GetComments(APIView):
    def get(self, request, *args, **kwargs):
        results = Comment.objects.all()
        dataSerializers = CommentSerializer(results,many=True)
        return Response({'status':'success','data':dataSerializers.data },status=200) 

class GetFavoris(APIView):
    def get(self, request, *args, **kwargs):
        results = Favoris.objects.all()
        dataserialised=FavorisSerializer(results,many=True)
        return Response({'status':'success','data':dataserialised.data},status=200)
    
    
class GetRecent(APIView):
    def get(self, request, *args, **kwargs):
        five_days_ago=datetime.now().date() - timedelta(days=5)

        results = Ecrit.objects.filter(date_published__gte=five_days_ago)
        results_serialised=EcritSerializer(results,many=True)
        return Response({'status':'success','data':results_serialised.data},status=200)

class GetMostLiked(APIView):

    def get(self, request, *args, **kwargs):

        top_ecrit = (
            Favoris.objects
            .values('ecrit')
            .annotate(likes_count=(Count('user')))
            .order_by('-likes_count')[:5]

        )
        list_ecrit_ids = (item['ecrit'] for item in top_ecrit)
        most_liked_ecrit= Ecrit.objects.filter(ecrit_id__in=list_ecrit_ids)
        serializer=EcritSerializer(most_liked_ecrit,many=True)

        results=[
            {
                'ecrit': ecrit_data,
                'likes_countes': next(item['likes_count'] for item in top_ecrit if item['ecrit'] == ecrit_data['ecrit_id'])
            }
            for ecrit_data in serializer.data
        ]

        return Response({'status':'success','data':results},status=status.HTTP_200_OK)
    
        

