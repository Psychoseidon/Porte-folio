---
title: "T-Bird Paris : une boutique en ligne"
resume: "Le site e-commerce d’une boutique parisienne, construit avec un agent IA de développement : catalogue, paiement, livraison et administration."
date: 2026-08-13
periode: "Depuis août 2026"
statut: "Site déployé, en pré-ouverture (protégé par mot de passe)"
annee: "Avant le BTS"
cadre: "Personnel"
domaines: ["Développement web", "Hébergement", "Sécurité"]
technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Vercel", "Git", "Claude Code"]
---

## Contexte

T-Bird Paris est une boutique de vêtements et d’accessoires biker et americana, dans le 6ᵉ arrondissement. Elle n’avait pas de site. Je construis sa boutique en ligne avec **un agent IA de développement (Claude Code)**. Le site est déployé mais pas encore ouvert au public : un mot de passe en protège l’accès pendant la pré-ouverture.

## Ce que j’ai fait

- Catalogue produits, stocks par taille, promotions et avis clients
- Tunnel de commande et paiement en ligne sécurisé (Stripe)
- Livraison en point relais ou à domicile, avec étiquettes d’expédition créées automatiquement (Boxtal)
- Comptes clients avec vérification de l’adresse email, et connexion Google
- Emails de confirmation et de suivi de commande
- Une interface d’administration pensée pour des propriétaires peu à l’aise avec le numérique : gros boutons, textes lisibles, confirmation avant toute suppression
- Déploiement sur Vercel, base de données PostgreSQL hébergée (Neon), historique complet sous Git

## Construire avec une IA : qui fait quoi

<div class="comparaison">
  <div>
    <h3>L’agent IA</h3>
    <ul>
      <li>Écrit le code et propose une structure</li>
      <li>Explique ses choix quand je le lui demande</li>
      <li>Corrige ce que je lui signale</li>
      <li>Tient à jour la documentation des pièges connus</li>
    </ul>
  </div>
  <div>
    <h3>Moi</h3>
    <ul>
      <li>Recueillir le besoin de la boutique et trancher</li>
      <li>Tester chaque fonction dans le navigateur, sur ordinateur et sur mobile</li>
      <li>Relire, refuser, faire recommencer</li>
      <li>Gérer les comptes : hébergement, paiement, base de données, emails</li>
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
