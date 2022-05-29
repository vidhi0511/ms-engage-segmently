from rest_framework import serializers
from .models import BuildConfig
from helpers.djongo import MongoJSONSerializerField

class BuildConfigSerializer(serializers.ModelSerializer):
    config_input_data = MongoJSONSerializerField()
    analytics_output_data = MongoJSONSerializerField()
    class Meta:
        model = BuildConfig
        extra_fields = ['id']
        fields = ('__all__')

    def get_field_names(self, declared_fields, info): # To declare id as extra field

        expanded_fields = super(BuildConfigSerializer, self).get_field_names(declared_fields, info)

        if getattr(self.Meta, 'extra_fields', None):
            return self.Meta.extra_fields + expanded_fields
        else:
            return expanded_fields