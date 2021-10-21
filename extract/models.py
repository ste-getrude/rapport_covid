from django.db import models

# Create your models here.
class ExtractRow(models.Model):
    nom = models.CharField(max_length=200)
    prénom = models.CharField(max_length=200)
    vacciné = models.CharField(max_length=200)   
    dob = models.CharField(max_length=200)
    groupe = models.IntegerField()  
    avisé = models.CharField(max_length=200)  
    nom_tuteur = models.CharField(max_length=200)
    prénom_tuteur = models.CharField(max_length=200)  
    tel = models.CharField(max_length=200) 
    courriel = models.CharField(max_length=200)   
    langue = models.CharField(max_length=200)
    sex = models.CharField(max_length=15, blank=True)
    adresse = models.CharField(max_length=100, blank=True)
    
    def __str__(self):
        return f"{self.nom}, {self.prénom}, {self.groupe}"
    
    class Meta:
        ordering = ("nom", "prénom")