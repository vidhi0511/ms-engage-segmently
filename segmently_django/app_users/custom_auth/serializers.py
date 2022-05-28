from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework import serializers

# Serializers define the API representation.


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(required=False)
    

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'first_name','last_name','mobile_no','is_superuser')

    def create(self, validated_data):
        # call set_password on user object. Without this
        # the password will be stored in plain text.
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            if attr == 'password':
                instance.set_password(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance
