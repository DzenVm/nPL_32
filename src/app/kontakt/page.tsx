import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/site";
import prose from "@/components/ui/Prose.module.css";
import styles from "./kontakt.module.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Jeden adres e-mail, bez formularza i bez pośredników — zgłoszenia błędów, pytania o dostępność i wszystko inne.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageIntro
        eyebrow="kontakt"
        title="Jeden adres, żadnego formularza"
        lede="Nie stawiałem tu skrzynki kontaktowej z automatyczną odpowiedzią. Jest e-mail, który sam czytam."
      />
      <Container>
        <div className={styles.card}>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.email}>
            {CONTACT_EMAIL}
          </a>
          <p className={styles.hint}>Kliknięcie otworzy Twój domyślny program pocztowy.</p>
        </div>
        <article className={prose.prose}>
          <h2>O czym warto napisać</h2>
          <ul>
            <li>Błąd w działaniu którejś z sześciu plansz demo — im dokładniejszy opis, tym szybciej to naprawię.</li>
            <li>Problem z dostępnością — jeśli coś nie działa z czytnikiem ekranu albo samą klawiaturą, chcę o tym wiedzieć w pierwszej kolejności.</li>
            <li>Pytanie, które nie znalazło odpowiedzi na stronie <Link href="/faq">FAQ</Link>.</li>
            <li>Uwaga do treści prawnych albo do sposobu przetwarzania danych.</li>
          </ul>
          <h2>Czego tu nie znajdziesz</h2>
          <p>
            Formularza kontaktowego, czatu na żywo ani obiecanego czasu odpowiedzi liczonego w
            godzinach. Odpisuję osobiście, więc czasem trwa to kilka dni — ale odpisuję zawsze,
            nawet jeśli odpowiedzią jest „jeszcze nad tym pracuję”.
          </p>
        </article>
        <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="primary">
          Napisz e-mail
        </ButtonLink>
      </Container>
    </>
  );
}
