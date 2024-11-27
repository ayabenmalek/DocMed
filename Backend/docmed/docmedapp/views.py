
# Create your views here.
#MANEL'S VIEWS :

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Ecrit
from .serializers import EcritSerializer


class SearchEcritApiView(APIView): 
    def get(self, request): 
        ecrit_type = request.query_params.get('type')  # Get the type (article, cours, thèse)

        if ecrit_type not in ['article', 'cours', 'these']:
            return Response({"error": "Invalid type. Valid options are 'article', 'cours', or 'thèse'."},
                            status=status.HTTP_400_BAD_REQUEST)

        # Filter by type and search query (if provided)
        results = Ecrit.objects.filter(type=ecrit_type)

        serializer = EcritSerializer(results, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
