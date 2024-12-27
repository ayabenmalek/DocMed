from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128) 
    medical = models.BooleanField(default=False)  # True if in the medical domain

    def __str__(self):
        return f"{self.nom} {self.prenom}"


class Ecrivain(models.Model):
    ecrivain_id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    num_tlphn = models.CharField(max_length=15, blank=True, null=True)
    nationalite = models.CharField(max_length=50)
    cv = models.ImageField(upload_to='cv/')
    certificats = models.ImageField(upload_to='certificats/')
    password = models.CharField(max_length=128)  

    def __str__(self):
        return f"{self.nom} {self.prenom}"


class Ecrit(models.Model):
    ecrit_id = models.AutoField(primary_key=True)
    titre = models.CharField(max_length=100)
    TYPE_CHOICES = [
        ('cours', 'Cours'),
        ('article', 'Article'),
        ('these', 'Thèse'),
    ]
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    ecrivain = models.ForeignKey(Ecrivain, on_delete=models.CASCADE)
    description = models.TextField()
    contenu = models.TextField()

    def __str__(self):
        return self.titre


class Enrolled(models.Model):
    ecrit = models.ForeignKey(Ecrit, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('ecrit', 'user')  


class Comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
    comment = models.TextField()
    ecrit = models.ForeignKey(Ecrit, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Comment by {self.user.nom} on {self.ecrit.titre}"


class Favoris(models.Model):
    favorit_id = models.AutoField(primary_key=True)
    ecrit = models.ForeignKey(Ecrit, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('ecrit', 'user')  

