# Intégration du Webhook N8N - Agent Conversationnel

## Vue d'ensemble

L'agent conversationnel du site Discipline Illimitée est connecté à un workflow N8N via un webhook pour qualifier les prospects et collecter leurs informations.

## URL du Webhook

```
https://n8n.srv860867.hstgr.cloud/webhook-test/pierre-qualif-agent
```

## Architecture

```
Frontend (ChatModal.tsx)
    ↓
API Route (/api/chat/route.ts)
    ↓
Webhook N8N
    ↓
Workflow de qualification
```

## Format des données envoyées

### Request (POST)

```json
{
  "message": "Le message de l'utilisateur",
  "timestamp": "2024-12-25T10:30:00.000Z",
  "source": "discipline-illimitee-website"
}
```

### Response attendue

```json
{
  "response": "La réponse de l'agent IA",
  "success": true
}
```

## Implémentation

### 1. Composant ChatModal (`components/ChatModal.tsx`)

Le composant gère l'interface utilisateur du chat et envoie les messages à l'API route.

**Fonctionnalités :**
- Interface conversationnelle
- Options de réponse prédéfinies
- Input libre pour les messages
- Gestion du loading state
- Scroll automatique

### 2. API Route (`app/api/chat/route.ts`)

L'API route sert de proxy entre le frontend et le webhook N8N.

**Avantages :**
- Sécurité : Le webhook URL n'est pas exposé au frontend
- Gestion centralisée des erreurs
- Possibilité d'ajouter de la logique métier
- Logs côté serveur

### 3. Configuration

Le webhook URL peut être configuré via la variable d'environnement :

```bash
NEXT_PUBLIC_WEBHOOK_URL=https://n8n.srv860867.hstgr.cloud/webhook-test/pierre-qualif-agent
```

## Flux de conversation

### 1. Message initial

L'agent démarre avec un message d'accueil et 3 options :

1. **Discipline** - "Je sais quoi faire, mais je ne le fais pas"
2. **Méthode** - "Je bosse dur, mais les résultats ne suivent pas"
3. **Orientation** - "Je suis perdu, je ne sais pas quelle direction prendre"

### 2. Réponses prédéfinies

Chaque option déclenche une réponse spécifique de l'agent qui guide l'utilisateur vers une solution adaptée.

### 3. Conversation libre

Après avoir sélectionné une option, l'utilisateur peut continuer la conversation librement. Tous les messages sont envoyés au webhook.

## Personnalisation du Workflow N8N

Le workflow N8N peut être configuré pour :

1. **Qualifier les prospects**
   - Analyser les réponses
   - Déterminer le niveau d'intérêt
   - Identifier les besoins spécifiques

2. **Collecter des données**
   - Email
   - Nom
   - Objectifs
   - Niveau d'urgence

3. **Automatiser les actions**
   - Envoyer un email de suivi
   - Créer un lead dans un CRM
   - Notifier l'équipe commerciale
   - Proposer un calendrier de rendez-vous

4. **Répondre intelligemment**
   - Utiliser un LLM (GPT, Claude, etc.)
   - Fournir des réponses contextuelles
   - Guider vers les bonnes ressources

## Exemple de configuration N8N

```
Webhook Trigger
    ↓
[Condition] Type de message
    ↓
┌─────────┬─────────┬─────────┐
│         │         │         │
Discipline  Méthode  Orientation
│         │         │         │
└─────────┴────┬────┴─────────┘
               ↓
        LLM (GPT/Claude)
               ↓
        Format Response
               ↓
        Return Data
               ↓
     [Optional] Save to Database
               ↓
     [Optional] Send Email
               ↓
     [Optional] Notify Team
```

## Gestion des erreurs

Le système est conçu pour être résilient :

1. **Timeout du webhook** : Retourne une réponse par défaut
2. **Erreur réseau** : Message générique affiché à l'utilisateur
3. **Réponse invalide** : Utilisation d'un fallback message

```typescript
// Réponse par défaut en cas d'erreur
"Je comprends. Continue à me parler de ta situation.
Plus tu es précis, plus je peux t'aider à trouver la solution adaptée."
```

## Tests

### Tester localement

```bash
# Démarrer le serveur
npm run dev

# Ouvrir le site
http://localhost:3000

# Cliquer sur "Découvrir mon profil"
# Tester les différentes options
# Envoyer des messages libres
```

### Tester le webhook directement

```bash
curl -X POST https://n8n.srv860867.hstgr.cloud/webhook-test/pierre-qualif-agent \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Test message",
    "timestamp": "2024-12-25T10:30:00.000Z",
    "source": "test"
  }'
```

## Monitoring

Pour surveiller les interactions :

1. **Logs N8N** : Vérifier les exécutions du workflow
2. **Console du navigateur** : Erreurs côté client
3. **Logs Vercel/serveur** : Erreurs côté API route

## Améliorations futures

- [ ] Ajouter un système de session pour suivre les conversations
- [ ] Implémenter un rate limiting pour éviter les abus
- [ ] Stocker l'historique des conversations
- [ ] Ajouter des analytics sur les interactions
- [ ] Implémenter des réponses en streaming
- [ ] Ajouter la possibilité de joindre des fichiers
- [ ] Intégrer un système de satisfaction post-conversation

## Support

Pour toute question sur l'intégration du webhook :
- Vérifier les logs N8N
- Consulter la documentation Next.js API Routes
- Tester avec des outils comme Postman ou curl

---

**Note** : Assurez-vous que le workflow N8N est toujours actif et configuré correctement pour recevoir les webhooks.
