from rest_framework import serializers
from .models import DiscoverInsights
from helpers.djongo import MongoJSONSerializerField

class DiscoverInsightsSerializer(serializers.ModelSerializer):
    kpi_data = MongoJSONSerializerField()
    graph_data = MongoJSONSerializerField()
    class Meta:
        model = DiscoverInsights
        extra_fields = ['id']
        fields = ('__all__')

    def get_field_names(self, declared_fields, info): # To declare id as extra field

        expanded_fields = super(DiscoverInsightsSerializer, self).get_field_names(declared_fields, info)

        if getattr(self.Meta, 'extra_fields', None):
            return self.Meta.extra_fields + expanded_fields
        else:
            return expanded_fields