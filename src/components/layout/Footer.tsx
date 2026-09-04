import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";
import { CONTACT_EMAIL, LEGAL_LINKS, NAV_LINKS } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.about}>
            <p>
              Niewielki, niezależny projekt: jeden silnik gry napisany od zera i pierścienie, które
              trzeba było obracać ręcznie w dziesiątkach wersji testowych, zanim zaczęły dawać
              łamigłówki mające sens.
            </p>
            <p>
              Strona rośnie razem z grą. Część sekcji jeszcze się zmieni, ale wszystko, co tu
              działa — działa naprawdę, bez podmienionych na później elementów.
            </p>
          </div>

          <nav aria-label="Nawigacja w stopce">
            <p className={styles.heading}>Nawigacja</p>
            <ul className={styles.list}>
              <li>
                <Link href="/">Strona główna</Link>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Informacje prawne">
            <p className={styles.heading}>Formalności</p>
            <ul className={styles.list}>
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={styles.heading}>Kontakt</p>
            <ul className={styles.list}>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>Odpowiadam osobiście, więc czasem to trwa kilka dni.</li>
              <CookieSettingsButton />
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} · wszelkie prawa zastrzeżone.</span>
          <span>Zrobione i testowane w Polsce, po polsku.</span>
        </div>
      </Container>
    </footer>
  );
}
