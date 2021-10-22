from typing import Text
from rest_framework import serializers

from .models import Sample

class SampleSerializer(serializers.ModelSerializer):
    
    name = serializers.CharField(max_length=255, required=True)
    # lastName = serializers.CharField(max_length=255, required=True)
    # city = serializers.CharField(max_length=50, required=True)
    
    def create(self, validated_data):
        return Sample.objects.create(
            name=validated_data.get('name'),
            # lastName=validated_data.get('surname'),
            # city=validated_data.get('city')
        )

    
    class Meta:
        model = Sample
        fields = ('id', 'name')
        # fields = ('id', 'name', 'lastName', 'city', 'creation_date')