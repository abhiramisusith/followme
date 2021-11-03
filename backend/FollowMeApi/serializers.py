from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = '__all__'
        extra_kwargs = {'Password': {'write_only': True}}

        def create(self, validated_data):
            user = users.objects.create_user(validated_data['Username'], validated_data['Email'], validated_data['Password'])

            return user
        

# Commited this code

class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthUser
        fields = '__all__'
        


class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = users
        fields = ['Username','Email','FirstName','LastName']
        

#change password
class ChangePasswordSerializer(serializers.Serializer):
    model = users

    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)



# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = '__all__'

# # Register Serializer
# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = '__all__'
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = Users.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

#         return user

# #change password
# class ChangePasswordSerializer(serializers.Serializer):
#     model = Users

#     """
#     Serializer for password change endpoint.
#     """
#     old_password = serializers.CharField(required=True)
#     new_password = serializers.CharField(required=True)


