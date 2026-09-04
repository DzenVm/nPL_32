import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./FaqTeaser.module.css";

const ITEMS = [
  {
    q: "Czy trzeba się rejestrować, żeby grać?",
    a: "Nie. Wszystkie sześć plansz demo działa bez konta i bez podawania e-maila.",
  },
  {
    q: "Czy gra działa offline?",
    a: "Jeszcze nie — to jeden z kilku otwartych wątków technicznych, nad którymi pracuję.",
  },
  {
    q: "Czy pojawią się jakieś płatności?",
    a: "Nie zapadła jeszcze żadna decyzja. Jeśli się pojawią, nie wpłyną na to, które poziomy da się rozwiązać.",
  },
  {
    q: "Na jakich urządzeniach to działa?",
    a: "Na każdej nowoczesnej przeglądarce — telefonie, tablecie i komputerze. Bez dodatkowych wtyczek.",
  },
];

export function FaqTeaser() {
  return (
    <section className={styles.section} aria-labelledby="faq-tytul">
      <Container>
        <SectionHeading
          eyebrow="pytania"
          title={<span id="faq-tytul">Najczęstsze pytania, w skrócie</span>}
        />
        <div className={styles.list}>
          {ITEMS.map((item) => (
            <div className={styles.item} key={item.q}>
              <p className={styles.question}>{item.q}</p>
              <p className={styles.answer}>{item.a}</p>
            </div>
          ))}
        </div>
        <div className={styles.more}>
          <ButtonLink href="/faq" variant="secondary">
            Zobacz pełną listę pytań
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
