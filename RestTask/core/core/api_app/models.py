from django.db import models

# Create your models here.


class Sample(models.Model):

    id = models.AutoField(
        primary_key=True
    )
    name = models.TextField(
        max_length=255,
        null=False,
        blank=False
    )
    # surname = models.TextField(
    #     max_length=255,
    #     default='',
    #     null=False,
    #     blank=False,
    # )
    # city = models.TextField(
    #     max_length=255,
    #     default='Cacak',
    #     blank=False
    # )
    # creation_date = models.DateTimeField(
    #     auto_now_add=True,
    #     null=False,
    #     blank=False
    # )

    class Meta:
        db_table = 'Sample'
