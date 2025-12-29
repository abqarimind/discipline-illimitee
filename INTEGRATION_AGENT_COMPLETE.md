# Intégration Agent Conversationnel - Documentation Complète

## 🎯 Objectif

Connecter le chat modal de l'application à l'agent conversationnel N8N avec :
- Gestion de session pour maintenir le contexte
- Support des suggestions dynamiques de l'agent
- Format de réponse flexible et robuste
- **100% des réponses provenant du webhook N8N**

## 📋 Résumé des modifications

### Version 1.1.3 - 25 Décembre 2024 (Actuelle)

#### Amélioration majeure
- **Support Markdown complet** dans le chat
- L'agent peut maintenant formater ses réponses avec :
  - **Texte en gras** et *italique*
  - Listes à puces et numérotées
  - Titres (H1-H4)
  - Code inline et blocs de code
  - Citations (blockquote)
  - Liens
- Meilleure lisibilité et structuration des réponses
- Plus sécurisé (suppression de `dangerouslySetInnerHTML`)

#### Packages installés
- `react-markdown` : Rendu Markdown
- `remark-gfm` : GitHub Flavored Markdown
- `@tailwindcss/typography` : Styles prose

#### Documentation
- `MARKDOWN_GUIDE.md` : Guide complet pour l'agent N8N

---

### Version 1.1.2 - 25 Décembre 2024

#### Changement majeur
- **Suppression de toutes les réponses hardcodées**
- Les 3 options initiales (Discipline, Méthode, Orientation) appellent maintenant directement le webhook
- Plus aucune réponse statique côté frontend
- L'agent N8N contrôle 100% du contenu conversationnel

#### Impact
- Comportement uniforme pour toutes les interactions
- Permet à l'agent de personnaliser les réponses selon le contexte
- Facilite les mises à jour du contenu (tout se fait côté N8N)

### Version 1.1.1 - 25 Décembre 2024

#### Fichiers modifiés

1. **`components/ChatModal.tsx`**
   - Ligne 5-9 : Interface `Message` étendue avec `suggestions?: string[]`
   - Ligne 27 : Ajout de l'état `sessionId`
   - Ligne 30-36 : Génération automatique du sessionId au montage
   - Ligne 45-72 : `sendToWebhook()` retourne maintenant `{ content, suggestions }`
   - Ligne 114-150 : `handleSendMessage()` et nouveau `handleSelectSuggestion()`
   - Ligne 195-207 : Affichage des suggestions dynamiques après les messages agent

2. **`app/api/chat/route.ts`**
   - Ligne 10 : Extraction du `sessionId` du body
   - Ligne 27 : Transmission du `sessionId` au webhook
   - Ligne 39-54 : Extraction intelligente de la réponse N8N (support de 3 formats)
   - Ligne 56-61 : Retour de `response` et `suggestions` au frontend

3. **`CHANGELOG.md`**
   - Documentation complète de la version 1.1.1
   - Détails techniques sur le format de réponse

4. **Nouveaux fichiers créés**
   - `WEBHOOK_TEST_GUIDE.md` : Guide de test complet
   - `INTEGRATION_AGENT_COMPLETE.md` : Ce fichier

## 🔧 Fonctionnement technique

### 1. Flux de communication

```
[Frontend ChatModal]
       ↓
   Envoie message + sessionId
       ↓
[API Route /api/chat]
       ↓
   Proxy vers N8N Webhook
       ↓
[N8N Agent]
       ↓
   Retourne { output: { output, suggestions } }
       ↓
[API Route /api/chat]
       ↓
   Extrait et formate la réponse
       ↓
[Frontend ChatModal]
       ↓
   Affiche réponse + suggestions
```

### 2. Format de sessionId

**Format :** `session_${timestamp}_${random}`

**Exemple :** `session_1735141234567_abc123xyz`

**Génération :**
```typescript
const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
```

**Propriétés :**
- Unique par session de chat
- Créé au montage du ChatModal
- Persiste pendant toute la conversation
- Nouveau sessionId à chaque réouverture du modal

### 3. Payload envoyé au Webhook

**URL Production :** `https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent`

```json
{
  "message": "Le message de l'utilisateur",
  "sessionId": "session_1735141234567_abc123xyz",
  "timestamp": "2024-12-25T10:30:45.123Z",
  "source": "discipline-illimitee-website"
}
```

### 4. Format de réponse attendu

#### Format N8N (Recommandé)
```json
[
  {
    "output": {
      "output": "Texte de la réponse de l'agent...",
      "suggestions": [
        "Suggestion 1",
        "Suggestion 2",
        "Suggestion 3"
      ]
    }
  }
]
```

#### Extraction de la réponse (code)
```typescript
// L'API route supporte 3 formats :

// Format 1 : Array N8N
if (Array.isArray(data) && data.length > 0 && data[0].output) {
  const output = data[0].output;
  agentResponse = output.output;
  suggestions = output.suggestions || [];
}

// Format 2 : Object N8N
else if (data.output) {
  agentResponse = data.output.output;
  suggestions = data.output.suggestions || [];
}

// Format 3 : Legacy simple
else if (data.response) {
  agentResponse = data.response;
}
```

### 5. Affichage des suggestions

Les suggestions s'affichent automatiquement après chaque message de l'agent qui en contient :

```tsx
{msg.role === 'agent' && msg.suggestions && msg.suggestions.length > 0 && (
  <div className="flex flex-col gap-2 mt-4">
    {msg.suggestions.map((suggestion, suggIdx) => (
      <button
        key={suggIdx}
        onClick={() => handleSelectSuggestion(suggestion)}
        className="p-4 border border-gray-200 text-left text-sm hover:border-black hover:bg-gray-100 transition-all"
      >
        {suggestion}
      </button>
    ))}
  </div>
)}
```

## 🎨 Interface utilisateur

### Options initiales

Au premier chargement du chat, 3 options sont proposées :
1. "La Discipline — Je sais quoi faire, mais je ne le fais pas"
2. "La Méthode — Je bosse dur, mais les résultats ne suivent pas"
3. "L'Orientation — Je suis perdu, je ne sais pas quelle direction prendre"

**⚠️ Important (v1.1.2+) :** Ces options envoient maintenant directement le label au webhook N8N. L'agent reçoit le texte exact de l'option et peut retourner une réponse personnalisée avec suggestions.

### Suggestions dynamiques (de l'agent)

Après chaque réponse de l'agent contenant des suggestions :
- Affichage de boutons identiques aux options initiales
- Style cohérent : bordure grise, hover noir
- **Clic sur une suggestion = remplit le champ de message** (v1.1.2+)
- L'utilisateur peut modifier la suggestion avant de l'envoyer
- Ou l'envoyer directement avec "Envoyer" ou Entrée
- Les suggestions précédentes restent visibles dans l'historique

## 🧪 Tests recommandés

### Test 1 : SessionId
```bash
# Ouvrir la console navigateur (F12) et Network tab
# Ouvrir le chat
# Envoyer un message
# Vérifier dans le payload :
{
  "message": "...",
  "sessionId": "session_1735141234567_abc123xyz"
}
```

### Test 2 : Extraction réponse N8N
```bash
# Configurer N8N pour retourner :
[
  {
    "output": {
      "output": "Test de réponse",
      "suggestions": ["Test 1", "Test 2"]
    }
  }
]

# Envoyer un message
# Vérifier que "Test de réponse" s'affiche
# Vérifier que les 2 suggestions apparaissent en boutons
```

### Test 3 : Clic sur suggestion
```bash
# Envoyer un message qui retourne des suggestions
# Cliquer sur une suggestion
# Vérifier qu'elle remplit le champ de message (v1.1.2+)
# Modifier la suggestion si souhaité
# Cliquer sur "Envoyer" ou appuyer sur Entrée
# Vérifier que le message (modifié ou non) est envoyé
```

## 🔐 Sécurité

### Webhook URL
- **URL Production :** `https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent`
- Stockée dans variable d'environnement : `NEXT_PUBLIC_WEBHOOK_URL`
- Fallback hardcodé dans le code
- Jamais exposée au frontend (proxy via API route)

### Gestion des erreurs
- Try/catch sur tous les appels webhook
- Message de fallback si erreur : "Je comprends. Continue à me parler de ta situation..."
- Status 200 retourné même en cas d'erreur (pour éviter d'afficher l'erreur à l'utilisateur)
- Logs détaillés côté serveur uniquement

### Validation
- Vérification que `message` existe (required)
- `sessionId` optionnel (par défaut vide si absent)
- Validation du format de réponse avec multiples fallbacks

## 🚀 Déploiement

### Variables d'environnement

Créer `.env.local` :
```bash
NEXT_PUBLIC_WEBHOOK_URL=https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent
```

### Build de production

```bash
npm run build
npm start
```

### Vérifications avant déploiement

- [ ] Webhook N8N actif et accessible
- [ ] Format de réponse N8N configuré correctement
- [ ] Tests en local réussis
- [ ] Variables d'environnement configurées
- [ ] Logs serveur vérifiés (pas d'erreurs)

## 📊 Monitoring

### Logs à surveiller

**Frontend (console navigateur) :**
```javascript
// En cas d'erreur
Error sending to webhook: [details]
```

**Backend (console serveur) :**
```javascript
// En cas d'erreur
Error calling webhook: [details]
```

### Métriques importantes
- Taux de réussite des appels webhook
- Temps de réponse moyen
- Nombre de sessions uniques
- Taux d'utilisation des suggestions

## 🔄 Évolutions futures possibles

### Court terme
- [ ] Stocker le sessionId dans localStorage pour persistance
- [ ] Ajouter un indicateur de typing "L'agent écrit..."
- [ ] Limiter le nombre de suggestions affichées (max 5)

### Moyen terme
- [ ] Historique des conversations (stockage backend)
- [ ] Analytics sur les suggestions les plus cliquées
- [ ] A/B testing sur les formulations

### Long terme
- [ ] Multi-langue (FR/EN)
- [ ] Mode vocal (speech-to-text)
- [ ] Suggestions prédictives

## 📞 Support

### En cas de problème

1. Vérifier les logs serveur Next.js
2. Vérifier les logs N8N
3. Consulter `WEBHOOK_TEST_GUIDE.md`
4. Vérifier le format de réponse dans Network tab

### Ressources
- Documentation N8N : https://docs.n8n.io/
- Documentation Next.js : https://nextjs.org/docs
- Guide de test : `WEBHOOK_TEST_GUIDE.md`
- CHANGELOG : `CHANGELOG.md`

---

**Version :** 1.1.1
**Date :** 25 Décembre 2024
**Statut :** ✅ Production Ready
