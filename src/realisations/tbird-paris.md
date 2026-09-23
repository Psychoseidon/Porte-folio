---
title: "T-Bird Paris : une boutique en ligne"
resume: "Le site e-commerce d’une boutique parisienne, construit avec un agent IA de développement : catalogue, paiement, livraison et administration."
date: 2026-08-13
periode: "Depuis août 2026"
statut: "En ligne depuis le 22 septembre 2026"
lien: "https://tbird68.fr"
annee: "Avant le BTS"
cadre: "Personnel"
domaines: ["Développement web", "Hébergement", "Sécurité"]
technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Boxtal", "Vercel", "Git", "Claude Code"]
---

## Contexte

T-Bird Paris est une boutique de vêtements et d’accessoires biker et americana, dans le 6ᵉ arrondissement. Elle n’avait pas de site. J’ai construit sa boutique en ligne avec **un agent IA de développement (Claude Code)**. Après quelques semaines de pré-ouverture protégée par un mot de passe, le site est ouvert au public depuis le 22 septembre 2026, à l’adresse [tbird68.fr](https://tbird68.fr).

<div class="captures captures-ordi">
  <figure><img src="/assets/img/tbird/accueil-ordi.jpg" alt="Page d’accueil de T-Bird Paris sur ordinateur" width="1440" height="900" loading="lazy"><figcaption>Accueil, sur ordinateur</figcaption></figure>
  <figure><img src="/assets/img/tbird/produit-ordi.jpg" alt="Fiche d’un t-shirt sur ordinateur : photos, prix, tailles et boutons d’achat" width="1440" height="900" loading="lazy"><figcaption>Fiche produit, sur ordinateur</figcaption></figure>
</div>

<div class="captures captures-mobile">
  <figure><img src="/assets/img/tbird/accueil-mobile.jpg" alt="Page d’accueil de T-Bird Paris sur téléphone" width="780" height="1688" loading="lazy"><figcaption>Accueil, sur téléphone</figcaption></figure>
  <figure><img src="/assets/img/tbird/produit-mobile.jpg" alt="Fiche d’un t-shirt sur téléphone : prix et tailles dès le premier écran" width="780" height="1688" loading="lazy"><figcaption>Fiche produit, sur téléphone</figcaption></figure>
</div>

## Ce que j’ai fait

- Catalogue produits, stocks par taille, promotions et avis clients
- Tunnel de commande et paiement en ligne sécurisé (Stripe)
- Livraison en point relais ou à domicile, avec étiquettes d’expédition créées automatiquement (Boxtal)
- Comptes clients avec vérification de l’adresse email, et connexion Google
- Emails de confirmation et de suivi de commande
- Une interface d’administration pensée pour des propriétaires peu à l’aise avec le numérique : gros boutons, textes lisibles, confirmation avant toute suppression
- Déploiement sur Vercel, base de données PostgreSQL hébergée (Neon), historique complet sous Git
- Nom de domaine, référencement sur Google (Search Console) et pages légales : mentions légales, CGV, politique de confidentialité
- Ouverture au public après un achat test réel de bout en bout : paiement, étiquette d’expédition, puis remboursement
- Le lendemain de l’ouverture, un audit du site en ligne (sécurité, affichage sur mobile, référencement, obligations légales), puis la correction des points relevés

## Construire avec une IA : qui fait quoi

<div class="comparaison">
  <div>
    <h3>L’agent IA</h3>
    <ul>
      <li>Écrit le code et propose une structure</li>
      <li>Explique ses choix quand je le lui demande</li>
      <li>Corrige ce que je lui signale</li>
      <li>Tient à jour la documentation des pièges connus</li>
      <li>Audite le site en ligne quand je le lui demande</li>
    </ul>
  </div>
  <div>
    <h3>Moi</h3>
    <ul>
      <li>Recueillir le besoin de la boutique et trancher</li>
      <li>Tester chaque fonction dans le navigateur, sur ordinateur et sur mobile</li>
      <li>Relire, refuser, faire recommencer</li>
      <li>Gérer les comptes : hébergement, paiement, base de données, emails</li>
      <li>Décider de ce qu’on corrige, et de ce qui revient à la boutique</li>
    </ul>
  </div>
</div>

Je n’ai pas écrit ce code à la main, et je ne le prétends pas. Mon travail est ailleurs : savoir ce que veut le client, vérifier que ça marche vraiment, et remarquer quand quelque chose cloche.

## Difficultés rencontrées

Trois problèmes réels, repérés puis corrigés :

**Les paiements n’étaient jamais confirmés.** Le mot de passe de pré-ouverture protégeait tout le site, y compris l’adresse que Stripe appelle pour signaler un paiement réussi. Stripe était redirigé vers la page de mot de passe : aucune commande n’était validée. Correction : une liste d’adresses accessibles sans mot de passe, réservée aux services extérieurs. C’est le même raisonnement qu’avec un pare-feu : une règle d’accès bloque aussi ce qu’on n’avait pas prévu.

**Le dernier article pouvait être vendu deux fois.** Deux clients qui validaient au même instant passaient tous les deux la vérification du stock. Correction : le stock est relu sous verrou dans la base de données, le temps de créer la commande.

**Les mises en ligne échouaient sans prévenir.** Une modification de la structure de la base était refusée pendant le déploiement : chaque nouvelle version échouait, et le site restait sur l’ancienne sans alerte visible. Correction : une vérification systématique des changements de base avant chaque envoi.

## Ce que j’en retiens

Une IA écrit vite ; elle ne sait pas ce qui compte pour le client. Vérifier reste mon travail. Et on n’ouvre rien au public sans l’avoir testé.
