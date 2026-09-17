# Portfolio — Matthias Cozic

Site personnel et recueil des réalisations du BTS SIO (option SISR).
Généré avec [Eleventy](https://www.11ty.dev/) : le résultat est du HTML, du CSS et du
JavaScript ordinaires, hébergeables n'importe où.

## Lancer le site sur son ordinateur

```bash
npm install      # une seule fois
npm run dev      # puis ouvrir http://localhost:8090
```

Le site se recharge tout seul à chaque modification.
`npm run build` fabrique la version finale dans `_site/`.

## Où bidouiller

| Je veux changer… | Fichier |
|---|---|
| Mes infos (email, LinkedIn, GitHub, CV, alternance) | `src/_data/site.json` |
| Mes compétences, langues, centres d'intérêt | `src/_data/competences.json` |
| Ma formation et mon expérience | `src/_data/parcours.json` |
| Les couleurs, les polices, l'ambiance | `src/assets/style.css` (variables en tête) |
| Les animations, le terminal, les filtres | `src/assets/site.js` (un bloc par fonction) |
| L'en-tête, le menu, le pied de page | `src/_includes/base.njk` |
| La mise en page d'une réalisation | `src/_includes/realisation.njk` |
| Le texte de l'accueil | `src/index.njk` |

**Ajouter une commande au terminal** (Ctrl+K) : bloc 7 de `site.js`, objet `commandes`.
Une entrée = une commande, avec son texte d'aide.

**Le téléphone est vide exprès** dans `site.json` : le site est public, et un numéro
publié en ligne attire le démarchage. Il reste sur le CV envoyé aux entreprises.

## Ajouter une réalisation

1. Copier `MODELE-realisation.md` dans `src/realisations/`.
2. Le renommer : minuscules, tirets, sans accent (`labo-active-directory.md`).
3. Remplir l'en-tête et le texte.
4. Les captures vont dans `src/assets/img/`.

La page, la carte dans la liste, les filtres et la commande `ls realisations` du terminal
se mettent à jour tout seuls.

Bonne habitude : créer le fichier **le jour même** du TP, même brouillon.

## Publier sur GitHub Pages (gratuit)

1. Créer un dépôt sur GitHub (par exemple `portfolio`, ou `ton-pseudo.github.io` pour
   avoir le site à la racine).
2. Y envoyer ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Premier envoi du portfolio"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/NOM-DU-DEPOT.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Source : GitHub Actions**.
4. Chaque `git push` republie le site en une minute environ
   (`.github/workflows/publier.yml`). Adresse : `https://TON-PSEUDO.github.io/NOM-DU-DEPOT/`.

Les liens s'adaptent seuls au sous-dossier : ne pas les modifier à la main.

## L'héberger soi-même (variante SISR)

`npm run build`, puis copier le contenu de `_site/` à la racine d'un serveur web
(nginx, Apache). Aucun PHP, aucune base de données : c'est le plus simple à sécuriser.
Ajouter un nom de domaine et un certificat HTTPS (Let's Encrypt), et ça devient une
réalisation à part entière.
