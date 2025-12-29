# Guide de Déploiement - GitHub + Netlify

## 📋 Prérequis

- ✅ Repository Git initialisé localement
- ☐ Compte GitHub (https://github.com)
- ☐ Compte Netlify (https://netlify.com)

## 🚀 Étape 1 : Créer le repository sur GitHub

### 1.1 Via l'interface GitHub

1. Aller sur https://github.com/new
2. **Repository name:** `discipline-illimitee` (ou le nom de votre choix)
3. **Description:** `Landing page Next.js avec agent conversationnel IA`
4. **Visibility:** Private (recommandé) ou Public
5. ⚠️ **NE PAS** cocher "Add a README file"
6. ⚠️ **NE PAS** cocher "Add .gitignore"
7. ⚠️ **NE PAS** cocher "Choose a license"
8. Cliquer sur **"Create repository"**

### 1.2 Copier l'URL du repository

Après création, GitHub affiche l'URL du repository:
```
https://github.com/VOTRE_USERNAME/discipline-illimitee.git
```

## 🔗 Étape 2 : Connecter le repository local à GitHub

Ouvrir un terminal dans le dossier `discipline-illimitee` et exécuter:

```bash
# Ajouter le remote GitHub
git remote add origin https://github.com/VOTRE_USERNAME/discipline-illimitee.git

# Vérifier que le remote est bien ajouté
git remote -v

# Pousser le code sur GitHub
git push -u origin master
```

**Si vous utilisez une branche `main` au lieu de `master`:**
```bash
git branch -M main
git push -u origin main
```

### En cas d'erreur d'authentification

Si GitHub demande une authentification, vous devez créer un **Personal Access Token**:

1. Aller sur https://github.com/settings/tokens
2. Cliquer sur **"Generate new token"** → **"Generate new token (classic)"**
3. **Note:** `Netlify deployment for discipline-illimitee`
4. **Expiration:** Choisir une durée (90 days recommandé)
5. **Scopes:** Cocher `repo` (tout)
6. Cliquer sur **"Generate token"**
7. **IMPORTANT:** Copier le token (il ne sera affiché qu'une fois)

Réessayer le push avec:
```bash
git push -u origin master
```

Quand il demande le mot de passe, coller le **token** (pas votre mot de passe GitHub).

## ☁️ Étape 3 : Déployer sur Netlify

### 3.1 Se connecter à Netlify

1. Aller sur https://netlify.com
2. Cliquer sur **"Sign up"** ou **"Log in"**
3. Choisir **"Sign up with GitHub"** (recommandé)
4. Autoriser Netlify à accéder à votre compte GitHub

### 3.2 Importer le projet

1. Une fois connecté, cliquer sur **"Add new site"** → **"Import an existing project"**
2. Choisir **"Deploy with GitHub"**
3. Autoriser Netlify à accéder à vos repositories si demandé
4. Chercher et sélectionner le repository `discipline-illimitee`

### 3.3 Configurer le build

Netlify détecte automatiquement Next.js. Vérifier/Modifier les paramètres:

**Build settings:**
- **Branch to deploy:** `master` (ou `main`)
- **Base directory:** (laisser vide)
- **Build command:** `npm run build`
- **Publish directory:** `.next`

**⚠️ IMPORTANT: Advanced build settings**

Cliquer sur **"Show advanced"** et ajouter les **variables d'environnement**:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_WEBHOOK_URL` | `https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent` |

### 3.4 Déployer

1. Cliquer sur **"Deploy site"**
2. Attendre la fin du build (2-5 minutes)
3. Une fois terminé, vous verrez **"Site is live"** ✅

### 3.5 Obtenir l'URL du site

Netlify génère automatiquement une URL du type:
```
https://random-name-123456.netlify.app
```

Vous pouvez la personnaliser:
1. Aller dans **Site settings** → **Domain management**
2. Cliquer sur **"Options"** → **"Edit site name"**
3. Changer pour: `discipline-illimitee` (si disponible)
4. Nouvelle URL: `https://discipline-illimitee.netlify.app`

## 🎯 Étape 4 : Ajouter un domaine personnalisé (optionnel)

### 4.1 Si vous avez un nom de domaine

1. Dans Netlify, aller dans **Site settings** → **Domain management**
2. Cliquer sur **"Add custom domain"**
3. Entrer votre domaine: `discipline-illimitee.com` (exemple)
4. Suivre les instructions pour configurer les DNS

### 4.2 Configuration DNS

Ajouter ces enregistrements chez votre registrar (OVH, Gandi, etc.):

**Pour un domaine racine (discipline-illimitee.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**Pour un sous-domaine (www.discipline-illimitee.com):**
```
Type: CNAME
Name: www
Value: random-name-123456.netlify.app
```

### 4.3 Activer HTTPS

Netlify active automatiquement HTTPS avec Let's Encrypt (gratuit).
Attendre quelques minutes après la configuration DNS.

## 🔄 Étape 5 : Déploiements automatiques

### Comment ça marche

Chaque fois que vous pushez du code sur GitHub, Netlify redéploie automatiquement:

```bash
# Faire des modifications
# ...

# Commit et push
git add .
git commit -m "Mise à jour: ajout de nouvelles fonctionnalités"
git push
```

Netlify détecte le push et lance automatiquement un nouveau build.

### Voir les logs de déploiement

1. Aller sur le dashboard Netlify
2. Cliquer sur **"Deploys"**
3. Voir l'historique et les logs de chaque déploiement

## 🧪 Étape 6 : Tester le déploiement

### 6.1 Vérifications essentielles

Ouvrir le site déployé et vérifier:

- ✅ La page d'accueil s'affiche correctement
- ✅ Toutes les sections sont visibles (Hero, Problem, Truth, etc.)
- ✅ Les images des médias s'affichent (les 5 présentes)
- ✅ Le chat modal s'ouvre en cliquant sur les CTA
- ✅ Le message initial de l'agent s'affiche
- ✅ Les 3 options initiales sont présentes
- ✅ Le webhook N8N fonctionne (tester en envoyant un message)
- ✅ Les suggestions dynamiques s'affichent (si configurées)
- ✅ Le Markdown dans le chat fonctionne (texte en gras, listes, etc.)
- ✅ Le site est responsive (tester sur mobile)

### 6.2 Ouvrir la console développeur

Appuyer sur **F12** et vérifier:
- ✅ Pas d'erreurs JavaScript (onglet Console)
- ✅ Les appels API `/api/chat` fonctionnent (onglet Network)
- ✅ Le sessionId est bien envoyé

### 6.3 Tester le webhook N8N

1. Ouvrir le chat
2. Cliquer sur "La Discipline — Je sais quoi faire, mais je ne le fais pas"
3. Vérifier que la réponse du webhook s'affiche
4. Vérifier que des suggestions apparaissent (si configurées)

## ⚙️ Configuration avancée

### Optimisations Netlify

Dans **Site settings** → **Build & deploy** → **Build settings**:

**Environment variables supplémentaires:**
```
NODE_VERSION=20
```

### Redirections et Rewrites

Créer un fichier `netlify.toml` à la racine du projet:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "20"
```

### Headers de sécurité

Dans **Site settings** → **Build & deploy** → **Post processing** → **Headers**:

```
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

## 🐛 Dépannage

### Erreur: "Build failed"

1. Vérifier les logs de déploiement dans Netlify
2. Vérifier que `package.json` a les bonnes dépendances
3. Vérifier que le build fonctionne en local: `npm run build`

### Erreur: "Module not found"

Vérifier que toutes les dépendances sont dans `package.json`:
```bash
npm install
```

### Le webhook ne fonctionne pas

1. Vérifier que la variable d'environnement `NEXT_PUBLIC_WEBHOOK_URL` est bien définie dans Netlify
2. Vérifier que le webhook N8N est actif et accessible
3. Ouvrir la console (F12) et vérifier les erreurs réseau

### Les images ne s'affichent pas

1. Vérifier que les images sont bien dans `public/images/media/`
2. Vérifier les chemins dans `components/MediaSection.tsx`
3. Vérifier que Git a bien poussé les images (pas dans `.gitignore`)

### Le Markdown ne s'affiche pas correctement

1. Vérifier que `react-markdown` et `remark-gfm` sont installés
2. Vérifier que `@tailwindcss/typography` est installé
3. Vérifier que `app/globals.css` contient les styles prose

## 📊 Monitoring

### Analytics Netlify (gratuit)

1. Aller dans **Site settings** → **Analytics**
2. Activer **"Enable analytics"**
3. Voir les statistiques de trafic, pages vues, etc.

### Logs

Pour voir les logs des fonctions serverless (API routes):
1. Aller dans **Functions**
2. Voir les logs en temps réel

## 🔐 Sécurité

### Variables d'environnement sensibles

⚠️ **NE JAMAIS** pusher de fichier `.env` avec des secrets sur GitHub.

Toujours utiliser les variables d'environnement Netlify pour:
- URLs de webhooks
- Clés API
- Secrets

### Webhook URL

La variable `NEXT_PUBLIC_WEBHOOK_URL` est publique (préfixe `NEXT_PUBLIC_`).
Pour sécuriser davantage, vous pourriez:
1. Ajouter une authentification sur le webhook N8N
2. Utiliser une clé API secrète
3. Restreindre les origines autorisées

## 🎉 Récapitulatif

### Ce qui a été fait

1. ✅ Repository Git créé localement
2. ✅ `.gitignore` configuré
3. ✅ Code poussé sur GitHub
4. ✅ Projet importé dans Netlify
5. ✅ Variables d'environnement configurées
6. ✅ Déploiement automatique activé
7. ✅ Site live et accessible

### URLs importantes

- **Repository GitHub:** `https://github.com/VOTRE_USERNAME/discipline-illimitee`
- **Site Netlify:** `https://VOTRE_SITE.netlify.app`
- **Dashboard Netlify:** `https://app.netlify.com/sites/VOTRE_SITE`

### Prochaines étapes

- [ ] Tester toutes les fonctionnalités sur le site déployé
- [ ] Configurer un domaine personnalisé (optionnel)
- [ ] Ajouter les 8 images médias manquantes
- [ ] Configurer Google Analytics (optionnel)
- [ ] Mettre en place un monitoring (optionnel)

---

**Version :** 1.0
**Date :** 25 Décembre 2024
**Statut :** Prêt pour production
