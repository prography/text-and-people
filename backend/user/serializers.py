from rest_framework import serializers
from user.models import User


# 회원가입 serializer
class CreateUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'nickname')

    # register
    def create(self, validated_data):
        user = User.objects.create_user(     # User 의 create_user 함수
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            nickname=validated_data['nickname'],
        )
        return user
