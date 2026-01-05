# Guide d'ajout du Favicon

## Méthode simple (Next.js 13+)

Next.js détecte automatiquement les favicons dans le dossier `app/`. Vous devez simplement ajouter votre logo avec le bon nom.

### Étapes :

1. **Préparer l'image**
   - Prenez votre logo "DI DISCIPLINE ILLIMITÉE™" (fond noir avec texte blanc)
   - Format recommandé : PNG avec fond transparent ou fond noir
   - Dimensions recommandées : 512x512px ou 256x256px

2. **Renommer et placer le fichier**

   Option A - Format PNG (recommandé) :
   ```
   app/icon.png
   ```

   Option B - Format ICO :
   ```
   app/favicon.ico
   ```

3. **Next.js générera automatiquement**
   - `/favicon.ico` - pour tous les navigateurs
   - Balises meta pour Apple Touch Icon
   - Balises meta pour Android

## Méthode alternative (Metadata API)

Si vous voulez plus de contrôle, ajoutez ceci dans `app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: 'Discipline Illimitée™ | Pierre Amougou',
  description: '...',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};
```

## Formats et tailles recommandés

Pour une compatibilité maximale, créez ces variantes :

- **favicon.ico** : 32x32px (multi-size: 16, 32, 48)
- **icon.png** : 512x512px
- **apple-icon.png** : 180x180px

## Placement des fichiers

```
app/
├── icon.png          (512x512px)
├── apple-icon.png    (180x180px)
└── favicon.ico       (32x32px)
```

## Après l'ajout

1. Redémarrez le serveur Next.js
2. Videz le cache du navigateur (Ctrl+Shift+R)
3. Le favicon devrait apparaître dans l'onglet

## Conversion d'image en ICO

Si vous avez besoin de convertir votre PNG en ICO, utilisez :
- https://favicon.io/
- https://realfavicongenerator.net/
- Ou en ligne de commande avec ImageMagick

## Note

Votre logo actuel est carré avec "DI" en haut et "DISCIPLINE ILLIMITÉE™" en bas.
Pour le favicon (très petit), il est recommandé de créer une version simplifiée
avec juste "DI" ou juste le logo sans le texte pour une meilleure lisibilité.
