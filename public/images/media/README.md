# Images Médias - Instructions

## Ajout des images

Placez les images des apparitions médias dans ce dossier avec les noms suivants :

### Images requises (format recommandé : JPG ou PNG, ratio 16:9)

1. **sud-radio.jpg** - Capture de l'interview Sud Radio
2. **livre.jpg** - Couverture du livre "Le Guide de l'Étudiant Ambitieux"
3. **sqool-tv.jpg** - Capture de l'émission Sqool TV
4. **figaro.jpg** - Logo ou capture de l'article Le Figaro
5. **le-parisien.jpg** - Logo ou capture de l'article Le Parisien
6. **fondation-vocation.jpg** - Capture de la vidéo Fondation Vocation
7. **france-3.jpg** - Capture du reportage France 3
8. **meet-my-mentor.jpg** - Capture ou logo Meet My Mentor
9. **ma-bourse.jpg** - Logo ou capture de l'article Ma Bourse
10. **le-parisien-2.jpg** - Capture du second article Le Parisien (Parcoursup)
11. **20-min-tv.jpg** - Capture de l'émission 20 Minutes TV
12. **europe-1.jpg** - Logo ou capture Europe 1
13. **closer.jpg** - Couverture ou page du magazine Closer

## Spécifications techniques

- **Format recommandé :** JPEG ou PNG
- **Ratio d'aspect :** 16:9 (par exemple 1920x1080px)
- **Taille optimale :** Entre 200-500 KB par image
- **Résolution :** Minimum 1280x720px

## Comment obtenir les images

### Méthode 1 : Captures d'écran
1. Ouvrir la vidéo/article dans votre navigateur
2. Faire une capture d'écran de qualité
3. Recadrer au format 16:9
4. Optimiser avec un outil comme TinyPNG ou Squoosh

### Méthode 2 : Téléchargement YouTube
Pour les vidéos YouTube, vous pouvez utiliser les miniatures :
```
https://img.youtube.com/vi/[VIDEO_ID]/maxresdefault.jpg
```

Exemple pour Sqool TV :
```
https://img.youtube.com/vi/eIVxKnymHlE/maxresdefault.jpg
```

### Méthode 3 : Logos officiels
- Télécharger les logos en haute qualité depuis les sites officiels
- Créer une composition avec le logo sur un fond uni

## Optimisation des images

Avant d'ajouter les images, optimisez-les avec :
- [TinyPNG](https://tinypng.com/) - Compression PNG/JPEG
- [Squoosh](https://squoosh.app/) - Outil de Google
- [ImageOptim](https://imageoptim.com/) - Pour Mac

## Placement des fichiers

Copier les images dans :
```
discipline-illimitee/public/images/media/
```

Les images seront automatiquement chargées par le composant `MediaSection.tsx`.

## Fallback actuel

En attendant les vraies images, le composant affiche un placeholder gris avec le titre de l'apparition média.

## Support

Si vous avez besoin d'aide pour obtenir ou optimiser les images, consultez la documentation Next.js sur l'optimisation des images : https://nextjs.org/docs/app/building-your-application/optimizing/images
