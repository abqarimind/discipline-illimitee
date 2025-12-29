# Guide Markdown pour l'Agent Conversationnel

## 🎨 Support Markdown activé

Le chat supporte maintenant le **Markdown complet** pour formater les réponses de l'agent.

## 📝 Syntaxe supportée

### 1. Texte en gras et italique

```markdown
**Texte en gras**
*Texte en italique*
***Texte en gras et italique***
```

**Rendu :**
- **Texte en gras**
- *Texte en italique*
- ***Texte en gras et italique***

---

### 2. Titres

```markdown
# Titre niveau 1
## Titre niveau 2
### Titre niveau 3
#### Titre niveau 4
```

**Note :** Les titres utilisent la police Bebas Neue (comme le reste du site)

---

### 3. Listes

#### Listes à puces
```markdown
- Premier point
- Deuxième point
- Troisième point
```

**Rendu :**
- Premier point
- Deuxième point
- Troisième point

#### Listes numérotées
```markdown
1. Première étape
2. Deuxième étape
3. Troisième étape
```

**Rendu :**
1. Première étape
2. Deuxième étape
3. Troisième étape

---

### 4. Sauts de ligne et paragraphes

```markdown
Premier paragraphe.

Deuxième paragraphe (ligne vide entre les deux).
```

**Important :** Utilisez une **ligne vide** entre les paragraphes pour les séparer clairement.

---

### 5. Code

#### Code inline
```markdown
Tu peux utiliser `console.log()` pour débugger.
```

**Rendu :** Tu peux utiliser `console.log()` pour débugger.

#### Bloc de code
````markdown
```javascript
function exemple() {
  return "Hello World";
}
```
````

---

### 6. Citations

```markdown
> Ceci est une citation importante.
> Elle peut s'étendre sur plusieurs lignes.
```

**Rendu :**
> Ceci est une citation importante.
> Elle peut s'étendre sur plusieurs lignes.

---

### 7. Liens

```markdown
[Texte du lien](https://example.com)
```

**Rendu :** [Texte du lien](https://example.com)

---

## 💡 Exemples de réponses

### Exemple 1 : Réponse simple avec emphase

```markdown
Classique. Ton **circuit de la récompense** est déréglé. Tu cherches le plaisir immédiat — ton cerveau reptilien te sabote.

On doit te reprogrammer. Pas avec de la motivation (ça ne dure pas), mais avec un **système** qui rend l'action automatique.

Le Protocole Discipline™ est fait pour ça. C'est le manuel que personne ne t'a donné.
```

---

### Exemple 2 : Réponse avec liste

```markdown
On a bien identifié le bug : **le fossé entre l'intention et l'action**. C'est la mort de l'ambition à petit feu.

Pour qu'on sorte de là, j'ai besoin de comprendre l'enjeu :

- **C'est quoi l'objectif concret ?** (Tu vises quelle école, quel concours, ou quel projet pro ?)
- **Ça fait combien de temps** que tu es bloqué dans ce cycle ?
- **Qu'est-ce qui se passe** si dans 6 mois, rien n'a changé ?

Dis-moi tout, on va voir si tu as vraiment la dalle ou si tu es juste en train de regarder le train passer.
```

---

### Exemple 3 : Réponse structurée avec titre

```markdown
## Le problème principal

Tu es un hamster dans une roue. Tu cours, mais tu n'avances pas.

C'est un problème de **stratégie**, pas d'effort. Tu ne connais pas les vraies attentes. Tu travailles en mode aveugle.

### La solution

On va t'apprendre le **"Reverse Engineering"** — partir de la fin pour optimiser chaque action.

Le Protocole Discipline™ te donne la carte.
```

---

### Exemple 4 : Réponse avec étapes numérotées

```markdown
Voici les 3 étapes pour débloquer ta situation :

1. **Identifier le vrai problème** — pas les symptômes, la cause racine
2. **Mettre en place un système** — pas de willpower, de l'automatisation
3. **Mesurer et ajuster** — tracking quotidien, optimisation continue

C'est pas compliqué. Mais c'est précis. Tu es prêt à suivre le protocole ?
```

---

## 🚀 Recommandations pour l'agent N8N

### ✅ À faire

- Utiliser **le gras** pour les mots-clés importants
- Séparer les paragraphes avec des lignes vides
- Utiliser des listes pour structurer l'information
- Garder un ton direct et percutant (style Pierre)
- Ajouter des questions engageantes en fin de réponse

### ❌ À éviter

- Ne **PAS** utiliser de HTML (`<br>`, `<strong>`, etc.) - utiliser Markdown
- Éviter les titres H1 (`#`) - réserver pour les cas exceptionnels
- Ne pas surcharger de formatting - rester lisible
- Éviter les blocs de code trop longs dans le chat

---

## 🎯 Format de réponse N8N recommandé

### Réponse simple
```json
{
  "output": {
    "output": "Ton **circuit de la récompense** est déréglé.\n\nOn doit te reprogrammer avec un **système** qui rend l'action automatique.",
    "suggestions": [
      "Je vise un concours/une grande école",
      "Je veux lancer mon business",
      "Je veux juste arrêter de procrastiner"
    ]
  }
}
```

### Réponse avec liste
```json
{
  "output": {
    "output": "Pour qu'on sorte de là, j'ai besoin de comprendre :\n\n- **C'est quoi l'objectif concret ?**\n- **Ça fait combien de temps** que tu es bloqué ?\n- **Qu'est-ce qui se passe** si rien ne change ?",
    "suggestions": [
      "Je vise HEC/Médecine/ENS",
      "Je veux créer mon entreprise",
      "Je veux juste être constant"
    ]
  }
}
```

---

## 🔍 Aperçu visuel

### Message agent (fond gris)
Le Markdown sera rendu avec :
- Texte normal : gris foncé
- **Texte en gras** : noir, police semi-bold
- Titres : Bebas Neue, noir
- Listes : avec puces grises
- Code : fond gris clair

### Message utilisateur (fond noir)
Le Markdown sera rendu avec :
- Texte normal : blanc
- **Texte en gras** : blanc, police semi-bold
- Titres : Bebas Neue, blanc
- Listes : avec puces blanches

---

## 📚 Ressources

- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- `remark-gfm` : Plugin activé pour les tableaux, listes de tâches, etc.

---

**Version :** 1.1.3
**Date :** 25 Décembre 2024
