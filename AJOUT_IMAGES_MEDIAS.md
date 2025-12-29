# Guide : Ajouter les images des apparitions médias

## Vue d'ensemble

La section **"Apparitions Médias"** a été ajoutée entre la section "Biographie" (Authority) et la FAQ. Elle affiche 5 apparitions médias par défaut avec un bouton "Voir plus" pour afficher les 13 au total.

## Emplacement de la section

```
Page d'accueil
└── Section Authority (Biographie Pierre)
    └── ✨ Section Médias (NOUVEAU)
        └── Section FAQ
```

## Structure actuelle

Le composant `MediaSection.tsx` contient 13 apparitions médias :

1. Sud Radio (Interview)
2. Le Guide de l'Étudiant Ambitieux (Livre)
3. Sqool TV - Parcoursup (Vidéo)
4. Le Figaro Étudiant (Article)
5. Le Parisien Étudiant (Article)
6. Fondation Vocation (Vidéo)
7. France 3 (Reportage)
8. Meet My Mentor (Profil)
9. Ma Bourse (Témoignage)
10. Le Parisien - Parcoursup (Article)
11. 20 Minutes TV (Interview TV)
12. Europe 1 (Radio)
13. Closer Magazine (Magazine)

## Étapes pour ajouter les images

### Méthode rapide (Recommandée)

#### 1. Télécharger les images depuis les sources

**Pour les vidéos YouTube :**
```bash
# Sqool TV
https://img.youtube.com/vi/eIVxKnymHlE/maxresdefault.jpg

# Fondation Vocation
https://img.youtube.com/vi/G2CUsqsHFA8/maxresdefault.jpg
```

**Pour Sud Radio (Dailymotion) :**
- Ouvrir https://www.dailymotion.com/video/x9s34lu
- Faire une capture d'écran du player vidéo

**Pour le livre (Amazon) :**
- Ouvrir https://www.amazon.com/Guide-l%C3%89tudiant-Ambitieux-LExcellence-port%C3%A9e/dp/B0DM6HXL7T
- Télécharger l'image de couverture (clic droit sur l'image principale)

**Pour les articles de presse :**
- Faire des captures d'écran des articles
- Ou utiliser les logos officiels des médias

#### 2. Renommer les fichiers

Renommer vos images selon ces noms EXACTS :

```
sud-radio.jpg           (ou .png)
livre.jpg
sqool-tv.jpg
figaro.jpg
le-parisien.jpg
fondation-vocation.jpg
france-3.jpg
meet-my-mentor.jpg
ma-bourse.jpg
le-parisien-2.jpg
20-min-tv.jpg
europe-1.jpg
closer.jpg
```

#### 3. Optimiser les images

**En ligne (rapide) :**
- Aller sur https://tinypng.com/
- Glisser-déposer vos images
- Télécharger les versions compressées

**Ou avec un outil local :**
```bash
# Windows/Mac/Linux
npm install -g sharp-cli
sharp -i input.jpg -o output.jpg --jpeg quality=85
```

#### 4. Copier les images

Copier tous les fichiers dans :
```
discipline-illimitee/public/images/media/
```

Exemple :
```
public/
└── images/
    └── media/
        ├── sud-radio.jpg
        ├── livre.jpg
        ├── sqool-tv.jpg
        ├── figaro.jpg
        ├── le-parisien.jpg
        ├── fondation-vocation.jpg
        ├── france-3.jpg
        ├── meet-my-mentor.jpg
        ├── ma-bourse.jpg
        ├── le-parisien-2.jpg
        ├── 20-min-tv.jpg
        ├── europe-1.jpg
        └── closer.jpg
```

#### 5. Le site se mettra à jour automatiquement

Next.js détectera automatiquement les nouvelles images. Si ce n'est pas le cas, redémarrez le serveur :

```bash
# Arrêter le serveur (Ctrl+C)
npm run dev
```

## Méthode alternative : Modifier le composant pour utiliser des URLs externes

Si vous préférez utiliser des URLs d'images hébergées ailleurs, modifiez `components/MediaSection.tsx` :

```tsx
const mediaItems = [
  {
    title: 'Sud Radio',
    image: 'https://votre-cdn.com/images/sud-radio.jpg', // URL externe
    url: 'https://www.dailymotion.com/video/x9s34lu',
    type: 'Interview',
  },
  // ...
];
```

## Spécifications des images

### Format recommandé
- **Type :** JPEG (meilleure compression) ou PNG (si transparence)
- **Ratio :** 16:9 (par exemple 1920x1080px ou 1280x720px)
- **Poids :** Maximum 500 KB par image (idéalement 200-300 KB)
- **Résolution :** Minimum 1280x720px

### Pourquoi ces spécifications ?
- **16:9** : Ratio standard pour les vidéos/médias
- **1280x720px** : Résolution suffisante pour affichage web
- **200-300 KB** : Bon équilibre entre qualité et vitesse de chargement

## Outils recommandés

### Capture d'écran
- **Windows :** Outil Capture (Win + Shift + S)
- **Mac :** Cmd + Shift + 4
- **Extensions Chrome :** GoFullPage, Awesome Screenshot

### Édition d'image
- **En ligne :** Canva, Photopea (gratuit, comme Photoshop)
- **Desktop :** GIMP (gratuit), Photoshop

### Optimisation
- **En ligne :** TinyPNG, Squoosh.app
- **CLI :** sharp-cli, imagemin

## Vérification

Après avoir ajouté les images, vérifiez :

1. **Les images s'affichent :** Ouvrir http://localhost:3004
2. **Pas d'erreur console :** F12 → Console
3. **Responsive :** Tester sur mobile (F12 → Toggle device toolbar)
4. **Performance :** Les images se chargent rapidement

## Problèmes courants

### Les images ne s'affichent pas
```bash
# Vérifier que les noms de fichiers sont corrects
ls public/images/media/

# Vérifier la casse (sud-radio.jpg et non Sud-Radio.jpg)
# Redémarrer le serveur
npm run dev
```

### Images trop lourdes
```bash
# Compresser avec TinyPNG ou :
npm install -g sharp-cli
sharp -i input.jpg -o output.jpg --jpeg quality=80
```

### Mauvaise qualité
- Utiliser des images sources en plus haute résolution
- Minimum recommandé : 1280x720px

## Prochaines étapes

Une fois les images ajoutées :

1. ✅ Tester l'affichage desktop
2. ✅ Tester l'affichage mobile
3. ✅ Vérifier les liens vers les médias
4. ✅ Tester le bouton "Voir plus"
5. ✅ Vérifier la performance (Lighthouse)

## Support

Si vous rencontrez des problèmes :

1. Consulter `public/images/media/README.md`
2. Vérifier les logs du serveur
3. Consulter la documentation Next.js : https://nextjs.org/docs/app/building-your-application/optimizing/images

---

**Note :** En l'absence d'images, le composant affiche un placeholder gris avec le titre. Le site reste fonctionnel, mais les vraies images amélioreront grandement l'impact visuel de cette section.
