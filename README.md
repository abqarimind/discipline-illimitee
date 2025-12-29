# Discipline Illimitée - Site Next.js

Site web dynamique pour Discipline Illimitée™ par Pierre Amougou, construit avec Next.js, TypeScript et Tailwind CSS.

## Fonctionnalités

- **Site dynamique Next.js** : Performance optimale avec rendu côté serveur
- **Agent conversationnel intégré** : Chatbot connecté au webhook n8n pour qualifier les prospects
- **Design responsive** : Interface adaptée à tous les écrans
- **Animations fluides** : Transitions et animations au scroll
- **TypeScript** : Code type-safe pour une meilleure maintenabilité

## Configuration du Webhook

L'agent conversationnel est connecté au webhook suivant :
```
https://n8n.srv860867.hstgr.cloud/webhook-test/pierre-qualif-agent
```

Les messages des utilisateurs sont envoyés à ce webhook en JSON :
```json
{
  "message": "Le message de l'utilisateur",
  "timestamp": "2024-12-25T10:30:00.000Z"
}
```

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Structure du projet

```
discipline-illimitee/
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── ChatModal.tsx        # Modal de chat avec webhook
│   ├── HeroSection.tsx      # Section hero
│   ├── ProblemSection.tsx   # Section problème
│   ├── TruthSection.tsx     # Section vérité
│   ├── SolutionSection.tsx  # Section solution
│   ├── TransformationSection.tsx
│   ├── AuthoritySection.tsx
│   ├── MediaSection.tsx     # ⭐ Section apparitions médias (NOUVEAU)
│   ├── FAQSection.tsx
│   ├── FinalCTASection.tsx
│   └── Footer.tsx
├── public/
│   └── images/
│       └── media/           # Images des apparitions médias
├── postcss.config.js        # Configuration PostCSS/Tailwind
├── tsconfig.json            # Configuration TypeScript
└── package.json

```

## Personnalisation

### Modifier le webhook

Pour modifier l'URL du webhook, éditez le fichier `components/ChatModal.tsx` :

```typescript
const WEBHOOK_URL = 'VOTRE_URL_WEBHOOK';
```

### Ajouter une vidéo

Dans `components/HeroSection.tsx`, remplacez `YOUR_VIDEO_URL` par l'URL de votre vidéo (YouTube, Vimeo, etc.).

### Modifier les couleurs

Les couleurs sont définies dans `app/globals.css` en utilisant la directive `@theme` de Tailwind v4.

### Ajouter les images des apparitions médias

Pour ajouter les vraies images des apparitions médias de Pierre :

1. Consulter le guide complet : `AJOUT_IMAGES_MEDIAS.md`
2. Placer les images dans `public/images/media/`
3. Noms de fichiers requis : voir `public/images/media/README.md`

**Note :** En l'absence d'images, la section affiche des placeholders fonctionnels.

## Technologies utilisées

- **Next.js 16** - Framework React
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utility-first (nouvelle architecture)
- **PostCSS** - Transformation CSS

> **Notes importantes :**
> - Ce projet utilise Tailwind CSS v4 avec `@tailwindcss/postcss`. Voir [TAILWIND_V4_CONFIG.md](./TAILWIND_V4_CONFIG.md)
> - Les fonts Google sont chargées dans `app/layout.tsx` (HTML) et non dans le CSS pour éviter les conflits avec Tailwind v4
> - En cas d'erreur "Parsing CSS source code failed", consulter [SOLUTION_FINALE.md](./SOLUTION_FINALE.md)

## Déploiement

Le projet peut être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS Amplify**
- Tout hébergement supportant Node.js

## Support

Pour toute question ou problème, contactez l'équipe de développement.

---

© 2024 Pierre Amougou - Discipline Illimitée™
