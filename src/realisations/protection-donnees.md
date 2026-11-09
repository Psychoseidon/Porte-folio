---
title: "Protéger mes données personnelles"
resume: "Chiffrer mes disques, sauvegarder en 3-2-1, garder mes mots de passe dans un coffre et sécuriser mes connexions : mes données, sur mes machines."
date: 2026-11-09
periode: "Ces derniers mois"
annee: "1re année"
cadre: "Personnel"
aide: "Documentation des outils, mes propres choix de réglages, et un agent IA pour la rédaction"
competencesBTS:
  - "Gérer le patrimoine informatique"
domaines: ["Sécurité", "Sauvegarde", "Systèmes"]
technologies: ["Chiffrement de partitions", "Duplicati", "KeePassXC", "Cryptomator", "TOTP", "Google Drive chiffré"]
---

## Contexte

Mes photos, mes documents et mes accès sont sur mes propres machines. Je voulais qu’une panne, un vol ou un compte piraté ne suffisent pas à tout perdre ni à tout exposer.

## Ce que j’ai fait

- Deux partitions chiffrées sur deux disques durs, pour séparer ce qui est sensible du reste
- Une sauvegarde chiffrée chaque semaine avec Duplicati, vers un stockage en ligne
- Une règle 3-2-1 : trois copies, sur deux supports, dont une hors de chez moi
- Un coffre KeePassXC qui contient mes mots de passe et mes clés de déchiffrement, et rien d’autre
- Un dossier chiffré avec Cryptomator pour les fichiers les plus sensibles
- Une double authentification : biométrie sur mon téléphone, codes TOTP sur les comptes importants, plutôt que les SMS
- Aucun mot de passe ni coordonnée bancaire enregistré dans le navigateur

## Difficultés rencontrées

<!-- À compléter avec une difficulté réelle, et ce qui l’a résolue. -->

## Ce que j’en retiens

Une sauvegarde qui n’a jamais été testée n’est pas une sauvegarde. Chiffrer ne sert à rien si la clé de déchiffrement est perdue : elle doit être rangée à part, et sauvegardée elle aussi.
