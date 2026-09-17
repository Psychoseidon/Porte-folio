---
title: "Mise en ligne de ce site"
resume: "Un site statique généré avec Eleventy, publié sur GitHub Pages — et une première panne de déploiement."
tags: ["Web", "GitHub", "Hébergement"]
---

## Ce que j’ai fait

J’ai monté ce site avec l’aide de Claude Code, un agent IA de développement, puis je l’ai publié sur GitHub Pages.

- **Pourquoi Eleventy et pas Next.js**, que j’utilise déjà pour T-Bird : ici, tout le contenu est fixe. Un générateur de site statique produit du HTML ordinaire, sans serveur applicatif à maintenir, et je peux modifier chaque page sans connaître React.
- **Un fichier par contenu** : chaque réalisation et chaque entrée de ce journal est un simple fichier Markdown. Le site fabrique les pages, les listes et les filtres tout seul.
- **Publication automatique** : à chaque envoi sur GitHub, une GitHub Action construit le site et le met en ligne.

## Ce qui a coincé

**Le déploiement a échoué avec une erreur 404.** Le site se construisait bien, mais l’étape de mise en ligne répondait « Not Found ». La fin du message donnait la cause : GitHub Pages n’était pas activé sur le dépôt. Il fallait choisir *Settings → Pages → Source : GitHub Actions*, puis relancer la publication.

Les avertissements sur Node 20, juste au-dessus dans le journal d’exécution, n’y étaient pour rien. Leçon : lire le message d’erreur jusqu’au bout avant d’accuser la première ligne rouge.

**Le site vit dans un sous-dossier** (`/Porte-folio/`). Tous les liens doivent en tenir compte. Le générateur réécrit ceux des pages ; le script du terminal, lui, déduit ce préfixe de l’adresse de la feuille de style.

## À retenir

- Une erreur 404 venant d’une API ne veut pas forcément dire « la page n’existe pas » : ici, c’était un service pas encore activé.
- Sous Windows, Git Bash convertit les arguments qui commencent par `/` en chemins Windows. Pour tester le préfixe en local, il a fallu désactiver cette conversion (`MSYS_NO_PATHCONV=1`).
