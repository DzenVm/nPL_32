import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/jak-grac", priority: 0.8, changeFrequency: "monthly" },
  { path: "/o-projekcie", priority: 0.6, changeFrequency: "monthly" },
  { path: "/poradnik", priority: 0.6, changeFrequency: "monthly" },
  { path: "/poradnik/myslenie-w-swietle", priority: 0.5, changeFrequency: "yearly" },
  { path: "/poradnik/bez-paskow-postepu", priority: 0.5, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.3, changeFrequency: "yearly" },
  { path: "/polityka-prywatnosci", priority: 0.2, changeFrequency: "yearly" },
  { path: "/polityka-cookies", priority: 0.2, changeFrequency: "yearly" },
  { path: "/regulamin", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
