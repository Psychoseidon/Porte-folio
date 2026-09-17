/* ==========================================================================
   Portfolio — script unique, en blocs indépendants.
   Chaque bloc peut être supprimé sans casser les autres.
   ========================================================================== */

document.documentElement.classList.add("js");

const reduireAnimations = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Adresse de base du site : « / » en local, « /nom-du-depot/ » sur GitHub Pages.
// Déduite du lien vers la feuille de style, que le générateur a déjà corrigé.
const BASE = (() => {
  const href = document.querySelector('link[rel="stylesheet"]')?.getAttribute("href") || "/assets/style.css";
  return href.replace(/assets\/style\.css.*$/, "");
})();
const lien = (chemin) => BASE + chemin.replace(/^\//, "");

/* ------------------------------------------------------ 1. Menu mobile */
{
  const bouton = document.querySelector(".menu-bouton");
  const menu = document.getElementById("menu");
  bouton?.addEventListener("click", () => {
    const ouvert = bouton.getAttribute("aria-expanded") === "true";
    bouton.setAttribute("aria-expanded", String(!ouvert));
    menu.classList.toggle("ouvert", !ouvert);
  });
}

/* ------------------------------------ 2. Terminal de l'accueil (écriture) */
{
  const terminal = document.querySelector("[data-terminal-accueil]");
  if (terminal && !reduireAnimations) {
    const lignes = [...terminal.querySelectorAll(".terminal-corps p")];
    const attente = (ms) => new Promise((r) => setTimeout(r, ms));

    terminal.classList.add("en-ecriture");
    lignes.forEach((l) => l.classList.add("a-taper"));

    (async () => {
      await attente(400);
      for (const ligne of lignes) {
        const cmd = ligne.querySelector(".cmd");
        if (cmd) {
          // Une commande : on la tape lettre par lettre.
          const texte = cmd.textContent;
          cmd.textContent = "";
          ligne.classList.remove("a-taper");
          for (const lettre of texte) {
            cmd.textContent += lettre;
            await attente(28 + Math.random() * 45);
          }
          await attente(220);
        } else {
          // Une réponse : elle s'affiche d'un coup, comme dans un vrai terminal.
          ligne.classList.remove("a-taper");
          await attente(ligne.classList.contains("ligne-attente") ? 0 : 260);
        }
      }
      terminal.classList.remove("en-ecriture");
    })();
  }
}

/* ------------------------------------------ 3. Réseau animé de l'accueil */
{
  const canvas = document.querySelector("canvas.reseau");
  if (canvas && !reduireAnimations) {
    const ctx = canvas.getContext("2d");
    const COULEUR = "63, 208, 184";
    const DISTANCE = 150;
    let noeuds = [];
    let paquets = [];
    let largeur = 0;
    let hauteur = 0;
    let visible = true;

    const redimensionner = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      largeur = canvas.clientWidth;
      hauteur = canvas.clientHeight;
      canvas.width = largeur * ratio;
      canvas.height = hauteur * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const nombre = Math.round(Math.min(70, (largeur * hauteur) / 16000));
      noeuds = Array.from({ length: nombre }, () => ({
        x: Math.random() * largeur,
        y: Math.random() * hauteur,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.2 + Math.random() * 1.6,
      }));
      paquets = [];
    };

    const voisins = () => {
      const liens = [];
      for (let i = 0; i < noeuds.length; i++) {
        for (let j = i + 1; j < noeuds.length; j++) {
          const d = Math.hypot(noeuds[i].x - noeuds[j].x, noeuds[i].y - noeuds[j].y);
          if (d < DISTANCE) liens.push([noeuds[i], noeuds[j], d]);
        }
      }
      return liens;
    };

    const image = () => {
      if (visible) {
        ctx.clearRect(0, 0, largeur, hauteur);
        for (const n of noeuds) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > largeur) n.vx *= -1;
          if (n.y < 0 || n.y > hauteur) n.vy *= -1;
        }
        const liens = voisins();
        for (const [a, b, d] of liens) {
          ctx.strokeStyle = `rgba(${COULEUR}, ${0.22 * (1 - d / DISTANCE)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        for (const n of noeuds) {
          ctx.fillStyle = `rgba(${COULEUR}, 0.75)`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
        }
        // De temps en temps, un paquet part d'un nœud vers un voisin.
        if (liens.length && paquets.length < 6 && Math.random() < 0.04) {
          const [a, b] = liens[Math.floor(Math.random() * liens.length)];
          paquets.push({ de: a, vers: b, t: 0 });
        }
        paquets = paquets.filter((p) => (p.t += 0.012) < 1);
        for (const p of paquets) {
          const x = p.de.x + (p.vers.x - p.de.x) * p.t;
          const y = p.de.y + (p.vers.y - p.de.y) * p.t;
          ctx.fillStyle = "rgba(242, 179, 91, 0.95)";
          ctx.shadowColor = "rgba(242, 179, 91, 0.9)";
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(x, y, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      requestAnimationFrame(image);
    };

    // On ne dessine pas quand l'accueil est hors de l'écran : économie de batterie.
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(canvas);
    window.addEventListener("resize", redimensionner);
    redimensionner();
    requestAnimationFrame(image);
  }
}

/* ----------------------------------- 4. Reflet des cartes qui suit la souris */
{
  document.addEventListener("pointermove", (e) => {
    const carte = e.target.closest?.(".carte");
    if (!carte) return;
    const r = carte.getBoundingClientRect();
    carte.style.setProperty("--x", `${e.clientX - r.left}px`);
    carte.style.setProperty("--y", `${e.clientY - r.top}px`);
  });
}

/* -------------------------------------------- 5. Apparition au défilement */
{
  const elements = document.querySelectorAll(".apparition");
  if (reduireAnimations || !("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
  } else {
    const obs = new IntersectionObserver(
      (entrees) => entrees.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    elements.forEach((el) => obs.observe(el));
  }
}

/* ------------------------------------------ 6. Filtres des réalisations */
{
  const filtres = document.querySelector("[data-filtres]");
  if (filtres) {
    filtres.hidden = false; // sans JavaScript, toutes les réalisations restent visibles
    const choix = { cadre: "", annee: "" };
    const cartes = document.querySelectorAll("[data-liste] .carte");
    const vide = document.querySelector("[data-vide]");

    filtres.addEventListener("click", (e) => {
      const bouton = e.target.closest("button[data-filtre]");
      if (!bouton) return;
      const groupe = bouton.dataset.filtre;
      choix[groupe] = bouton.dataset.valeur;
      filtres.querySelectorAll(`button[data-filtre="${groupe}"]`).forEach((b) =>
        b.setAttribute("aria-pressed", String(b === bouton))
      );
      let affichees = 0;
      cartes.forEach((carte) => {
        const ok = Object.entries(choix).every(([k, v]) => !v || carte.dataset[k] === v);
        carte.classList.toggle("masquee", !ok);
        if (ok) affichees++;
      });
      vide.hidden = affichees > 0;
    });
  }
}

/* ------------------------------------------- 7. Terminal de navigation */
{
  const dialogue = document.querySelector(".terminal-dialogue");
  const sortie = dialogue?.querySelector("[data-sortie]");
  const saisie = dialogue?.querySelector("[data-saisie]");
  const donnees = JSON.parse(document.getElementById("donnees-terminal")?.textContent || "{}");
  const historique = [];
  let position = 0;

  const ecrire = (html, classe = "") => {
    const p = document.createElement("p");
    if (classe) p.className = classe;
    p.innerHTML = html;
    sortie.append(p);
    sortie.scrollTop = sortie.scrollHeight;
  };
  const echapper = (t) => t.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const aller = (url) => { window.location.href = lien(url); };

  // Pour ajouter une commande : une entrée de plus dans cet objet.
  const commandes = {
    help: {
      aide: "liste des commandes",
      lancer: () => {
        for (const [nom, c] of Object.entries(commandes)) {
          if (c.aide) ecrire(`<span class="accent">${nom.padEnd(10)}</span>${c.aide}`);
        }
      },
    },
    ls: {
      aide: "liste les pages (ls realisations : les projets)",
      lancer: ([dossier]) => {
        if (dossier?.replace(/\/$/, "") === "realisations") {
          donnees.realisations.forEach((r) => ecrire(`<a href="${lien(r.url)}">${r.nom}/</a>  <span class="faible">${echapper(r.titre)}</span>`));
        } else {
          ecrire(donnees.pages.filter((p) => p[2] !== "~").map((p) => `<a href="${lien(p[0])}">${p[2]}/</a>`).join("  "));
        }
      },
    },
    cd: {
      aide: "ouvre une page : cd parcours, cd realisations/tbird-paris",
      lancer: ([cible = "~"]) => {
        const nettoye = cible.replace(/^\.?\//, "").replace(/\/$/, "");
        if (nettoye === "~" || nettoye === "" || nettoye === "..") return aller("/");
        const page = donnees.pages.find((p) => p[2] === nettoye);
        if (page) return aller(page[0]);
        const projet = donnees.realisations.find((r) => nettoye === `realisations/${r.nom}` || nettoye === r.nom);
        if (projet) return aller(projet.url);
        ecrire(`cd: ${echapper(cible)}: aucun dossier de ce nom — essaie <span class="accent">ls</span>`, "erreur");
      },
    },
    open: { aide: "ouvre une réalisation : open minecraft", lancer: ([mot = ""]) => {
      const projet = donnees.realisations.find((r) => r.nom.includes(mot.toLowerCase()) && mot);
      if (projet) aller(projet.url);
      else ecrire(`open: aucune réalisation ne correspond à « ${echapper(mot)} »`, "erreur");
    } },
    whoami: { aide: "qui suis-je", lancer: () => ecrire(`${echapper(donnees.nom)} — étudiant en BTS SIO, option SISR`) },
    contact: { aide: "écrire un email", lancer: () => {
      ecrire(`Ouverture de la messagerie vers <a href="mailto:${donnees.email}">${donnees.email}</a>…`);
      window.location.href = `mailto:${donnees.email}`;
    } },
    ping: { aide: "tester la connexion", lancer: ([hote = "recruteur"]) => {
      const nom = echapper(hote);
      ecrire(`PING ${nom} : 56 octets de données`);
      [1, 2, 3].forEach((i) => setTimeout(() =>
        ecrire(`64 octets de ${nom} : icmp_seq=${i} ttl=64 temps=${(8 + Math.random() * 6).toFixed(1)} ms`), i * 350));
      setTimeout(() => ecrire("3 paquets transmis, 3 reçus — je suis joignable.", "accent"), 1250);
    } },
    sudo: { lancer: () => ecrire("Bien essayé. Les droits d’administration, ça se gagne en alternance.", "erreur") },
    clear: { aide: "efface l’écran", lancer: () => { sortie.innerHTML = ""; } },
    exit: { aide: "ferme le terminal", lancer: () => dialogue.close() },
  };

  const executer = (ligne) => {
    ecrire(`<span class="accent">$</span> ${echapper(ligne)}`, "faible");
    const [nom, ...args] = ligne.trim().split(/\s+/);
    if (!nom) return;
    const commande = commandes[nom.toLowerCase()];
    if (commande) commande.lancer(args);
    else ecrire(`${echapper(nom)} : commande introuvable — tape <span class="accent">help</span>`, "erreur");
  };

  const ouvrir = () => {
    if (!dialogue || dialogue.open) return;
    if (!sortie.childElementCount) {
      ecrire("Bienvenue. Ce terminal sert à naviguer dans le site.", "faible");
      ecrire('Tape <span class="accent">help</span> pour la liste des commandes, <span class="accent">Tab</span> pour compléter.', "faible");
    }
    dialogue.showModal();
    saisie.focus();
  };

  if (dialogue) {
    document.querySelectorAll("[data-ouvrir-terminal]").forEach((b) => b.addEventListener("click", ouvrir));

    document.addEventListener("keydown", (e) => {
      const dansUnChamp = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        dialogue.open ? dialogue.close() : ouvrir();
      } else if (e.key === "/" && !dansUnChamp && !dialogue.open) {
        e.preventDefault();
        ouvrir();
      }
    });

    // Un clic en dehors de la fenêtre, ou sur « Échap », la ferme.
    dialogue.addEventListener("click", (e) => { if (e.target === dialogue) dialogue.close(); });
    dialogue.querySelector("[data-fermer]").addEventListener("click", () => dialogue.close());

    // Entrée valide le formulaire : on exécute la commande au lieu d'envoyer quoi que ce soit.
    dialogue.querySelector("[data-formulaire]").addEventListener("submit", (e) => {
      e.preventDefault();
      const ligne = saisie.value;
      saisie.value = "";
      if (ligne.trim()) historique.push(ligne);
      position = historique.length;
      executer(ligne);
    });

    saisie.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.target.form.requestSubmit();
      } else if (e.key === "ArrowUp" && position > 0) {
        e.preventDefault();
        saisie.value = historique[--position];
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        position = Math.min(historique.length, position + 1);
        saisie.value = historique[position] ?? "";
      } else if (e.key === "Tab") {
        // Complétion : commandes, pages et projets.
        e.preventDefault();
        const mots = saisie.value.split(" ");
        const dernier = mots.at(-1);
        const candidats = mots.length === 1
          ? Object.keys(commandes)
          : [...donnees.pages.map((p) => p[2]), ...donnees.realisations.map((r) => `realisations/${r.nom}`)];
        const trouves = candidats.filter((c) => c.startsWith(dernier));
        if (trouves.length === 1) {
          mots[mots.length - 1] = trouves[0];
          saisie.value = mots.join(" ") + (mots.length === 1 ? " " : "");
        } else if (trouves.length > 1) {
          ecrire(trouves.join("  "), "faible");
        }
      }
    });
  }
}
