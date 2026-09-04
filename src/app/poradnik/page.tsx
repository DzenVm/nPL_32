import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import styles from "./poradnik.module.css";

export const metadata: Metadata = {
  title: "Poradnik — dłuższe notatki o łamigłówce",
  description: "Teksty o podejściu do trudniejszych plansz i o decyzjach projektowych stojących za grą.",
  alternates: { canonical: "/poradnik" },
};

const ARTICLES = [
  {
    href: "/poradnik/myslenie-w-swietle",
    title: "Jak myśleć w kategoriach światła, a nie liczb",
    text: "Dlaczego liczenie segmentów w głowie prowadzi na manowce i co sprawdza się zamiast tego, kiedy plansza ma więcej niż dwa pierścienie.",
    readTime: "6 min",
  },
  {
    href: "/poradnik/bez-paskow-postepu",
    title: "Dlaczego nie ma tu pasków postępu",
    text: "O elementach interfejsu, których świadomie unikałem, i o tym, co w zamian mówi Ci, czy zbliżasz się do rozwiązania.",
    readTime: "5 min",
  },
];

export default function PoradnikIndexPage() {
  return (
    <>
      <PageIntro
        eyebrow="poradnik"
        title="Dłuższe teksty, nie listy sztuczek"
        lede="Dwa artykuły na start. Będzie ich więcej w miarę, jak będą powstawać kolejne odcinki gry."
      />
      <Container>
        <div className={styles.grid}>
          {ARTICLES.map((article, index) => (
            <Link href={article.href} className={styles.card} key={article.href}>
              <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.cardBody}>
                <span className={styles.readTime}>{article.readTime} czytania</span>
                <h2 className={styles.cardTitle}>{article.title}</h2>
                <p className={styles.cardText}>{article.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
