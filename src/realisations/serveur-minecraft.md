---
title: "Serveur Minecraft auto-hébergé"
resume: "Un serveur de jeu hébergé à la maison, ouvert à un groupe de joueurs depuis Internet : redirection de ports, pare-feu, gestion des accès."
date: 2020-01-01
periode: "Depuis 2020"
annee: "Avant le BTS"
cadre: "Personnel"
domaines: ["Réseau", "Systèmes"]
technologies: ["Windows", "Pare-feu Windows", "NAT", "DNS"]
---

## Contexte

Héberger un serveur de jeu à la maison pour un groupe de joueurs, le rendre accessible depuis l’extérieur et le garder disponible dans la durée.

## Le chemin d’une connexion

<ol class="schema">
  <li><strong>Joueur</strong><span>sur Internet, se connecte à l’adresse publique de la box</span></li>
  <li><strong>Box</strong><span>redirige le port du jeu (25565 par défaut en édition Java) vers le PC serveur</span></li>
  <li><strong>Pare-feu Windows</strong><span>autorise les connexions entrantes sur ce port</span></li>
  <li><strong>Serveur Minecraft</strong><span>sur une adresse IP locale fixe, vérifie la liste blanche</span></li>
</ol>

Si un seul de ces maillons est mal réglé, personne ne peut se connecter. Diagnostiquer, c’est remonter la chaîne maillon par maillon.

## Ce que j’ai fait

- Installation et configuration du serveur sous Windows
- Gestion des joueurs : liste blanche, rôles et permissions
- Ouverture vers l’extérieur : redirection de ports sur la box, règles du pare-feu Windows
- Adresse IP locale fixe, pour que la redirection pointe toujours vers la bonne machine
- Maintenance du serveur dans la durée

## Ce que j’en retiens

La chaîne complète, de la box au service exposé — et le réflexe de vérifier maillon par maillon quand plus rien ne répond.
