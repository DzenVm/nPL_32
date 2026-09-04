import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./DevLog.module.css";

const ENTRIES = [
  {
    date: "14 sierpnia 2026",
    text: (
      <>
        Poziom „Dwa punkty” psuł się dokładnie wtedy, gdy naprawiałem pierwszy odbiornik i przy
        okazji rozwalałem drugi. Zostawiłem tę zależność celowo — to jest clou tej planszy — ale
        musiałem dodać cienką przerywaną linię od brzegu do rdzenia, żeby było wiadomo, które
        gniazdo do czego należy.
      </>
    ),
  },
  {
    date: "2 lipca 2026",
    text: (
      <>
        Testowałem przez tydzień wersję z zegarem odliczającym w rogu ekranu. Skasowałem ją tego
        samego dnia, kiedy skończyły się testy — łamigłówka, w której się spieszysz, przestaje być
        łamigłówką. Staje się testem refleksu, a to zupełnie inna gra.
      </>
    ),
  },
  {
    date: "19 maja 2026",
    text: (
      <>
        Pierwsza wersja miała kwadratowe płytki do przesuwania zamiast pierścieni do obracania.
        Działała poprawnie, ale nie dawała tego uczucia przekręcanego mechanizmu, o które mi
        chodziło od początku. Przepisanie silnika na pierścienie zajęło trzy tygodnie wieczorami.
      </>
    ),
  },
];

export function DevLog() {
  return (
    <section className={styles.section} aria-labelledby="devlog-tytul">
      <Container>
        <SectionHeading
          eyebrow="notatnik"
          title={<span id="devlog-tytul">Za kulisami, bez lakieru</span>}
          lede="Krótkie notatki z pracy nad silnikiem gry — bez daty premiery, za to z konkretami, które akurat tego dnia się zmieniły."
        />
        <div className={styles.list}>
          {ENTRIES.map((entry) => (
            <div className={styles.entry} key={entry.date}>
              <time className={styles.date}>{entry.date}</time>
              <p className={styles.text}>{entry.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
