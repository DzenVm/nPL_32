import type { Metadata } from "next";
import type { ReactNode } from "react";
import { display, body } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { Analytics } from "@/components/analytics/Analytics";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Łamigłówka światła — przeglądarkowa gra logiczna po polsku",
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "gra logiczna online",
    "łamigłówka przeglądarkowa",
    "gra bez rejestracji",
    "łamigłówka po polsku",
    "gra w przeglądarce",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Łamigłówka światła",
    title: "Łamigłówka światła — przeglądarkowa gra logiczna po polsku",
    description: SITE_DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Łamigłówka światła — przeglądarkowa gra logiczna po polsku",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#glowna-tresc" className="skip-link">
          Przejdź do treści
        </a>
        <Header />
        <main id="glowna-tresc">{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
