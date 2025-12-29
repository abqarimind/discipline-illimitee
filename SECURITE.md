# Note de Sécurité - Webhook URL

## 📋 État actuel

### URL du Webhook

L'URL du webhook N8N est **volontairement publique** et accessible dans le code:

```
https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent
```

**Localisation:**
- `app/api/chat/route.ts` (ligne 5) - Fallback hardcodé
- Documentation diverses

## ⚠️ Pourquoi c'est acceptable (mais perfectible)

### 1. Architecture de sécurité actuelle

```
Frontend (Public)
    ↓
Next.js API Route (Proxy) ← URL cachée au frontend
    ↓
Webhook N8N (Public) ← Accessible depuis internet
```

**Points de sécurité:**
- ✅ Le webhook est **proxifié** via l'API route Next.js
- ✅ L'URL n'est **pas directement exposée** dans le code frontend
- ✅ Le webhook N8N peut avoir ses propres **mécanismes de sécurité** (rate limiting, authentification)

### 2. Niveau de risque

**Risque FAIBLE car:**
- Le webhook ne fait que recevoir des messages texte
- Pas de données sensibles transmises
- Le sessionId est généré côté client (pas de secret)
- N8N peut implémenter rate limiting côté serveur

**Risque MOYEN si:**
- Le webhook n'a pas de rate limiting
- Quelqu'un pourrait spammer le webhook
- Coûts potentiels si N8N est payant au volume

## 🔒 Recommandations de sécurité

### Option 1: Ajouter une clé API secrète (RECOMMANDÉ)

#### Côté Next.js

1. **Créer une variable d'environnement secrète:**

`.env.local` (NE PAS COMMITTER):
```bash
WEBHOOK_API_KEY=votre_cle_secrete_aleatoire_longue_et_complexe
```

2. **Modifier l'API route:**

```typescript
// app/api/chat/route.ts
const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL || '...';
const WEBHOOK_API_KEY = process.env.WEBHOOK_API_KEY;

const response = await fetch(WEBHOOK_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': WEBHOOK_API_KEY, // ← Ajout de l'authentification
  },
  body: JSON.stringify({...}),
});
```

#### Côté N8N

Configurer le webhook pour vérifier le header `X-API-Key`.

### Option 2: Rate Limiting (RECOMMANDÉ)

#### Dans N8N

1. Limiter le nombre de requêtes par IP
2. Limiter le nombre de requêtes par sessionId
3. Bloquer les IPs suspectes

#### Dans Next.js (optionnel)

Ajouter un middleware de rate limiting:

```bash
npm install @upstash/ratelimit @upstash/redis
```

### Option 3: CORS et Origin Check

#### Dans N8N

Configurer le webhook pour accepter uniquement les requêtes depuis:
- `https://votre-domaine.com`
- `https://votre-site.netlify.app`

### Option 4: Webhook Signature

Signer les requêtes avec HMAC pour garantir leur authenticité:

```typescript
import crypto from 'crypto';

const signature = crypto
  .createHmac('sha256', SECRET_KEY)
  .update(JSON.stringify(body))
  .digest('hex');
```

## 📝 Bonnes pratiques appliquées

### ✅ Ce qui est bien fait

1. **Proxy via API route** - URL pas directement dans le frontend
2. **Fichiers .env exclus** - `.env` et `.env.local` dans `.gitignore`
3. **Fichiers .example nettoyés** - Plus de vraies valeurs dans les examples

### ⚠️ À améliorer (optionnel)

1. Ajouter une clé API secrète
2. Implémenter rate limiting
3. Logger les requêtes suspectes
4. Monitorer les appels au webhook

## 🔄 Migration vers une architecture plus sécurisée

Si vous voulez renforcer la sécurité:

### Étape 1: Ajouter une clé API

```bash
# Générer une clé aléatoire
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Ajouter dans .env.local
echo "WEBHOOK_API_KEY=la_cle_generee" >> .env.local
```

### Étape 2: Modifier le code

Voir "Option 1" ci-dessus.

### Étape 3: Configurer N8N

Dans le workflow N8N, ajouter une vérification du header `X-API-Key`.

### Étape 4: Déployer

Ajouter la variable d'environnement dans Netlify:
1. Site settings → Build & deploy → Environment variables
2. Ajouter `WEBHOOK_API_KEY` avec la clé

## 📊 Analyse de risque

### Scénario 1: Quelqu'un trouve l'URL du webhook

**Impact:** Peut envoyer des messages au webhook

**Mitigation:**
- Rate limiting côté N8N
- Monitoring des messages suspects
- Coût négligeable (messages texte)

### Scénario 2: Spam du webhook

**Impact:** Surcharge du webhook, coûts potentiels

**Mitigation:**
- Rate limiting (par IP, par sessionId)
- Captcha sur le frontend (optionnel)
- Blocage d'IP dans N8N

### Scénario 3: Injection de contenu malveillant

**Impact:** L'agent pourrait recevoir du contenu malveillant

**Mitigation:**
- ✅ Déjà fait: Validation côté API route (`message` required)
- Sanitization du contenu dans N8N
- Validation du format des messages

## ✅ Conclusion

**État actuel:** Sécurité acceptable pour un site vitrine

**Recommandé si:**
- Volume de trafic élevé → Ajouter rate limiting
- Données sensibles → Ajouter clé API + signature
- Budget limité → Monitorer les coûts N8N

**Pas urgent si:**
- Site en développement
- Faible trafic
- Webhook N8N déjà protégé

## 📚 Ressources

- [Next.js API Routes Security](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
- [N8N Webhook Security](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)
- [OWASP API Security](https://owasp.org/www-project-api-security/)

---

**Date:** 25 Décembre 2024
**Version:** 1.0
**Niveau de risque actuel:** ⚠️ MOYEN (acceptable pour MVP/production)
