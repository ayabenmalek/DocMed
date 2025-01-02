
# Create your views here.
#MANEL'S VIEWS :

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Ecrit
from .serializers import EcritSerializer

from rest_framework_simplejwt.tokens import RefreshToken
from .models import User, Ecrivain
from .serializers import UserSerializer, EcrivainSerializer
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.permissions import AllowAny


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

# Helper function to generate tokens
def generate_custom_tokens(instance):
    refresh = RefreshToken()
    refresh['id'] = instance.id
    refresh['email'] = instance.email
    refresh['role'] = 'ecrivain'  # Add custom claims if needed
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


# Sign-up for User
class UserSignUpView(APIView):
    permission_classes = [AllowAny]  # Allow any user to access the signup view
    
    def post(self, request):
        data = request.data
        data['password'] = make_password(data['password'])  # Hash password
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EcrivainSignUpView(APIView):
    permission_classes = [AllowAny]  # Allow unrestricted access

    def post(self, request):
        # Ensure the request is multipart
        if not request.content_type.startswith('multipart/form-data'):
            return Response({'error': 'Content-Type must be multipart/form-data'}, status=status.HTTP_400_BAD_REQUEST)

        # Pass the request data directly to the serializer
        serializer = EcrivainSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        # Return validation errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# Sign-in for both User and Ecrivain            
class SignInView(APIView):
    permission_classes = []  # Add permissions as necessary

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        # Check User
        try:
            user = User.objects.get(email=email)
            if check_password(password, user.password):
                tokens = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(tokens),
                    'access': str(tokens.access_token),
                }, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            pass

        # Check Ecrivain
        try:
            ecrivain = Ecrivain.objects.get(email=email)
            if check_password(password, ecrivain.password):
                tokens = generate_custom_tokens(ecrivain)
                return Response({'tokens': tokens}, status=status.HTTP_200_OK)
        except Ecrivain.DoesNotExist:
            pass

        return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)