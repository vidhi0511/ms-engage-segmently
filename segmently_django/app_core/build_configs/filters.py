import rest_framework_filters as filters

from .models import BuildConfig

class BuildConfigFilter(filters.FilterSet):
    segment = filters.AllLookupsFilter()
    class Meta:
        model= BuildConfig
        fields = ['segment']