# Changelog - Discipline Illimitée

## [1.1.3] - 25 Décembre 2024

### Ajouté
- ✨ **Support Markdown dans le chat**
  - Rendu Markdown complet avec `react-markdown` et `remark-gfm`
  - Support du texte en gras (**texte**), italique, listes, code, etc.
  - Plugin `@tailwindcss/typography` pour un style professionnel
  - Styles personnalisés pour une meilleure lisibilité
  - Titres avec police Bebas Neue
  - Espacement optimisé entre paragraphes
  - Support des citations (blockquote), code inline et blocs de code

### Modifié
- Message initial converti de HTML (`<br>`) à Markdown (sauts de ligne simples)
- Les messages de l'agent peuvent maintenant utiliser du Markdown riche

### Technique
- `react-markdown` + `remark-gfm` pour le rendu
- Classes Tailwind `prose` pour le styling
- Styles CSS personnalisés pour le chat dans `globals.css`
- Suppression de `dangerouslySetInnerHTML` (plus sécurisé)

---

## [1.1.2] - 25 Décembre 2024

### Modifié
- ✨ **Suppression des réponses hardcodées**
  - Les options initiales (Discipline, Méthode, Orientation) appellent maintenant directement le webhook
  - Toutes les réponses proviennent exclusivement de l'agent N8N
  - Plus de switch/case avec réponses statiques
  - Comportement uniforme pour toutes les interactions utilisateur

- ✨ **Amélioration UX des suggestions**
  - Les suggestions remplissent maintenant le champ de message au lieu d'être envoyées directement
  - L'utilisateur peut modifier la suggestion avant de l'envoyer
  - Ou l'envoyer directement en cliquant sur "Envoyer" ou en appuyant sur Entrée
  - Meilleur contrôle utilisateur et flexibilité

- 🔧 **URL Webhook production**
  - Changement de l'URL: `webhook-test/` → `webhook/`
  - Nouvelle URL: `https://n8n.srv860867.hstgr.cloud/webhook/pierre-qualif-agent`

### Technique
- `handleSelectOption()` simplifié : appelle directement `sendToWebhook(label)`
- Les 3 options initiales envoient leur label au webhook comme les autres messages
- `handleSelectSuggestion()` simplifié : `setInputValue(suggestion)` au lieu d'envoyer directement
- Permet à l'agent N8N de contrôler 100% des réponses et leur contexte

---

## [1.1.1] - 25 Décembre 2024

### Ajouté
- ✨ **Gestion de session pour le chat agent**
  - Génération automatique d'un ID de session unique au chargement du chat
  - Format: `session_${timestamp}_${random}`
  - Transmission du sessionId dans chaque requête webhook
  - Permet à l'agent N8N de maintenir le contexte de la conversation

- ✨ **Support des suggestions dynamiques de l'agent**
  - Interface Message étendue avec champ `suggestions?: string[]`
  - Affichage automatique des suggestions après chaque réponse de l'agent
  - Boutons cliquables pour sélectionner une suggestion
  - Style cohérent avec les options initiales
  - Nouveau handler `handleSelectSuggestion()` pour gérer les clics

### Modifié
- `components/ChatModal.tsx`:
  - Ajout de la génération et transmission du sessionId
  - Ajout du support des suggestions dynamiques
  - Nouveau handler pour les suggestions
  - Interface Message étendue
- `app/api/chat/route.ts`:
  - Mise à jour pour recevoir et transférer le sessionId au webhook
  - Extraction intelligente de la réponse N8N (format: `[{ output: { output: "...", suggestions: [...] } }]`)
  - Support de multiples formats de réponse webhook
  - Retourne `response` et `suggestions` au frontend

### Technique
- Le sessionId est créé une seule fois au montage du composant ChatModal
- Chaque message envoyé inclut maintenant: `{ message, sessionId, timestamp, source }`
- L'agent côté N8N peut maintenant suivre les conversations par sessionId
- Format de réponse N8N supporté:
  ```json
  [
    {
      "output": {
        "output": "Texte de la réponse...",
        "suggestions": ["Option 1", "Option 2", "Option 3"]
      }
    }
  ]
  ```
- Les suggestions s'affichent sous chaque message de l'agent qui en contient

---

## [1.1.0] - 25 Décembre 2024

### Ajouté
- ✨ **Nouvelle section "Apparitions Médias"**
  - 13 apparitions médias référencées
  - Affichage initial de 5 éléments
  - Bouton "Voir plus" pour afficher les 13
  - Bouton "Voir moins" pour replier
  - Design cohérent avec le reste du site
  - Liens externes vers chaque média
  - Placeholders pour les images (à remplacer)

### Médias inclus
1. Sud Radio - Interview
2. Le Guide de l'Étudiant Ambitieux - Livre Amazon
3. Sqool TV - Émission Parcoursup
4. Le Figaro Étudiant - Article
5. Le Parisien Étudiant - Article
6. Fondation Vocation - Vidéo témoignage
7. France 3 - Reportage
8. Meet My Mentor - Profil
9. Ma Bourse - Témoignage
10. Le Parisien - Article Parcoursup
11. 20 Minutes TV - Interview
12. Europe 1 - Interview radio
13. Closer Magazine - Article magazine

### Fichiers créés
- `components/MediaSection.tsx` - Composant principal
- `public/images/media/` - Dossier pour les images
- `public/images/media/README.md` - Instructions images
- `AJOUT_IMAGES_MEDIAS.md` - Guide complet ajout images
- `CHANGELOG.md` - Ce fichier

### Fichiers modifiés
- `app/page.tsx` - Ajout du composant MediaSection entre Authority et FAQ

### Position
- **Avant :** Authority Section → FAQ Section
- **Maintenant :** Authority Section → **Media Section** → FAQ Section

### Documentation
- Guide complet dans `AJOUT_IMAGES_MEDIAS.md`
- Instructions techniques dans `public/images/media/README.md`

---

## [1.0.0] - 25 Décembre 2024

### Initial Release

#### Features
- ✅ Landing page complète (10 sections)
- ✅ Agent conversationnel avec webhook N8N
- ✅ Design responsive
- ✅ Animations au scroll
- ✅ FAQ interactive
- ✅ Tailwind CSS v4
- ✅ TypeScript
- ✅ Next.js 16

#### Sections
1. Hero Section
2. Problem Section
3. Truth Section
4. Solution Section (3 piliers)
5. Transformation Section
6. Authority Section (Biographie Pierre)
7. FAQ Section
8. Final CTA Section
9. Footer

#### Composants
- `HeroSection.tsx`
- `ProblemSection.tsx`
- `TruthSection.tsx`
- `SolutionSection.tsx`
- `TransformationSection.tsx`
- `AuthoritySection.tsx`
- `FAQSection.tsx`
- `FinalCTASection.tsx`
- `Footer.tsx`
- `ChatModal.tsx` (Agent conversationnel)

#### Configuration
- Next.js 16.1.1
- React 19.2.3
- TypeScript 5.9.3
- Tailwind CSS 4.1.18
- @tailwindcss/postcss 4.1.18

#### Webhook
- URL: https://n8n.srv860867.hstgr.cloud/webhook-test/pierre-qualif-agent
- API Route: `/api/chat`
- Format: JSON avec message et timestamp

#### Documentation
- README.md
- QUICK_START.md
- WEBHOOK_INTEGRATION.md
- DEPLOIEMENT.md
- MIGRATION_HTML_TO_NEXTJS.md
- PROJECT_SUMMARY.md
- TAILWIND_V4_CONFIG.md
- CORRECTIONS.md
- TROUBLESHOOTING.md
- SOLUTION_FINALE.md
- STATUS.md
- FINAL_SUMMARY.md

#### Corrections appliquées
- ✅ Configuration Tailwind CSS v4
- ✅ Résolution erreur "Parsing CSS source code failed"
- ✅ Fonts chargées dans HTML au lieu du CSS
- ✅ Cache Next.js nettoyé

#### Statut
- 🟢 Production Ready
- 🟢 Serveur: http://localhost:3004
- 🟢 Build: Successful
- 🟢 TypeScript: No errors
- 🟢 Tests: Passed

---

## À venir

### v1.2.0 (Planifié)
- [ ] Intégration Google Analytics
- [ ] Optimisation SEO avancée
- [ ] Système de blog
- [ ] Dashboard admin
- [ ] A/B Testing

### v1.3.0 (Planifié)
- [ ] Multi-langue (FR/EN)
- [ ] Mode sombre
- [ ] PWA (Progressive Web App)
- [ ] Notifications push

---

## Notes de version

### v1.1.0
Cette version ajoute une section majeure qui met en valeur les apparitions médias de Pierre Amougou. La section est entièrement responsive et interactive, avec un système de pagination élégant.

**Important :** Les images des médias doivent être ajoutées manuellement. Consulter `AJOUT_IMAGES_MEDIAS.md` pour les instructions détaillées.

### v1.0.0
Version initiale du projet. Transformation complète de la page HTML statique en application Next.js moderne avec agent conversationnel intégré via webhook N8N.

---

**Dernière mise à jour :** 25 Décembre 2024
