import type { CSSProperties } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ProgressionMap.module.css";

const STAGES = [
  {
    name: "Świt",
    color: "#7bdfd0",
    text: "Dwa pierścienie, pojedyncze barwy, zero blokerów. Tu uczysz się, że obrócenie w lewo i w prawo to dwie różne decyzje.",
  },
  {
    name: "Południe",
    color: "#ffc169",
    text: "Dochodzi trzeci pierścień i pierwsze mieszanki dwóch barw naraz. Pojawiają się pierwsze blokery — pojedyncze, łatwe do ominięcia.",
  },
  {
    name: "Zmierzch",
    color: "#f0a24a",
    text: "Dwa odbiorniki na jednej planszy. To, co naprawia jeden, potrafi zepsuć drugi — tu zaczyna się prawdziwe planowanie.",
  },
  {
    name: "Zaćmienie",
    color: "#e97a63",
    text: "Planowane lustra odbijające wiązkę pod kątem prostym i limit ruchów jako twarde ograniczenie planszy zamiast zegara.",
  },
  {
    name: "Rdzeń",
    color: "#fff3d9",
    text: "Cztery pierścienie, komplet mechanik naraz, żadnej podpowiedzi. Szósty poziom demo nosi tę samą nazwę nieprzypadkowo.",
  },
];

export function ProgressionMap() {
  return (
    <section className={styles.section} aria-labelledby="progresja-tytul">
      <Container>
        <SectionHeading
          eyebrow="struktura"
          title={<span id="progresja-tytul">Pięć odcinków, coraz gęstsze szkło</span>}
          lede="Pełna gra ma być podzielona na pięć części o rosnącej złożoności. Demo wyżej
            odpowiada mniej więcej pierwszym dwóm — Świtowi i Południu — plus zapowiedzi finału."
        />
        <Image
          src="/illustrations/mapa-progresji.svg"
          alt="Mapa pięciu odcinków gry: Świt, Południe, Zmierzch, Zaćmienie i Rdzeń, połączonych ścieżką"
          width={900}
          height={300}
          className={styles.art}
        />
        <div className={styles.list}>
          {STAGES.map((stage) => (
            <div className={styles.stage} key={stage.name} style={{ "--stage-color": stage.color } as CSSProperties}>
              <h3 className={styles.stageName}>{stage.name}</h3>
              <p className={styles.stageText}>{stage.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          Zmierzch, Zaćmienie i pełny Rdzeń są jeszcze w budowie — to, co widać w tabeli, to plan
          projektowy, nie gotowa zawartość. Nie chciałem obiecywać więcej, niż da się dziś sprawdzić.
        </p>
      </Container>
    </section>
  );
}
