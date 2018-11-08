from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, filters

from src.Models import Member


class MembersViewSet(viewsets.ModelViewSet):
    queryset = Member.MemberModel.objects.all()
    serializer_class = Member.MemberSerializer

    filter_backends = (filters.SearchFilter, DjangoFilterBackend)
    search_fields = ['=squad__id', '=position__name']

