# Guide de Dépannage - Discipline Illimitée

## Problèmes courants et solutions

### 1. Erreur: "Parsing CSS source code failed"

#### Symptôme
```
@import rules must precede all rules aside from @charset and @layer statements
```

#### Cause
Avec Tailwind CSS v4, les `@import` de fonts externes dans le CSS causent des conflits car Tailwind génère du CSS avant de traiter ces imports.

#### Solution DÉFINITIVE

**Ne PAS charger les fonts dans le CSS.** Charger les fonts dans le HTML à la place.

**1. Supprimer l'import de fonts de `app/globals.css` :**
```css
@import "tailwindcss";

@theme {
  /* Votre configuration */
}
```

**2. Ajouter les fonts dans `app/layout.tsx` :**
```tsx
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
</head>
```

**3. Nettoyer le cache et redémarrer :**
```bash
cd discipline-illimitee
rm -rf .next
npm run dev
```

**Avantages de cette approche :**
- ✅ Compatible avec Tailwind v4
- ✅ Plus performant (preconnect)
- ✅ Pas de conflits d'ordre CSS
- ✅ Chargement parallèle optimisé

---

### 2. Erreur: "tailwindcss directly as a PostCSS plugin"

#### Symptôme
```
The PostCSS plugin has moved to a separate package
```

#### Cause
Utilisation de l'ancien plugin Tailwind v3 au lieu de Tailwind v4.

#### Solution

**1. Installer le nouveau plugin :**
```bash
npm install @tailwindcss/postcss
```

**2. Mettre à jour `postcss.config.js` :**
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

**3. Redémarrer :**
```bash
npm run dev
```

---

### 3. Le serveur ne démarre pas

#### Symptôme
```
Unable to acquire lock, is another instance running?
```

#### Solution

**Option 1 - Nettoyer le cache :**
```bash
rm -rf .next
npm run dev
```

**Option 2 - Tuer tous les processus Node :**
```bash
# Windows
taskkill /F /IM node.exe

# Mac/Linux
killall node
```

**Option 3 - Supprimer le fichier de verrouillage :**
```bash
rm -rf .next/dev/lock
npm run dev
```

---

### 4. Les classes Tailwind ne fonctionnent pas

#### Symptôme
Les classes CSS de Tailwind ne sont pas appliquées.

#### Solution

**1. Vérifier `app/globals.css` :**
```css
@import "tailwindcss";
```

**2. Vérifier que `globals.css` est importé dans `app/layout.tsx` :**
```typescript
import './globals.css';
```

**3. Nettoyer et redémarrer :**
```bash
rm -rf .next
npm run dev
```

---

### 5. Port déjà utilisé

#### Symptôme
```
Port 3000 is in use
```

#### Solution

**Option 1 - Utiliser un autre port :**
Next.js le fait automatiquement (3001, 3002, etc.)

**Option 2 - Libérer le port 3000 :**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

**Option 3 - Spécifier un port :**
```bash
PORT=3001 npm run dev
```

---

### 6. Erreur TypeScript

#### Symptôme
```
Type error: ...
```

#### Solution

**1. Vérifier `tsconfig.json` existe et est valide**

**2. Redémarrer le serveur TypeScript :**
```bash
# Arrêter le serveur
# Supprimer le cache
rm -rf .next
# Redémarrer
npm run dev
```

**3. Si l'erreur persiste, vérifier le code :**
- Types corrects
- Imports valides
- Props correctes

---

### 7. Module non trouvé

#### Symptôme
```
Cannot find module '@/...'
```

#### Cause
Problème avec les alias de chemin ou dépendances manquantes.

#### Solution

**1. Vérifier `tsconfig.json` contient :**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

**2. Réinstaller les dépendances :**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### 8. Le webhook ne fonctionne pas

#### Symptôme
Les messages ne sont pas envoyés au webhook N8N.

#### Solution

**1. Vérifier que le webhook N8N est actif**

**2. Tester le webhook directement :**
```bash
curl -X POST https://n8n.srv860867.hstgr.cloud/webhook-test/pierre-qualif-agent \
  -H "Content-Type: application/json" \
  -d '{"message":"test","timestamp":"2024-12-25T10:00:00.000Z"}'
```

**3. Vérifier l'API route (`app/api/chat/route.ts`) :**
```typescript
const WEBHOOK_URL = 'https://n8n.srv860867.hstgr.cloud/webhook-test/pierre-qualif-agent';
```

**4. Vérifier les logs du navigateur (F12)** pour voir les erreurs réseau.

---

### 9. Build de production échoue

#### Symptôme
```
npm run build
Error: ...
```

#### Solution

**1. Nettoyer complètement :**
```bash
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

**2. Vérifier les erreurs TypeScript :**
```bash
npx tsc --noEmit
```

**3. Corriger les erreurs et re-builder**

---

### 10. Styles ne s'appliquent pas en production

#### Symptôme
Le site fonctionne en dev mais pas en production.

#### Solution

**1. Vérifier le build :**
```bash
npm run build
npm start
```

**2. Vérifier que Tailwind génère les classes :**
- Les classes utilisées existent dans les composants
- Pas de classes dynamiques (utiliser `className` statiques)

**3. Vérifier les variables d'environnement en production**

---

## Commandes de dépannage rapide

### Réinitialisation complète
```bash
# Arrêter tous les serveurs
# Puis :
cd discipline-illimitee
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Vérifier l'état du projet
```bash
# Voir la version de Node
node -v

# Voir les dépendances
npm list --depth=0

# Vérifier TypeScript
npx tsc --version

# Tester le build
npm run build
```

### Nettoyer les caches
```bash
# Cache Next.js
rm -rf .next

# Cache npm
npm cache clean --force

# Cache TypeScript
rm -rf tsconfig.tsbuildinfo
```

---

## Logs utiles

### Voir les logs détaillés
```bash
# Développement avec logs verbeux
npm run dev -- --debug

# Voir les logs de build
npm run build -- --debug
```

### Console du navigateur
- Ouvrir F12
- Onglet "Console" pour les erreurs JavaScript
- Onglet "Network" pour les erreurs réseau
- Onglet "Application" pour les problèmes de cache

---

## Problèmes spécifiques Windows

### Problème de permissions
```powershell
# Exécuter en tant qu'administrateur
npm install
```

### Problème de chemins longs
```powershell
# Activer les chemins longs
git config --system core.longpaths true
```

### Problème de scripts
```powershell
# Autoriser l'exécution de scripts
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

---

## Vérifier l'état de santé du projet

### Checklist
- [ ] `npm install` réussit
- [ ] `npm run dev` démarre sans erreur
- [ ] Le site s'affiche sur localhost
- [ ] `npm run build` réussit
- [ ] Pas d'erreurs TypeScript
- [ ] Pas d'erreurs dans la console
- [ ] Le modal de chat s'ouvre
- [ ] Les messages s'envoient

### Tests rapides
```bash
# 1. Dépendances OK ?
npm list

# 2. TypeScript OK ?
npx tsc --noEmit

# 3. Build OK ?
npm run build

# 4. Linter OK ?
npm run lint
```

---

## Support et ressources

### Documentation officielle
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Fichiers de documentation du projet
- `README.md` - Vue d'ensemble
- `QUICK_START.md` - Démarrage rapide
- `CORRECTIONS.md` - Corrections appliquées
- `TAILWIND_V4_CONFIG.md` - Config Tailwind

### En cas de problème persistant

1. Consulter les logs complets
2. Vérifier les versions des dépendances
3. Chercher l'erreur sur Google/Stack Overflow
4. Vérifier les issues GitHub de Next.js/Tailwind
5. Réinitialiser complètement le projet

---

**Dernière mise à jour :** Décembre 2024
