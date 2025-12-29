# Configuration des Variables d'Environnement Netlify

## ⚠️ IMPORTANT

Le webhook N8N n'est **plus hardcodé** dans le code. Vous **DEVEZ** configurer la variable d'environnement dans Netlify pour que le chat fonctionne.

## 🚀 Configuration Netlify

### Étape 1: Accéder aux paramètres

1. Se connecter sur https://app.netlify.com
2. Sélectionner votre site `discipline-illimitee`
3. Aller dans **Site settings** (menu gauche)
4. Cliquer sur **Environment variables** (dans la section Build & deploy)

### Étape 2: Ajouter la variable

1. Cliquer sur **Add a variable** ou **Add environment variable**
2. Remplir:

| Champ | Valeur |
|-------|--------|
| **Key** | `NEXT_PUBLIC_WEBHOOK_URL` |
| **Value** | `https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent` |
| **Scopes** | ✅ All scopes (ou Production + Deploy previews) |

3. Cliquer sur **Save**

### Étape 3: Redéployer

Après avoir ajouté la variable:

**Option 1 - Déclenchement automatique:**
```bash
git push
```
Un nouveau déploiement se fera automatiquement avec la variable.

**Option 2 - Déclenchement manuel:**
1. Dans Netlify, aller dans **Deploys**
2. Cliquer sur **Trigger deploy** → **Clear cache and deploy site**

## ✅ Vérification

### Comment savoir si ça fonctionne

1. **Ouvrir le site déployé**
2. **Ouvrir la console navigateur** (F12)
3. **Cliquer sur un CTA** pour ouvrir le chat
4. **Envoyer un message**

**Si la variable est configurée:**
- ✅ Le message est envoyé au webhook
- ✅ La réponse de l'agent s'affiche

**Si la variable n'est PAS configurée:**
- ❌ Dans la console: `NEXT_PUBLIC_WEBHOOK_URL is not defined`
- ⚠️ Message de fallback s'affiche
- ⚠️ Le chat ne fonctionne pas vraiment

### Vérifier dans les logs Netlify

1. Aller dans **Deploys**
2. Cliquer sur le dernier déploiement
3. Cliquer sur **Deploy log**
4. Chercher: `Environment variables` → Devrait lister `NEXT_PUBLIC_WEBHOOK_URL`

## 🔒 Sécurité

### Variables d'environnement

**Fichiers dans Git:**
- ✅ `.env.example` → Template (pas d'URL réelle) → SAFE pour Git
- ✅ `.env.local.example` → Template (pas d'URL réelle) → SAFE pour Git
- ❌ `.env` → URL réelle → IGNORÉ par Git (dans .gitignore)
- ❌ `.env.local` → URL réelle → IGNORÉ par Git (dans .gitignore)

**Code source:**
- ✅ `app/api/chat/route.ts` → Plus d'URL hardcodée
- ✅ Lecture depuis `process.env.NEXT_PUBLIC_WEBHOOK_URL`

### Pourquoi cette approche est meilleure

**Avant:**
```typescript
const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_WEBHOOK_URL ||
  'https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent'; // ❌ Hardcodé
```

**Maintenant:**
```typescript
const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL; // ✅ Variable seulement

if (!WEBHOOK_URL) {
  // Erreur claire
}
```

**Avantages:**
- ✅ URL pas dans le code source public
- ✅ Facile à changer (juste dans Netlify)
- ✅ Sécurité améliorée
- ✅ Bonne pratique industrielle

## 📋 Checklist de déploiement

Avant de déployer:

- [ ] Code poussé sur GitHub
- [ ] Repository connecté à Netlify
- [ ] Variable `NEXT_PUBLIC_WEBHOOK_URL` ajoutée dans Netlify
- [ ] Build lancé (auto ou manuel)
- [ ] Site déployé avec succès
- [ ] Chat testé sur le site déployé
- [ ] Vérifier que le webhook reçoit les messages

## 🐛 Dépannage

### Erreur: "Webhook URL not configured"

**Cause:** La variable `NEXT_PUBLIC_WEBHOOK_URL` n'est pas définie dans Netlify

**Solution:**
1. Aller dans Netlify → Site settings → Environment variables
2. Vérifier que `NEXT_PUBLIC_WEBHOOK_URL` existe
3. Si elle existe, faire un redéploiement (Clear cache and deploy)
4. Si elle n'existe pas, l'ajouter (voir Étape 2)

### Le chat ne répond pas

**Vérifications:**
1. Ouvrir la console (F12) → Onglet Network
2. Chercher la requête `POST /api/chat`
3. Vérifier la réponse

**Si réponse contient "Webhook URL not configured":**
→ Variable d'environnement manquante

**Si réponse contient "Error calling webhook":**
→ Le webhook N8N est down ou inaccessible

**Si réponse est OK mais pas de message:**
→ Problème côté N8N (vérifier les logs N8N)

### Variables pas prises en compte

**Cause:** Cache Netlify

**Solution:**
1. Aller dans Netlify → Deploys
2. Trigger deploy → **Clear cache and deploy site**

### Tester en local

Pour tester en local avec la variable:

1. **Créer `.env.local`** (fichier ignoré par Git):
```bash
NEXT_PUBLIC_WEBHOOK_URL=https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent
```

2. **Relancer le serveur:**
```bash
npm run dev
```

3. **Tester le chat**

## 🔗 Liens utiles

- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)
- [Next.js Environment Variables](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables)
- Guide de déploiement complet: `GUIDE_DEPLOIEMENT_NETLIFY.md`

## 📝 Note sur NEXT_PUBLIC_

Le préfixe `NEXT_PUBLIC_` est **obligatoire** pour que Next.js expose la variable au frontend.

**Variables avec `NEXT_PUBLIC_`:**
- ✅ Accessibles côté client (navigateur)
- ✅ Nécessaires pour les API routes accessibles publiquement
- ⚠️ Ne PAS y mettre de secrets (clés API privées, tokens, etc.)

**Variables sans `NEXT_PUBLIC_`:**
- ✅ Accessibles seulement côté serveur
- ✅ Pour les secrets (clés API, tokens, etc.)
- ❌ Ne fonctionnent PAS dans notre cas (API route Next.js = côté serveur)

**Pour notre cas:**
- L'URL du webhook est publique (pas un secret)
- Elle est appelée depuis l'API route (côté serveur)
- Donc `NEXT_PUBLIC_WEBHOOK_URL` est approprié

---

**Date:** 25 Décembre 2024
**Version:** 1.0
**Statut:** ✅ Configuration sécurisée
