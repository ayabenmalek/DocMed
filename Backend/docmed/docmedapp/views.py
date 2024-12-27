
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


#Mey's

class EcritApiView(APIView):
    def get(self, request, ecrit_id):
        try:
            if not ecrit_id:
                raise AuthenticationFailed('Ecrit ID not provided')
            ecrit = Ecrit.objects.get(ecrit_id=ecrit_id)
            serializer = EcritSerializer(ecrit)
            return Response([serializer.data], status=status.HTTP_200_OK)
        except Ecrit.DoesNotExist:
            return Response({'error': 'Ecrit not found.'}, status=status.HTTP_404_NOT_FOUND)



class EcritsEcrivainApiView(APIView):
    def get(self, request, ecrivain_id):
        try:
            if not ecrivain_id:
                raise AuthenticationFailed('Ecrivain ID not provided')
            ecrivain = Ecrivain.objects.get(ecrivain_id=ecrivain_id)

            ecrits = Ecrit.objects.filter(ecrivain=ecrivain).values('titre', 'type')

            return Response(list(ecrits), status=status.HTTP_200_OK)
        except Ecrivain.DoesNotExist:
            return Response({"error": "Ecrivain not found."}, status=status.HTTP_404_NOT_FOUND)



class InfoEcrivainApiView(APIView):
    def get(self, request, ecrivain_id):
        try:
            if not ecrivain_id:
                raise AuthenticationFailed('Ecrivain ID not provided')
            ecrivain = Ecrivain.objects.get(ecrivain_id=ecrivain_id)
            serializer = EcrivainSerializer(ecrivain)
            return Response([serializer.data], status=status.HTTP_200_OK)
        except Ecrivain.DoesNotExist:
            return Response({'error': 'Ecrivain not found.'}, status=status.HTTP_404_NOT_FOUND)

class AddEcritApiView(APIView):
    def post(self, request):
        serializer = EcritSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Added successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AddEcrivainApiView(APIView):
    def post(self, request):
        serializer = EcrivainSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Added successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteEcritApiView(APIView):
    def delete(self, request, ecrit_id):
        try:
            ecrit = Ecrit.objects.get(ecrit_id=ecrit_id)
            ecrit.delete()
            return Response({'message': 'Deleted successfully'}, status=status.HTTP_200_OK)
        except Ecrit.DoesNotExist:
            return Response({'error': 'Ecrit not found.'}, status=status.HTTP_404_NOT_FOUND)


class EditEcritApiView(APIView):
    def put(self, request, ecrit_id):
        try:
            ecrit = Ecrit.objects.get(ecrit_id=ecrit_id)
            serializer = EcritSerializer(ecrit, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'message': 'Updated successfully'}, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Ecrit.DoesNotExist:
            return Response({'error': 'Ecrit not found.'}, status=status.HTTP_404_NOT_FOUND)

