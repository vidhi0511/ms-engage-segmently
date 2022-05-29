import rest_framework_filters as filters

from .models import DiscoverInsights

class DiscoverInsightsFilter(filters.FilterSet):
    segment = filters.AllLookupsFilter()
    class Meta:
        model= DiscoverInsights
        fields = ['segment']