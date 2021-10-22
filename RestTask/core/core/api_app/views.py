from django.db.models import query
from django.shortcuts import render
from rest_framework import serializers
from rest_framework import viewsets

from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Sample
from .serializers import SampleSerializer



class SampleViewApi(APIView):

    # GET: 
    def get(self, request, id=None):

        if id:
            try:
                queryset = Sample.objects.get(id=id)
            except Sample.DoesNotExist:
                return Response({'errors': 'Does not exists.'}, status=400)

            read_serializer = SampleSerializer(queryset)
        else:
            queryset = Sample.objects.all()
            read_serializer = SampleSerializer(queryset, many=True)

        return Response(read_serializer.data)

    def post(self, request):

        # saljemo korisnikove JSON podatke, serijalajzeru na proveru 
        serializer_class = SampleSerializer(data=request.data)

        if serializer_class.is_valid():
            # ako je sve proslo OK, kreiramo novi podatak za bazu
            sample_object = serializer_class.save()
            
            # pravimo novi JSON objekat od postojeceg Pajton objekta
            ret_serializer = SampleSerializer(sample_object)

            # vracamo odgovor sa novo kreiranim objektom
            return Response(ret_serializer.data, status=201)

        return Response(serializer_class.errors, status=400)

    def delete(self, request, id=None):
        
        sample_obj = Sample.objects.get(id=id)
        sample_obj.delete()

        return Response(status=401)


class Simplic(viewsets.ModelViewSet):
    serializer_class = SampleSerializer
    queryset = Sample.objects.all()
