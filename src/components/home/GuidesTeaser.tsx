import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./GuidesTeaser.module.css";

const ARTICLES = [
  {
    href: "/poradnik/myslenie-w-swietle",
    title: "Jak myśleć w kategoriach światła, a nie liczb",
    text: "Dlaczego liczenie segmentów w głowie prowadzi na manowce i co sprawdza się zamiast tego, kiedy plansza ma więcej niż dwa pierścienie.",
  },
  {
    href: "/poradnik/bez-paskow-postepu",
    title: "Dlaczego nie ma tu pasków postępu",
    text: "Krótko o tym, jakich elementów interfejsu unikałem świadomie i co w zamian mówi Ci, czy zbliżasz się do rozwiązania.",
  },
];

export function GuidesTeaser() {
  return (
    <section className={styles.section} aria-labelledby="poradnik-tytul">
      <Container>
        <SectionHeading
          eyebrow="poradnik"
          title={<span id="poradnik-tytul">Dwa teksty, jeśli chcesz myśleć o tym głębiej</span>}
          lede="Nie poradniki typu „10 sztuczek”. Dłuższe notatki o konkretnych decyzjach projektowych i o tym, jak podchodzić do trudniejszych plansz."
        />
        <div className={styles.layout}>
          <Image
            src="/illustrations/poradnik-szkic.svg"
            alt="Szkic z kątomierzem, dwoma małymi pierścieniami i ponumerowaną sekwencją kroków"
            width={640}
            height={400}
            className={styles.art}
          />
          <div className={styles.cards}>
            {ARTICLES.map((article) => (
              <Link href={article.href} className={styles.card} key={article.href}>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardText}>{article.text}</p>
                <span className={styles.cardMeta}>Czytaj →</span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
