# Guide de Démarrage Rapide - Discipline Illimitée

## Installation en 3 minutes

### 1. Cloner et installer

```bash
cd discipline-illimitee
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

### 3. Ouvrir dans le navigateur

```
http://localhost:3000
```

C'est tout ! Le site est maintenant accessible.

## Tester l'agent conversationnel

1. Cliquer sur **"Découvrir mon profil"**
2. Choisir une des 3 options
3. Converser avec l'agent
4. Les messages sont envoyés au webhook N8N

## Structure des fichiers importants

```
discipline-illimitee/
├── app/
│   ├── page.tsx           ← Page principale
│   ├── layout.tsx         ← Layout et metadata
│   └── api/chat/
│       └── route.ts       ← API pour le webhook
│
├── components/
│   ├── ChatModal.tsx      ← Modal de chat (IMPORTANT)
│   └── [autres].tsx       ← Sections de la page
│
└── Configuration
    ├── package.json
    ├── postcss.config.js   ← Config Tailwind v4
    └── tsconfig.json
```

## Modifier le contenu

### Changer le texte du hero

**Fichier :** `components/HeroSection.tsx`

```tsx
<h1>
  VOTRE NOUVEAU TITRE
  <span>Votre sous-titre</span>
</h1>
```

### Modifier l'URL du webhook

**Option 1 - Fichier API :** `app/api/chat/route.ts`
```typescript
const WEBHOOK_URL = 'VOTRE_NOUVELLE_URL';
```

**Option 2 - Variable d'environnement :** Créer `.env.local`
```
NEXT_PUBLIC_WEBHOOK_URL=votre-url
```

### Ajouter/modifier les FAQ

**Fichier :** `components/FAQSection.tsx`

```typescript
const faqs = [
  {
    question: "Votre question ?",
    answer: "Votre réponse",
  },
  // Ajouter plus ici
];
```

### Personnaliser les couleurs

**Fichier :** `app/globals.css`

```css
@theme {
  --color-black: #0a0a0a;     /* Votre noir */
  --color-white: #fafafa;     /* Votre blanc */
  --color-gray-400: #a3a3a3;  /* Votre gris */
}
```

> **Note :** Ce projet utilise Tailwind CSS v4. Voir [TAILWIND_V4_CONFIG.md](./TAILWIND_V4_CONFIG.md)

## Commandes principales

```bash
# Développement
npm run dev          # Lance le serveur de dev

# Production
npm run build        # Build pour la production
npm start            # Lance en mode production

# Autres
npm run lint         # Vérifie le code
```

## Vérifier que tout fonctionne

### Checklist rapide

- [ ] Le site s'affiche sur http://localhost:3000
- [ ] Le modal s'ouvre au clic sur les boutons CTA
- [ ] Les 3 options de chat fonctionnent
- [ ] On peut envoyer des messages dans le chat
- [ ] Le FAQ s'ouvre/ferme au clic
- [ ] Le design est responsive (tester sur mobile)

### Tester le webhook

```bash
# Vérifier que l'API route fonctionne
curl http://localhost:3000/api/chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"test"}'
```

## Problèmes courants

### Le serveur ne démarre pas

```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
npm install
npm run dev
```

### Erreur de compilation TypeScript

```bash
# Vérifier tsconfig.json
# Redémarrer le serveur
```

### Le webhook ne fonctionne pas

1. Vérifier que N8N est actif
2. Tester l'URL du webhook directement
3. Vérifier les logs de la console

## Déploiement rapide sur Vercel

```bash
# Option 1 : Via la CLI
npm i -g vercel
vercel

# Option 2 : Via l'interface web
# 1. Push sur GitHub
# 2. Importer sur vercel.com
# 3. Déployer
```

## Documentation complète

- **README.md** - Vue d'ensemble du projet
- **WEBHOOK_INTEGRATION.md** - Détails sur l'intégration N8N
- **DEPLOIEMENT.md** - Guide de déploiement complet
- **MIGRATION_HTML_TO_NEXTJS.md** - Historique de la migration

## Support

### Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs)

### Problème ?

1. Vérifier les logs dans la console
2. Vérifier la console du navigateur (F12)
3. Consulter la documentation

## Personnalisations rapides

### Ajouter Google Analytics

1. Obtenir l'ID de suivi Google Analytics
2. Éditer `app/layout.tsx`
3. Ajouter le script Google Analytics

### Changer la police

**Fichier :** `app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=VOTRE_POLICE&display=swap');

body {
  font-family: 'VOTRE_POLICE', sans-serif;
}
```

### Ajouter une nouvelle section

1. Créer `components/MaSection.tsx`
2. Importer dans `app/page.tsx`
3. Ajouter `<MaSection />` dans le render

## Prochaines étapes recommandées

1. ✅ Tester localement
2. ✅ Personnaliser le contenu
3. ✅ Configurer le webhook N8N
4. ✅ Tester sur mobile
5. ✅ Déployer sur Vercel
6. ✅ Configurer le domaine
7. ✅ Ajouter Analytics

---

**Temps estimé pour démarrer :** 5 minutes
**Temps estimé pour déployer :** 10 minutes

Bon développement ! 🚀
