/* ==========================================================================
   Portfolio — script unique, en blocs indépendants.
   Chaque bloc peut être supprimé sans casser les autres.
   ========================================================================== */

document.documentElement.classList.add("js");

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

/* ------------------------------------------ 2. Filtres des réalisations */
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

/* ------------------------- 3. Les stickers de l'accueil se décollent au survol */
{
  // Chaque sticker garde une inclinaison à lui, tirée une fois pour toutes.
  document.querySelectorAll(".planche-stickers .sticker").forEach((s, i) => {
    const angle = [-7, 4, -3, 8, -5, 3][i % 6];
    s.style.setProperty("--angle", `${angle}deg`);
    s.style.setProperty("--ordre", i);
  });
}
