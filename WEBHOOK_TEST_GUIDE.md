# Guide de test - Intégration Webhook avec Suggestions

## Vue d'ensemble

Le chat agent est maintenant entièrement intégré avec le webhook N8N et supporte :
1. ✅ Gestion de session (sessionId)
2. ✅ Suggestions dynamiques de l'agent
3. ✅ Extraction intelligente de la réponse N8N

## Format de réponse attendu du Webhook

### Format N8N (Recommandé)
```json
[
  {
    "output": {
      "output": "Texte de la réponse de l'agent...",
      "suggestions": [
        "Je vise un concours/une grande école (HEC, Médecine, ENS...)",
        "Je veux lancer mon business/projet perso",
        "Je veux juste arrêter de gâcher mes journées"
      ]
    }
  }
]
```

### Formats alternatifs supportés

**Format objet simple :**
```json
{
  "output": {
    "output": "Texte de la réponse...",
    "suggestions": ["Option 1", "Option 2"]
  }
}
```

**Format legacy (sans suggestions) :**
```json
{
  "response": "Texte de la réponse..."
}
```

## Payload envoyé au Webhook

Chaque message utilisateur envoie :

```json
{
  "message": "Le message de l'utilisateur",
  "sessionId": "session_1735141234567_abc123xyz",
  "timestamp": "2024-12-25T10:30:45.123Z",
  "source": "discipline-illimitee-website"
}
```

## Comment tester

### 1. Démarrer le serveur

```bash
cd discipline-illimitee
npm run dev
```

### 2. Ouvrir le chat

1. Aller sur http://localhost:3005
2. Cliquer sur un bouton CTA pour ouvrir le chat
3. Le chat s'ouvre avec le message initial et 3 options

### 3. Tester le flux conversationnel

**⚠️ IMPORTANT (v1.1.2+) :** Toutes les réponses proviennent maintenant du webhook N8N. Assurez-vous que votre webhook est actif et configuré pour répondre aux options initiales.

**Test 1 - Options initiales (nécessite webhook actif) :**
1. Cliquer sur "La Discipline — Je sais quoi faire, mais je ne le fais pas"
2. Vérifier que le webhook est appelé avec le texte exact de l'option
3. Vérifier que la réponse du webhook s'affiche
4. Vérifier que des suggestions s'affichent si le webhook en retourne

**Test 2 - Message libre :**
1. Écrire un message : "Je procrastine tout le temps"
2. Appuyer sur Entrée ou cliquer "Envoyer"
3. Vérifier que le webhook est appelé avec le sessionId

**Test 3 - Suggestions dynamiques (nécessite webhook actif) :**
1. Envoyer un message
2. Si le webhook retourne des suggestions, elles s'affichent sous la réponse
3. Cliquer sur une suggestion
4. **Vérifier qu'elle remplit le champ de message** (v1.1.2+)
5. Modifier la suggestion si souhaité
6. Cliquer sur "Envoyer" ou appuyer sur Entrée pour l'envoyer

### 4. Vérifier les logs

**Console navigateur (F12) :**
```javascript
// Devrait afficher pour chaque message
POST /api/chat
{
  message: "...",
  sessionId: "session_..."
}
```

**Console serveur :**
```
POST /api/chat
Calling webhook: https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent
Response from webhook: {...}
```

## Tests à effectuer

### ✅ Test 1 : Génération du sessionId
- [ ] Ouvrir le chat
- [ ] Vérifier dans les Network tools que le sessionId est envoyé
- [ ] Fermer et rouvrir le chat
- [ ] Vérifier qu'un NOUVEAU sessionId est généré

### ✅ Test 2 : Transmission au webhook
- [ ] Envoyer un message
- [ ] Vérifier dans les logs N8N que le sessionId arrive bien
- [ ] Vérifier que le message arrive bien
- [ ] Vérifier que le timestamp et source sont présents

### ✅ Test 3 : Extraction de la réponse
- [ ] Configurer N8N pour retourner le format array
- [ ] Envoyer un message
- [ ] Vérifier que la réponse s'affiche correctement

### ✅ Test 4 : Suggestions dynamiques
- [ ] Configurer N8N pour retourner des suggestions
- [ ] Envoyer un message
- [ ] Vérifier que les suggestions s'affichent sous la réponse
- [ ] Cliquer sur une suggestion
- [ ] **Vérifier qu'elle remplit le champ de message** (v1.1.2+)
- [ ] Modifier la suggestion (optionnel)
- [ ] Appuyer sur Entrée ou cliquer "Envoyer"
- [ ] Vérifier qu'elle est envoyée au webhook

### ✅ Test 5 : Gestion des erreurs
- [ ] Couper le webhook N8N
- [ ] Envoyer un message
- [ ] Vérifier qu'un message de fallback s'affiche
- [ ] Vérifier qu'aucune erreur n'apparaît côté utilisateur

## Configuration N8N recommandée

### Node "Respond to Webhook"

**Corps de la réponse :**
```json
{
  "output": {
    "output": "{{ $json.agentResponse }}",
    "suggestions": "{{ $json.suggestions }}"
  }
}
```

**Exemple de payload complet :**
```json
{
  "output": {
    "output": "On a bien identifié le bug : le fossé entre l'intention et l'action...",
    "suggestions": [
      "Je vise un concours/une grande école (HEC, Médecine, ENS...)",
      "Je veux lancer mon business/projet perso",
      "Je veux juste arrêter de gâcher mes journées"
    ]
  }
}
```

## Points d'attention

### ⚠️ Webhook N8N OBLIGATOIRE (v1.1.2+)
- ❗ **CRITIQUE :** Le webhook doit être actif et fonctionnel
- ❗ Toutes les réponses proviennent du webhook (y compris les options initiales)
- ❗ Si le webhook est down, seul le message fallback s'affichera
- ❗ Configurer le webhook pour reconnaître et répondre aux 3 options initiales :
  - "La Discipline — Je sais quoi faire, mais je ne le fais pas"
  - "La Méthode — Je bosse dur, mais les résultats ne suivent pas"
  - "L'Orientation — Je suis perdu, je ne sais pas quelle direction prendre"

### SessionId
- ✅ Généré automatiquement au montage du ChatModal
- ✅ Unique par session de chat
- ✅ Persiste pendant toute la conversation
- ✅ Nouveau sessionId à chaque ouverture du modal

### Suggestions
- ✅ Optionnelles (le système fonctionne sans)
- ✅ S'affichent automatiquement si présentes
- ✅ Style identique aux options initiales
- ✅ Cliquables et envoient un nouveau message

### Réponses
- ✅ Support de multiples formats
- ✅ Fallback automatique si erreur
- ✅ Pas d'erreur visible pour l'utilisateur
- ✅ Logs détaillés côté serveur

## Dépannage

### Les suggestions ne s'affichent pas
1. Vérifier le format de réponse du webhook dans Network tab
2. Vérifier que `data.suggestions` existe dans la réponse API
3. Vérifier la console pour des erreurs

### Le sessionId n'arrive pas au webhook
1. Vérifier que ChatModal génère bien le sessionId (console.log)
2. Vérifier dans Network tab que le sessionId est dans le body
3. Vérifier les logs N8N

### Message d'erreur générique s'affiche
1. Vérifier que le webhook N8N est actif
2. Vérifier l'URL du webhook dans `.env` ou `route.ts`
3. Vérifier les logs serveur Next.js pour l'erreur exacte

## Exemple de conversation complète

```
[AGENT] Salut. Ici l'IA de Pierre. On ne va pas tourner autour du pot.
        Si tu es là, c'est que tu veux plus que ce que le système te propose.
        C'est quoi ton plus gros frein aujourd'hui ?

[OPTIONS INITIALES]
- La Discipline — Je sais quoi faire, mais je ne le fais pas
- La Méthode — Je bosse dur, mais les résultats ne suivent pas
- L'Orientation — Je suis perdu, je ne sais pas quelle direction prendre

[USER CLIQUE] "La Discipline — Je sais quoi faire, mais je ne le fais pas"

[AGENT] Classique. Ton circuit de la récompense est déréglé...
        [réponse hardcodée]

[USER TAPE] "Je procrastine tout le temps"

[AGENT] On a bien identifié le bug : le fossé entre l'intention et l'action...
        [réponse du webhook N8N]

[SUGGESTIONS DYNAMIQUES]
- Je vise un concours/une grande école (HEC, Médecine, ENS...)
- Je veux lancer mon business/projet perso
- Je veux juste arrêter de gâcher mes journées

[USER CLIQUE] "Je vise un concours/une grande école (HEC, Médecine, ENS...)"

[AGENT] [Nouvelle réponse contextuelle du webhook...]
```

---

**Version :** 1.1.1
**Dernière mise à jour :** 25 Décembre 2024
