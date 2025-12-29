# Guide d'ajout de la vidéo - Effet Noir & Blanc → Couleur

## 📸 Étape 1 : Ajouter l'image miniature

### 1.1 Capturer/Sauvegarder l'image

Si vous avez une capture d'écran de la vidéo (comme celle que vous m'avez montrée):
1. Sauvegarder l'image sur votre ordinateur
2. La renommer en: `video-thumbnail.jpg`

### 1.2 Optimiser l'image (recommandé)

Pour de meilleures performances:
- **Outil recommandé:** https://tinypng.com ou https://squoosh.app
- **Format:** JPG (ou WebP pour meilleure qualité/poids)
- **Dimensions recommandées:** 1920x1080px (ratio 16:9)
- **Poids cible:** < 500 KB

### 1.3 Copier l'image dans le projet

```bash
# Depuis l'Explorateur Windows
Copier l'image dans: discipline-illimitee/public/images/

# Le chemin complet sera:
C:\Users\youyo\Documents\Client\Pierre\discipline-illimitee\public\images\video-thumbnail.jpg
```

**OU en ligne de commande:**
```bash
cd discipline-illimitee
# Remplacer CHEMIN_VERS_VOTRE_IMAGE par le chemin réel
cp CHEMIN_VERS_VOTRE_IMAGE public/images/video-thumbnail.jpg
```

## 🎬 Étape 2 : Configurer l'ID de la vidéo YouTube

### 2.1 Trouver l'ID de votre vidéo YouTube

Si votre URL YouTube est:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

L'ID de la vidéo est: `dQw4w9WgXcQ` (la partie après `v=`)

### 2.2 Modifier le composant

Ouvrir le fichier `components/VideoSection.tsx` et remplacer:

```typescript
// AVANT (ligne ~76)
src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"

// APRÈS
src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
```

**Remplacer `dQw4w9WgXcQ` par votre vrai ID YouTube**

## 📍 Étape 3 : Intégrer la section dans la page

### 3.1 Ouvrir `app/page.tsx`

### 3.2 Ajouter l'import en haut du fichier

```typescript
import VideoSection from '@/components/VideoSection';
```

### 3.3 Ajouter le composant dans la page

Positionner où vous voulez la section vidéo. Recommandations:

**Option 1 - Après la section Authority (avant Médias):**
```tsx
<AuthoritySection />
<VideoSection />        {/* NOUVEAU */}
<MediaSection />
<FAQSection />
```

**Option 2 - Après la section Hero (en haut):**
```tsx
<HeroSection />
<VideoSection />        {/* NOUVEAU */}
<ProblemSection />
```

**Option 3 - Avant le CTA final:**
```tsx
<FAQSection />
<VideoSection />        {/* NOUVEAU */}
<FinalCTASection />
```

## ✨ Effet Noir & Blanc → Couleur

### Comment ça marche

L'effet est géré par Tailwind CSS:

```tsx
className="grayscale group-hover:grayscale-0 group-hover:scale-105"
```

- **`grayscale`** : Applique un filtre noir et blanc par défaut
- **`group-hover:grayscale-0`** : Retire le filtre au survol
- **`group-hover:scale-105`** : Zoom léger (5%) au survol
- **`transition-all duration-500`** : Animation fluide de 500ms

### Personnalisation

**Changer la durée de la transition:**
```tsx
duration-500  →  duration-700  // Plus lent
duration-500  →  duration-300  // Plus rapide
```

**Changer l'intensité du zoom:**
```tsx
scale-105  →  scale-110  // Zoom plus fort
scale-105  →  scale-102  // Zoom plus subtil
```

**Désactiver le zoom (garder seulement la couleur):**
```tsx
// Retirer: group-hover:scale-105
className="grayscale group-hover:grayscale-0"
```

## 🎨 Personnalisation du design

### Changer le titre

Dans `components/VideoSection.tsx` (ligne ~14):
```tsx
<h2 className="font-bebas text-5xl md:text-6xl text-black mb-4">
  VOTRE NOUVEAU TITRE ICI
</h2>
```

### Changer le sous-titre

Ligne ~17:
```tsx
<p className="text-lg text-gray-600 max-w-2xl mx-auto">
  Votre nouveau sous-titre ici
</p>
```

### Retirer le badge "NOUVEAU"

Commenter ou supprimer les lignes ~52-56:
```tsx
{/* Badge "NOUVEAU" */}
{/* <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 font-bebas text-lg">
  NOUVEAU
</div> */}
```

### Changer la couleur du bouton Play

Ligne ~42:
```tsx
<div className="w-20 h-20 bg-white rounded-full ...">
  {/* Changer bg-white en bg-red-500, bg-black, etc. */}
```

## 🔄 Alternative : Vidéo hébergée localement

Si vous n'utilisez pas YouTube, mais une vidéo locale:

### 1. Ajouter la vidéo dans `public/videos/`

```bash
cd discipline-illimitee
mkdir -p public/videos
# Copier votre vidéo (ex: presentation.mp4)
```

### 2. Remplacer l'iframe par une balise video

Dans `VideoSection.tsx`, remplacer l'iframe (ligne ~74-81) par:

```tsx
<video
  className="w-full h-full rounded-lg"
  controls
  autoPlay
  src="/videos/presentation.mp4"
>
  Votre navigateur ne supporte pas la lecture vidéo.
</video>
```

## 📱 Responsive

Le composant est déjà responsive:
- **Desktop:** Miniature grande, texte 6xl
- **Tablet:** Miniature moyenne, texte 5xl
- **Mobile:** Miniature full width, texte 5xl

## 🧪 Tester

1. Ajouter l'image dans `public/images/video-thumbnail.jpg`
2. Modifier l'ID YouTube dans le composant
3. Ajouter `<VideoSection />` dans `app/page.tsx`
4. Lancer le serveur: `npm run dev`
5. Aller sur http://localhost:3005
6. **Survoler** la miniature pour voir l'effet de colorisation
7. **Cliquer** pour ouvrir la modal vidéo

## 🐛 Dépannage

### L'image ne s'affiche pas

1. Vérifier que l'image est bien dans `public/images/video-thumbnail.jpg`
2. Vérifier que le nom du fichier est exactement `video-thumbnail.jpg`
3. Rafraîchir la page (Ctrl+F5)
4. Vérifier les erreurs dans la console (F12)

### L'effet noir et blanc ne fonctionne pas

1. Vérifier que Tailwind CSS est bien installé
2. Vérifier que le serveur est redémarré après modification
3. Vérifier que la classe `grayscale` est bien présente

### La vidéo YouTube ne se lance pas

1. Vérifier que l'ID YouTube est correct
2. Vérifier que la vidéo est publique (pas privée)
3. Essayer sans `?autoplay=1` d'abord

### L'image est trop grande/lourde

1. Optimiser avec https://tinypng.com
2. Redimensionner à 1920x1080px max
3. Utiliser le format WebP pour meilleure compression

## 🚀 Déploiement

Après avoir tout testé en local:

```bash
git add .
git commit -m "Add video section with grayscale hover effect"
git push
```

Netlify redéploiera automatiquement.

## 💡 Idées d'amélioration

### Ajouter plusieurs vidéos

Créer un carrousel de vidéos:
```tsx
const videos = [
  { id: 'VIDEO_ID_1', title: 'Titre 1', thumbnail: '/images/thumb1.jpg' },
  { id: 'VIDEO_ID_2', title: 'Titre 2', thumbnail: '/images/thumb2.jpg' },
];
```

### Ajouter des statistiques

Sous la vidéo:
```tsx
<div className="grid grid-cols-3 gap-4 mt-8">
  <div className="text-center">
    <div className="font-bebas text-4xl">10K+</div>
    <div className="text-gray-600">Vues</div>
  </div>
  {/* ... */}
</div>
```

---

**Date:** 25 Décembre 2024
**Version:** 1.0
