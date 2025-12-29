# Discipline Illimitée - Site Next.js

Site web dynamique pour Discipline Illimitée™ par Pierre Amougou, construit avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Déploiement

**Site en production:** [Voir le guide de déploiement](GUIDE_DEPLOIEMENT_NETLIFY.md)

Le site est déployé sur Netlify avec déploiement automatique depuis GitHub.

## ✨ Fonctionnalités

- **Next.js 16.1.1** avec Turbopack : Performance optimale
- **Agent conversationnel IA** : Chat intégré avec webhook N8N
  - Gestion de session (sessionId)
  - Suggestions dynamiques
  - Support Markdown complet (gras, listes, code, etc.)
- **Tailwind CSS v4** avec Typography plugin
- **Design responsive** : Mobile-first, adapté à tous les écrans
- **Section Médias** : 13 apparitions médias (5 images, 8 placeholders)
- **TypeScript** : Code type-safe pour une meilleure maintenabilité
- **Animations fluides** : Transitions au scroll

## 🤖 Agent Conversationnel

### Webhook Configuration

**URL Production:**
```
https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent
```

**Payload envoyé:**
```json
{
  "message": "Le message de l'utilisateur",
  "sessionId": "session_1735141234567_abc123xyz",
  "timestamp": "2024-12-25T10:30:45.123Z",
  "source": "discipline-illimitee-website"
}
```

**Réponse attendue:**
```json
[
  {
    "output": {
      "output": "Texte de la réponse en **Markdown**...",
      "suggestions": ["Option 1", "Option 2", "Option 3"]
    }
  }
]
```

📚 **Documentation complète:** [MARKDOWN_GUIDE.md](MARKDOWN_GUIDE.md) | [INTEGRATION_AGENT_COMPLETE.md](INTEGRATION_AGENT_COMPLETE.md)

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

## 📚 Documentation

- **[GUIDE_DEPLOIEMENT_NETLIFY.md](GUIDE_DEPLOIEMENT_NETLIFY.md)** - Guide complet de déploiement GitHub + Netlify
- **[COMMANDES_GIT_GITHUB.md](COMMANDES_GIT_GITHUB.md)** - Aide-mémoire Git & GitHub
- **[INTEGRATION_AGENT_COMPLETE.md](INTEGRATION_AGENT_COMPLETE.md)** - Documentation technique de l'agent
- **[MARKDOWN_GUIDE.md](MARKDOWN_GUIDE.md)** - Guide Markdown pour l'agent N8N
- **[CHANGELOG.md](CHANGELOG.md)** - Historique des versions
- **[WEBHOOK_TEST_GUIDE.md](WEBHOOK_TEST_GUIDE.md)** - Guide de test du webhook
- **[IMAGES_MEDIAS_STATUS.md](IMAGES_MEDIAS_STATUS.md)** - Statut des images médias

## 🎨 Personnalisation

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
