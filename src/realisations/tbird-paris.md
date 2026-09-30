---
title: "T-Bird Paris : une boutique en ligne"
resume: "Le site e-commerce d’une boutique parisienne, construit avec un agent IA de développement : catalogue, paiement, livraison, administration — et son exploitation au quotidien."
date: 2026-08-13
periode: "Depuis août 2026"
statut: "En ligne depuis le 22 septembre 2026, mis à jour en continu"
lien: "https://tbird68.fr"
liens:
  - titre: "Visite guidée en images"
    url: "/realisations/tbird-paris/visite/"
  - titre: "Le site"
    url: "https://tbird68.fr"
  - titre: "La boutique (photos et vidéo)"
    url: "https://tbird68.fr/boutique"
  - titre: "Instagram"
    url: "https://www.instagram.com/t_bird_paris/"
  - titre: "Facebook"
    url: "https://www.facebook.com/tbirdshop"
annee: "Avant le BTS"
cadre: "Personnel"
domaines: ["Développement web", "Hébergement", "Sécurité", "Sauvegarde et supervision"]
technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Boxtal", "Resend", "Vercel", "GitHub Actions", "Sentry", "Git", "Claude Code"]
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

<p><a class="bouton" href="/realisations/tbird-paris/visite/">Voir la visite guidée : le site et l’espace boutique en images →</a></p>

## Ce que j’ai fait

### Jusqu’à l’ouverture

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

### Depuis l’ouverture (22 – 30 septembre 2026)

**Vente et clients**

- Un même article en plusieurs coloris, avec son stock par couleur et par taille
- Codes promo, ventes privées, opérations commerciales programmées depuis l’admin (soldes, Black Friday…) et alertes promo par email
- Apple Pay et Google Pay
- Achat sans compte, avec proposition de créer un compte après l’achat
- « Prévenez-moi » quand un article épuisé revient en stock
- Réserver un article pour le payer et le retirer en boutique, avec un jour de passage à choisir
- Suppression de son compte par le client lui-même

**Boutique et logistique**

- Suivi des colis : la commande passe seule en « Expédiée » quand le transporteur prend le colis, et la boutique est alertée en cas d’incident
- « Vendu en boutique » : retirer du site un article vendu au magasin, pour ne jamais le vendre deux fois
- Annuler une commande rembourse le client automatiquement, avec un motif et un email d’excuses
- Brouillons d’articles enregistrés pendant la saisie, publiés quand la fiche est complète
- Un mode d’emploi de l’espace boutique pour les propriétaires, consultable dans l’admin et imprimable

**Visibilité**

- Articles présents dans les fiches gratuites Google Shopping (flux Merchant Center, une ligne par couleur et par taille)
- Référencement des fiches : fil d’Ariane, données enrichies pour Google, « Vous aimerez aussi », image d’aperçu pour les partages
- Vidéo YouTube de la boutique, chargée seulement au clic : aucun traceur sans accord
- Mesure d’audience sans cookie, donc sans bandeau de consentement
- Redirection des pages de l’ancien site tbird68.com

**Exploitation**

- Sauvegarde de la base de données chaque nuit, chiffrée (AES-256) et gardée 30 jours
- Surveillance du site toutes les heures, avec un email en cas de panne
- Suivi des erreurs en production (Sentry)
- Mises à jour des bibliothèques proposées chaque mois (Dependabot), et vérifications automatiques (tests, TypeScript) avant chaque fusion
- Site plus rapide sur mobile : polices hébergées par le site, photos principales chargées en priorité

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

Cinq problèmes réels, repérés puis corrigés :

**Les paiements n’étaient jamais confirmés.** Le mot de passe de pré-ouverture protégeait tout le site, y compris l’adresse que Stripe appelle pour signaler un paiement réussi. Stripe était redirigé vers la page de mot de passe : aucune commande n’était validée. Correction : une liste d’adresses accessibles sans mot de passe, réservée aux services extérieurs. C’est le même raisonnement qu’avec un pare-feu : une règle d’accès bloque aussi ce qu’on n’avait pas prévu.

**Le dernier article pouvait être vendu deux fois.** Deux clients qui validaient au même instant passaient tous les deux la vérification du stock. Correction : le stock est relu sous verrou dans la base de données, le temps de créer la commande.

**Les mises en ligne échouaient sans prévenir.** Une modification de la structure de la base était refusée pendant le déploiement : chaque nouvelle version échouait, et le site restait sur l’ancienne sans alerte visible. Correction : une vérification systématique des changements de base avant chaque envoi.

**Un seul email refusé coupait toutes les alertes de la boutique.** Le lendemain de l’ouverture, l’alerte d’une réservation n’est jamais arrivée. Un email vers l’adresse de contact avait été refusé une fois : le service d’envoi avait alors mis l’adresse sur sa liste de blocage, et n’y envoyait plus rien, sans aucune erreur visible côté site. Correction : retirer l’adresse de la liste, et désormais vérifier toute nouvelle redirection d’email *avant* de supprimer l’ancienne.

**La sauvegarde de la nuit sautait parfois.** GitHub ne lance pas toujours les tâches planifiées à l’heure. Correction : trois créneaux par jour (le premier qui passe fait la sauvegarde du jour), et la surveillance horaire relance la sauvegarde si la dernière date de plus de 26 heures.

## Ce que j’en retiens

Une IA écrit vite ; elle ne sait pas ce qui compte pour le client. Vérifier reste mon travail. Et on n’ouvre rien au public sans l’avoir testé.

Mettre un site en ligne n’est que le début : il faut ensuite le sauvegarder, le surveiller, le mettre à jour, et savoir où regarder quand quelque chose ne marche plus. C’est exactement le travail d’un technicien systèmes et réseaux.
