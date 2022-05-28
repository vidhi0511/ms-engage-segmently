from rest_framework import serializers
import json


class MongoJSONSerializerField(serializers.Field):
    """ Serializer for JSONField -- required to make field writable"""

    def to_internal_value(self, data):
        return data

    def to_representation(self, value):
        try:
            return json.loads(value)
        except:
            return value
