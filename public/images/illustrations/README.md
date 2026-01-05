# 🎨 Guide d'intégration des illustrations

## 📁 Structure des fichiers

Placez vos 8 illustrations générées dans ce dossier avec les noms suivants :

### Section 1 : "À QUI S'ADRESSE CETTE FORMATION" (Fond noir - lignes blanches)

1. **procrastination.png**
   - Concept : Personne devant ordinateur qui procrastine, horloge visible
   - Texte associé : "tu sais quoi faire, mais tu repousses"

2. **scattered.png**
   - Concept : Flèches qui partent dans tous les sens depuis un point central
   - Texte associé : "tu démarres fort puis tu t'éparpilles"

3. **durable.png**
   - Concept : Allumette (éphémère) vs Arbre avec racines (durable)
   - Texte associé : "tu veux une discipline durable, pas des coups de motivation"

4. **internal-conflict.png**
   - Concept : Silhouette avec conflit interne (mains qui tirent en sens opposés)
   - Texte associé : "tu veux arrêter de lutter contre toi-même"

---

### Section 2 : "APRÈS DISCIPLINE ILLIMITÉE™" (Fond blanc - lignes noires)

5. **clarity.png**
   - Concept : Planning/checklist organisé avec coches
   - Texte associé : "Tu sais exactement quoi faire chaque jour"

6. **progress.png**
   - Concept : Empreintes de pas qui montent progressivement
   - Texte associé : "Tu avances même quand tu n'as pas envie"

7. **foundation.png**
   - Concept : Blocs qui s'empilent pour former une structure solide
   - Texte associé : "Tu construis une discipline solide et durable"

8. **control.png**
   - Concept : Mains tenant une boussole (contrôle et direction)
   - Texte associé : "Tu reprends le contrôle de ton temps et de ton énergie"

---

## 📐 Spécifications techniques

### Format
- **Extension** : PNG (avec transparence) ou SVG
- **Dimensions** : 512x512px minimum (carré 1:1)
- **Poids** : < 100 KB par image

### Style
- **Section 1 (fond noir)** : Lignes **BLANCHES** sur fond transparent
- **Section 2 (fond blanc)** : Lignes **NOIRES** sur fond transparent
- **Épaisseur des traits** : 2-3px
- **Style** : Line art minimaliste, continu, épuré

---

## 🎭 Traitement automatique

Le code applique automatiquement :

### Section 1 (À qui s'adresse)
```css
filter: invert;
```
Pour inverser les couleurs sur fond noir

### Section 2 (Après)
Pas de filtre, couleurs normales

---

## ✨ Animations intégrées

Chaque illustration a :
- **Entrée** : Fade-in + slide-up avec stagger
- **Hover** : Scale 1.1 + rotation (5° pour section 1, -5° pour section 2)
- **Transition** : 300ms smooth

---

## 🚀 Après avoir ajouté les images

1. Placez les 8 fichiers PNG dans ce dossier
2. Vérifiez les noms de fichiers (sensible à la casse)
3. Redémarrez le serveur Next.js : `npm run dev`
4. Les images s'afficheront automatiquement

---

## 🔧 Résolution de problèmes

### Les images ne s'affichent pas ?
1. Vérifiez les noms de fichiers (pas de majuscules)
2. Vérifiez l'extension (.png, pas .PNG)
3. Vérifiez que les fichiers sont bien dans `/public/images/illustrations/`
4. Videz le cache : Ctrl+Shift+R dans le navigateur

### Les couleurs ne sont pas bonnes ?
- Section 1 : Générez avec lignes BLANCHES (le filtre `invert` les rendra visibles sur noir)
- Section 2 : Générez avec lignes NOIRES

---

## 📝 Checklist finale

- [ ] 8 fichiers PNG générés
- [ ] Noms de fichiers corrects (minuscules, avec tirets)
- [ ] Dimensions 512x512px minimum
- [ ] Section 1 : lignes blanches sur transparent
- [ ] Section 2 : lignes noires sur transparent
- [ ] Poids < 100 KB par image
- [ ] Fichiers placés dans `/public/images/illustrations/`
- [ ] Serveur redémarré
- [ ] Site testé en local

---

Fait avec ❤️ pour Discipline Illimitée™
