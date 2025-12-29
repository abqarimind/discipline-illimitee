# Guide de Déploiement - Discipline Illimitée

## Déploiement sur Vercel (Recommandé)

Vercel est la plateforme optimale pour les applications Next.js.

### Étape 1 : Préparer le projet

```bash
# S'assurer que tout fonctionne localement
npm run build
npm start
```

### Étape 2 : Déployer sur Vercel

#### Option A : Via l'interface web

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub/GitLab/Bitbucket
3. Importer le repository
4. Configurer les variables d'environnement :
   - `NEXT_PUBLIC_WEBHOOK_URL` : URL du webhook N8N
5. Déployer

#### Option B : Via la CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Variables d'environnement à configurer

Dans les paramètres Vercel, ajouter :

```
NEXT_PUBLIC_WEBHOOK_URL=https://n8n.srv860867.hstgr.cloud/webhook-test/pierre-qualif-agent
```

## Déploiement sur Netlify

### Via l'interface web

1. Se connecter sur [netlify.com](https://netlify.com)
2. Importer le projet depuis Git
3. Build settings :
   - Build command : `npm run build`
   - Publish directory : `.next`
4. Variables d'environnement :
   - `NEXT_PUBLIC_WEBHOOK_URL`
5. Déployer

### Via la CLI

```bash
# Installer Netlify CLI
npm i -g netlify-cli

# Se connecter
netlify login

# Initialiser
netlify init

# Déployer
netlify deploy --prod
```

## Déploiement sur un VPS (AWS, DigitalOcean, etc.)

### Prérequis

- Node.js 18+ installé
- PM2 pour la gestion de processus
- Nginx comme reverse proxy

### 1. Préparer le serveur

```bash
# Installer Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installer PM2
sudo npm install -g pm2
```

### 2. Déployer l'application

```bash
# Cloner le repository
git clone [votre-repo]
cd discipline-illimitee

# Installer les dépendances
npm install

# Builder l'application
npm run build

# Démarrer avec PM2
pm2 start npm --name "discipline-illimitee" -- start

# Sauvegarder la configuration PM2
pm2 save
pm2 startup
```

### 3. Configurer Nginx

```nginx
server {
    listen 80;
    server_name votredomaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. SSL avec Let's Encrypt

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d votredomaine.com
```

## Déploiement sur Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_WEBHOOK_URL=https://n8n.srv860867.hstgr.cloud/webhook-test/pierre-qualif-agent
    restart: unless-stopped
```

### Commandes Docker

```bash
# Builder l'image
docker build -t discipline-illimitee .

# Lancer le container
docker run -p 3000:3000 -e NEXT_PUBLIC_WEBHOOK_URL="votre-url" discipline-illimitee

# Ou avec docker-compose
docker-compose up -d
```

## Configuration du Domaine

### DNS

Pointer votre domaine vers le serveur :

```
A Record
@       -> [IP de votre serveur]
www     -> [IP de votre serveur]
```

### Sur Vercel

Vercel gère automatiquement les domaines custom. Ajouter simplement le domaine dans les paramètres.

## Optimisations Production

### 1. Variables d'environnement

Créer un fichier `.env.production` :

```bash
NEXT_PUBLIC_WEBHOOK_URL=https://n8n.srv860867.hstgr.cloud/webhook-test/pierre-qualif-agent
```

### 2. Optimisation des images

Les images sont déjà optimisées par Next.js Image component.

### 3. Compression

Next.js active automatiquement la compression gzip.

### 4. Cache

Configurer les headers de cache dans `next.config.js` :

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

## Monitoring

### Vercel Analytics

Activer dans les paramètres du projet Vercel.

### Google Analytics

Ajouter dans `app/layout.tsx` :

```typescript
import Script from 'next/script';

// Dans le component
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### Sentry pour le tracking d'erreurs

```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

## Checklist de déploiement

- [ ] Tests locaux passent
- [ ] Build production réussit
- [ ] Variables d'environnement configurées
- [ ] Webhook N8N testé et fonctionnel
- [ ] Domaine configuré
- [ ] SSL activé
- [ ] Analytics configuré
- [ ] Performance testée (Lighthouse)
- [ ] SEO vérifié
- [ ] Responsive testé sur mobile

## Rollback

### Sur Vercel

Vercel garde un historique des déploiements. Utiliser l'interface pour revenir à une version précédente.

### Sur VPS avec PM2

```bash
# Revenir au commit précédent
git reset --hard HEAD~1

# Rebuild
npm run build

# Restart
pm2 restart discipline-illimitee
```

## Support

En cas de problème :
1. Vérifier les logs du serveur
2. Tester le webhook séparément
3. Vérifier les variables d'environnement
4. Consulter la documentation Next.js

---

Bon déploiement !
