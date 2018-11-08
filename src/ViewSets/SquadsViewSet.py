from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend

from src.Models import Squad


class SquadsViewSet(viewsets.ModelViewSet):
    queryset = Squad.SquadModel.objects.all()
    serializer_class = Squad.SquadSerializer

    filter_backends = (filters.SearchFilter, DjangoFilterBackend)
    search_fields = ['=tribe__id']
