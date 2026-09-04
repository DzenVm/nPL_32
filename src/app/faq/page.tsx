import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ — najczęstsze pytania",
  description: "Odpowiedzi na pytania o granie, dane, przeglądarki i status prac nad łamigłówką ze świetlnymi pierścieniami.",
  alternates: { canonical: "/faq" },
};

type QA = { q: string; plain: string; a?: ReactNode };

const GRANIE: QA[] = [
  {
    q: "Czy trzeba się rejestrować, żeby grać?",
    plain: "Nie. Wszystkie sześć plansz demo na stronie głównej działa bez konta i bez podawania jakichkolwiek danych.",
  },
  {
    q: "Czy mój postęp się zapisuje?",
    plain: "Informacja o tym, które poziomy demo już rozwiązałeś, zapisuje się lokalnie w Twojej przeglądarce (w localStorage) i zniknie po wyczyszczeniu danych strony albo na innym urządzeniu. Bieżący układ pierścieni w trakcie rozwiązywania nie jest jeszcze zapisywany — po odświeżeniu strony plansza wraca do punktu startowego.",
  },
  {
    q: "Czy jest limit czasu na rozwiązanie planszy?",
    plain: "Nie. Nie ma zegara ani żadnego ograniczenia, jak długo możesz nad czymś siedzieć.",
  },
  {
    q: "Na jakich urządzeniach to działa?",
    plain: "Na telefonie, tablecie i komputerze — w każdej nowoczesnej przeglądarce. Sterowanie działa tak samo dotykiem, jak myszką i klawiaturą.",
  },
  {
    q: "Czy trzeba coś instalować?",
    plain: "Nie. To zwykła strona internetowa — otwierasz ją w przeglądarce i od razu grasz, bez sklepu z aplikacjami i bez pobierania czegokolwiek.",
  },
  {
    q: "Czy gra działa offline?",
    plain: "Jeszcze nie — to jeden z kilku otwartych wątków technicznych, nad którymi obecnie pracuję.",
  },
];

const TECHNICZNE: QA[] = [
  {
    q: "Jakich przeglądarek używacie do testów?",
    plain: "Aktualnych wersji Chrome, Firefox i Safari. Starsze przeglądarki bez pełnej obsługi nowoczesnego CSS mogą wyświetlić układ odrobinę inaczej, ale sama plansza powinna działać poprawnie.",
  },
  {
    q: "Czy strona zbiera dane o mnie?",
    plain: "W zakresie opisanym w polityce prywatności — skrótowo: nic ponad to, na co wyrazisz zgodę w banerze cookies, plus dane niezbędne do samego działania strony.",
    a: (
      <>
        W zakresie opisanym w <Link href="/polityka-prywatnosci">polityce prywatności</Link> —
        skrótowo: nic ponad to, na co wyrazisz zgodę w banerze cookies, plus dane niezbędne do
        samego działania strony.
      </>
    ),
  },
  {
    q: "Czy używacie plików cookie?",
    plain: "Tak, w trzech kategoriach opisanych w polityce cookies — niezbędne działają zawsze, analityczne i reklamowe tylko po Twojej zgodzie, którą można w każdej chwili zmienić w stopce strony.",
    a: (
      <>
        Tak, w trzech kategoriach opisanych w <Link href="/polityka-cookies">polityce cookies</Link>{" "}
        — niezbędne działają zawsze, analityczne i reklamowe tylko po Twojej zgodzie, którą można
        w każdej chwili zmienić w stopce strony.
      </>
    ),
  },
];

const PROJEKT: QA[] = [
  {
    q: "Czy pojawią się jakieś płatności?",
    plain: "Nie zapadła jeszcze żadna decyzja w tej sprawie. Jeśli się pojawią, nie wpłyną na to, które poziomy da się rozwiązać — to zawsze będzie kwestia samego myślenia, nie budżetu.",
  },
  {
    q: "Skąd w ogóle pomysł na pierścienie i światło?",
    plain: "Dłuższa odpowiedź jest na stronie o projekcie. Krótsza: chciałem mechaniki, która ma fizyczny ciężar obracanego mechanizmu, a nie kolejnej siatki kafelków do przesuwania.",
    a: (
      <>
        Dłuższa odpowiedź jest na <Link href="/o-projekcie">stronie o projekcie</Link>. Krótsza:
        chciałem mechaniki, która ma fizyczny ciężar obracanego mechanizmu, a nie kolejnej siatki
        kafelków do przesuwania.
      </>
    ),
  },
  {
    q: "Do kogo jest skierowana ta gra?",
    plain: "Do każdego, kto lubi logiczne układanki. Nie ma tu treści przeznaczonych wyłącznie dla dorosłych ani niczego, co wymagałoby ograniczeń wiekowych.",
  },
  {
    q: "Znalazłem błąd albo mam pomysł — gdzie to zgłosić?",
    plain: "Najlepiej mailem — adres jest na stronie kontaktowej. Odpowiadam osobiście na każdą wiadomość.",
    a: (
      <>
        Najlepiej mailem — adres jest na <Link href="/kontakt">stronie kontaktowej</Link>.
        Odpowiadam osobiście na każdą wiadomość.
      </>
    ),
  },
];

const ALL_QA = [...GRANIE, ...TECHNICZNE, ...PROJEKT];

function Section({ title, items }: { title: string; items: QA[] }) {
  return (
    <>
      <h2 className={styles.groupTitle}>{title}</h2>
      <div className={styles.list}>
        {items.map((item) => (
          <details className={styles.item} key={item.q}>
            <summary>
              {item.q}
              <span className={styles.icon} aria-hidden="true">
                +
              </span>
            </summary>
            <p className={styles.answer}>{item.a ?? item.plain}</p>
          </details>
        ))}
      </div>
    </>
  );
}

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_QA.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.plain },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro
        eyebrow="pytania i odpowiedzi"
        title="FAQ"
        lede="Dwanaście pytań, które najczęściej dostaję albo sam sobie zadaję, projektując kolejne poziomy."
      />
      <Container>
        <Section title="Granie" items={GRANIE} />
        <Section title="Sprawy techniczne" items={TECHNICZNE} />
        <Section title="Projekt" items={PROJEKT} />
      </Container>
    </>
  );
}
