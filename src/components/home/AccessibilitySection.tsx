import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./AccessibilitySection.module.css";

const ITEMS = [
  {
    title: "Wzory obok kolorów",
    text: "Przełącznik przy planszy dokłada do każdej barwy osobny deseń — ukośne kreski, kropki, kratkę. Działa nawet, gdy dwa kolory są dla kogoś nierozróżnialne.",
  },
  {
    title: "Pełna obsługa z klawiatury",
    text: "Każdy przycisk obrotu to zwykły, tabelaryczny <button> — bez niestandardowych pułapek focusu i bez konieczności trafiania myszką w mały wycinek koła.",
  },
  {
    title: "Szanuje ograniczenie animacji systemu",
    text: "Jeśli w systemie masz włączone „ogranicz ruch”, obrót pierścieni i pulsowanie odbiorników przestają się animować — plansza po prostu zmienia stan.",
  },
  {
    title: "Bez migania i bez dźwięku z zaskoczenia",
    text: "Żadnych stroboskopowych efektów przy rozwiązaniu, żadnego dźwięku, który włącza się sam. To, co widzisz w demie, jest ciche z założenia.",
  },
];

export function AccessibilitySection() {
  return (
    <section className={styles.section} aria-labelledby="dostepnosc-tytul">
      <Container>
        <SectionHeading
          eyebrow="dostępność"
          title={<span id="dostepnosc-tytul">Nie każdy rozróżnia kolory tak samo</span>}
          lede="Gra opiera się na kolorze, więc pominięcie daltonizmu byłoby zwykłym niedopatrzeniem
            projektowym, nie detalem. Kilka rzeczy, które już działają:"
        />
        <div className={styles.layout}>
          <Image
            src="/illustrations/dostepnosc-wzory.svg"
            alt="Trzy pary kwadratów pokazujące te same barwy z dodatkowym wzorem: ukośne kreski, kropki i kratka"
            width={640}
            height={220}
            className={styles.art}
          />
          <ul className={styles.list}>
            {ITEMS.map((item) => (
              <li className={styles.item} key={item.title}>
                <span className={styles.itemMark} aria-hidden="true">
                  ◆
                </span>
                <div>
                  <p className={styles.itemTitle}>{item.title}</p>
                  <p className={styles.itemText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
