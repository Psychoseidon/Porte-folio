import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Réécrit les liens quand le site est publié dans un sous-dossier (GitHub Pages).
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Fichiers copiés tels quels : feuille de style, script, images, CV.
  eleventyConfig.addPassthroughCopy("src/assets");

  // Polices hébergées avec le site (pas d'appel à Google : rien ne part chez un tiers).
  const polices = {
    "@fontsource-variable/inter": ["inter-latin-wght-normal", "inter-latin-ext-wght-normal"],
    "@fontsource-variable/jetbrains-mono": ["jetbrains-mono-latin-wght-normal", "jetbrains-mono-latin-ext-wght-normal"],
  };
  for (const [paquet, fichiers] of Object.entries(polices)) {
    for (const f of fichiers) {
      eleventyConfig.addPassthroughCopy({ [`node_modules/${paquet}/files/${f}.woff2`]: `assets/fonts/${f}.woff2` });
    }
  }

  // Toutes les réalisations : un fichier Markdown = une page. Les plus récentes d'abord.
  eleventyConfig.addCollection("realisations", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/realisations/*.md").sort((a, b) => b.date - a.date)
  );

  // « 2026-09-01 » -> « septembre 2026 »
  eleventyConfig.addFilter("moisAnnee", (date) =>
    new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric", timeZone: "UTC" }).format(date)
  );

  // Liste sans doublon d'un champ des réalisations (pour les boutons de filtre).
  eleventyConfig.addFilter("valeurs", (items, champ) =>
    [...new Set(items.map((item) => item.data[champ]).filter(Boolean))]
  );

  // Réalisations dont un champ vaut une valeur donnée (ex. cadre = Alternance).
  eleventyConfig.addFilter("filtrerPar", (items, champ, valeur) =>
    items.filter((item) => item.data[champ] === valeur)
  );

  // Ce que le terminal de navigation doit savoir de chaque réalisation.
  eleventyConfig.addFilter("carteTerminal", (items) =>
    items.map((item) => ({ url: item.url, titre: item.data.title, nom: item.fileSlug }))
  );

  // « Formation » -> « formation », pour les attributs de filtre.
  eleventyConfig.addFilter("cle", (texte) =>
    String(texte).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-")
  );

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
