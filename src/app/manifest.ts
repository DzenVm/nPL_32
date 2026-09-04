import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "łamigłówka świetlna — przeglądarkowa gra logiczna",
    short_name: "łamigłówka światła",
    description: "Obracaj pierścienie szkła, mieszaj światło i otwieraj rdzeń. Bez rejestracji, bez presji czasu.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0e13",
    theme_color: "#0b0e13",
    lang: "pl",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/icon-512", type: "image/png", sizes: "512x512" },
    ],
  };
}
