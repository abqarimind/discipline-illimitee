# Configuration Tailwind CSS v4

## Changements importants

Ce projet utilise **Tailwind CSS v4**, qui a une nouvelle architecture de configuration.

## Différences avec Tailwind v3

### Avant (v3)
```javascript
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ... }
    }
  }
}
```

### Après (v4)
```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-black: #0a0a0a;
  --color-white: #fafafa;
  /* ... */
}
```

## Configuration actuelle

### PostCSS (`postcss.config.js`)
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

**Important :** Tailwind v4 nécessite `@tailwindcss/postcss` au lieu de `tailwindcss` directement.

### Fichier CSS principal (`app/globals.css`)

```css
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&display=swap');

@theme {
  --color-black: #0a0a0a;
  --color-white: #fafafa;
  --color-gray-100: #f5f5f5;
  --color-gray-200: #e5e5e5;
  --color-gray-400: #a3a3a3;
  --color-gray-600: #525252;
  --color-gray-800: #262626;

  --font-bebas: "Bebas Neue", sans-serif;
  --font-sans: "DM Sans", sans-serif;
}

:root {
  --black: #0a0a0a;
  --white: #fafafa;
  /* Variables CSS classiques pour compatibilité */
}
```

## Utilisation dans les composants

Les classes Tailwind fonctionnent exactement comme avant :

```tsx
<div className="bg-black text-white p-6">
  <h1 className="font-bebas text-4xl">Titre</h1>
  <p className="text-gray-400">Texte</p>
</div>
```

## Personnalisation des couleurs

### Dans @theme
```css
@theme {
  --color-primary: #0a0a0a;
}
```

### Utilisation
```tsx
className="bg-primary text-white"
```

## Migration depuis v3

Si vous avez un projet Tailwind v3, voici les étapes :

1. **Installer les nouvelles dépendances**
```bash
npm install @tailwindcss/postcss tailwindcss@latest
```

2. **Mettre à jour postcss.config.js**
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

3. **Supprimer l'ancien tailwind.config.js/ts**
```bash
rm tailwind.config.js
```

4. **Mettre à jour globals.css**
```css
/* Avant */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Après */
@import "tailwindcss";
```

5. **Déplacer la configuration dans @theme**
```css
@theme {
  --color-*: valeur;
  --font-*: valeur;
  --spacing-*: valeur;
}
```

## Avantages de Tailwind v4

1. **Performance améliorée** - Build plus rapide
2. **Configuration CSS native** - Plus besoin de JavaScript
3. **Variables CSS** - Meilleure intégration
4. **Meilleure DX** - Auto-completion améliorée
5. **Taille réduite** - Bundle plus petit

## Compatibilité

- ✅ Next.js 14+
- ✅ Next.js 15+
- ✅ Next.js 16+ (utilisé dans ce projet)
- ✅ Turbopack
- ✅ App Router

## Dépendances

```json
{
  "@tailwindcss/postcss": "^4.1.18",
  "tailwindcss": "^4.1.18",
  "postcss": "^8.5.6"
}
```

## Résolution de problèmes

### Erreur : "tailwindcss directly as a PostCSS plugin"

**Solution :** Installer `@tailwindcss/postcss` et mettre à jour `postcss.config.js`

```bash
npm install @tailwindcss/postcss
```

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

### Classes Tailwind ne fonctionnent pas

**Vérifier :**
1. `@import "tailwindcss";` est présent dans globals.css
2. globals.css est importé dans layout.tsx
3. Le serveur de dev est redémarré

### Autocomplete ne fonctionne pas

**VS Code :** Installer l'extension "Tailwind CSS IntelliSense"

```json
// .vscode/settings.json
{
  "tailwindCSS.experimental.configFile": "app/globals.css"
}
```

## Ressources

- [Documentation Tailwind CSS v4](https://tailwindcss.com/docs)
- [Guide de migration v3 → v4](https://tailwindcss.com/docs/upgrade-guide)
- [@tailwindcss/postcss](https://github.com/tailwindlabs/tailwindcss/tree/next/packages/%40tailwindcss-postcss)

## Notes importantes

1. **Pas de fichier tailwind.config.js** - La configuration se fait dans CSS
2. **Nouveau plugin PostCSS** - Utiliser `@tailwindcss/postcss`
3. **@theme directive** - Pour personnaliser les tokens
4. **Variables CSS** - Meilleure intégration avec les variables CSS natives

---

**Version actuelle :** Tailwind CSS 4.1.18
**Dernière mise à jour :** Décembre 2024
