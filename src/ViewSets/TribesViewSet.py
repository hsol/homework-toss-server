from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from src.Models import Tribe


class TribesViewSet(viewsets.ModelViewSet):
    queryset = Tribe.Model
    serializer_class = Tribe.Serializer

    @action(detail=True)
    def highlight(self, request, *args, **kwargs):
        snippet = self.get_object()
        return Response(snippet.highlighted)
