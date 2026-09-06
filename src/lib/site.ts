export const SITE_DOMAIN = "bemookad.pro";
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const CONTACT_EMAIL = `kontakt@${SITE_DOMAIN}`;

export const SITE_LOCALE = "pl_PL";
export const SITE_LANGUAGE = "pl";

export const SITE_DESCRIPTION =
  "Przeglądarkowa łamigłówka logiczna: obracasz pierścienie szkła, mieszasz światło i otwierasz rdzeń. Bez rejestracji, bez presji czasu, po polsku.";

export const SITE_TITLE_SHORT = "Łamigłówka światła";

export const NAV_LINKS = [
  { href: "/jak-grac", label: "Jak grać" },
  { href: "/o-projekcie", label: "O projekcie" },
  { href: "/poradnik", label: "Poradnik" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const LEGAL_LINKS = [
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
  { href: "/polityka-cookies", label: "Polityka cookies" },
  { href: "/regulamin", label: "Regulamin" },
] as const;
