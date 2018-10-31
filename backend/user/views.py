from user.models import User
from rest_framework import viewsets
from user.serializers import CreateUserSerializer


class CreateUserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = CreateUserSerializer

