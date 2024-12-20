
# Create your views here.
#MANEL'S VIEWS :

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Ecrit,Comment
from .serializers import EcritSerializer,CommentSerializer


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

