# Commandes Git & GitHub - Aide-mémoire

## 🚀 Déploiement initial (À FAIRE UNE SEULE FOIS)

### 1. Créer le repository sur GitHub

1. Aller sur https://github.com/new
2. Nom du repository: `discipline-illimitee`
3. Visibilité: **Private** (recommandé)
4. **NE PAS** cocher "Add README", "Add .gitignore", ou "Choose a license"
5. Cliquer sur "Create repository"

### 2. Connecter et pousser le code

Copier l'URL de votre repository (affichée après création), puis dans le terminal:

```bash
# Se placer dans le dossier du projet
cd discipline-illimitee

# Ajouter le repository GitHub comme remote
git remote add origin https://github.com/VOTRE_USERNAME/discipline-illimitee.git

# Vérifier
git remote -v

# Pousser le code sur GitHub
git push -u origin master
```

**Si vous avez une erreur d'authentification**, créer un Personal Access Token:
- Aller sur https://github.com/settings/tokens
- "Generate new token (classic)"
- Cocher "repo"
- Copier le token
- L'utiliser comme mot de passe lors du push

## 📝 Workflow quotidien (modifications futures)

### Scénario 1: Modifier du code et le déployer

```bash
# 1. Faire vos modifications dans le code
# ...

# 2. Voir ce qui a changé
git status

# 3. Voir les différences détaillées
git diff

# 4. Ajouter tous les fichiers modifiés
git add .

# OU ajouter un fichier spécifique
git add chemin/vers/fichier.tsx

# 5. Créer un commit avec un message descriptif
git commit -m "Description de vos changements"

# 6. Pousser sur GitHub (déploiement auto sur Netlify)
git push
```

### Scénario 2: Ajouter une nouvelle image média

```bash
# 1. Copier l'image dans public/images/media/
# Par exemple: le-parisien.jpg

# 2. Ajouter l'image au Git
git add public/images/media/le-parisien.jpg

# 3. Commit
git commit -m "Add Le Parisien media image"

# 4. Push
git push
```

### Scénario 3: Mettre à jour le contenu du chat

```bash
# 1. Modifier components/ChatModal.tsx
# ...

# 2. Ajouter et commit
git add components/ChatModal.tsx
git commit -m "Update chat modal: ajout nouvelle fonctionnalité"

# 3. Push
git push
```

## 📜 Commandes Git utiles

### Voir l'historique des commits
```bash
git log
# ou version condensée
git log --oneline
```

### Annuler des modifications (avant commit)
```bash
# Annuler les modifications d'un fichier
git checkout -- chemin/vers/fichier.tsx

# Annuler toutes les modifications
git checkout -- .
```

### Annuler le dernier commit (garder les modifications)
```bash
git reset --soft HEAD~1
```

### Voir les différences entre deux commits
```bash
git diff commit1 commit2
```

### Créer une branche
```bash
# Créer et basculer sur une nouvelle branche
git checkout -b nom-de-branche

# Lister les branches
git branch

# Revenir à master
git checkout master

# Merger une branche dans master
git merge nom-de-branche
```

## 🌐 Commandes GitHub spécifiques

### Cloner le repository sur un autre ordinateur
```bash
git clone https://github.com/VOTRE_USERNAME/discipline-illimitee.git
cd discipline-illimitee
npm install
```

### Récupérer les dernières modifications (si travail en équipe)
```bash
git pull
```

### Voir les remotes configurés
```bash
git remote -v
```

### Changer l'URL du remote
```bash
git remote set-url origin https://github.com/NOUVEAU_USERNAME/discipline-illimitee.git
```

## 🔄 Workflow complet avec Netlify

```
1. Modifications locales
   ↓
2. git add .
   ↓
3. git commit -m "Message"
   ↓
4. git push
   ↓
5. GitHub reçoit le code
   ↓
6. Netlify détecte le push
   ↓
7. Netlify build automatique
   ↓
8. Site mis à jour (2-5 min)
```

## 💡 Bonnes pratiques

### Messages de commit

**❌ Mauvais:**
```bash
git commit -m "fix"
git commit -m "update"
git commit -m "modif"
```

**✅ Bons:**
```bash
git commit -m "Fix chat modal not closing on mobile"
git commit -m "Add media section with 5 images"
git commit -m "Update webhook URL to production"
git commit -m "Improve Markdown rendering in chat"
```

### Fréquence des commits

- Commiter souvent (chaque fonctionnalité terminée)
- Un commit = une fonctionnalité ou un fix
- Ne pas accumuler trop de changements dans un seul commit

### Branches

Pour des grosses fonctionnalités:
```bash
# Créer une branche
git checkout -b feature/nouvelle-section

# Travailler sur la branche
git add .
git commit -m "Add new section"

# Revenir sur master et merger
git checkout master
git merge feature/nouvelle-section

# Push
git push
```

## 🐛 Résolution de problèmes courants

### "Permission denied (publickey)"
→ Utiliser HTTPS au lieu de SSH, ou configurer une clé SSH

### "Updates were rejected because the remote contains work..."
```bash
git pull --rebase
git push
```

### "fatal: not a git repository"
→ Vous n'êtes pas dans le bon dossier:
```bash
cd discipline-illimitee
```

### Conflit de merge
```bash
# Voir les fichiers en conflit
git status

# Éditer les fichiers, résoudre les conflits manuellement
# Puis:
git add .
git commit -m "Resolve merge conflict"
```

## 📋 Checklist avant chaque push

- [ ] Le code fonctionne en local (`npm run dev`)
- [ ] Pas d'erreurs dans la console
- [ ] Les tests passent (si vous en avez)
- [ ] Message de commit descriptif
- [ ] Pas de fichiers sensibles (`.env`, clés API, etc.)

## 🔗 Liens utiles

- **Documentation Git:** https://git-scm.com/doc
- **GitHub Docs:** https://docs.github.com
- **Netlify Docs:** https://docs.netlify.com

---

**Aide-mémoire créé le:** 25 Décembre 2024
