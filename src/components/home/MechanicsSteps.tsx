import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./MechanicsSteps.module.css";

const STEPS = [
  {
    title: "Wiązka wchodzi z zewnątrz",
    text: "Na brzegu planszy startuje impuls światła. Sam w sobie nie ma jeszcze koloru — to dopiero surowiec, który zaraz przejdzie przez wszystkie pierścienie po drodze do środka.",
  },
  {
    title: "Każdy pierścień coś do niego dokłada",
    text: "Przezroczysty segment przepuszcza wiązkę bez zmian. Kolorowy dokłada swoją barwę. Bloker gasi wszystko, co przez niego próbuje przejść — bez wyjątków i bez ostrzeżenia.",
  },
  {
    title: "Barwy się sumują, nie mieszają jak farby",
    text: "Czerwień plus zieleń nie daje błota, tylko żółć. To model światła, nie akwareli — dwie różne barwy w tym samym gnieździe zawsze dają ten sam, przewidywalny wynik.",
  },
  {
    title: "Rdzeń przyjmuje tylko dokładny wynik",
    text: "Za mało koloru, za dużo koloru albo zgaszona po drodze wiązka — rdzeń i tak zostaje ciemny. Liczy się trafienie, nie zbliżenie się do niego.",
  },
];

export function MechanicsSteps() {
  return (
    <section className={styles.section} aria-labelledby="mechanika-tytul">
      <Container>
        <SectionHeading
          eyebrow="mechanika"
          title={<span id="mechanika-tytul">Jedna zasada, cztery kroki do zrozumienia</span>}
          lede="Cała reszta gry — wszystkie sześć poziomów demo i pięć odcinków pełnej wersji — to
            wariacje na temat tych czterech zdań. Nic więcej nie trzeba pamiętać, żeby zacząć."
        />
        <div className={styles.layout}>
          <div className={styles.steps}>
            {STEPS.map((step, index) => (
              <article className={styles.step} key={step.title}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <Image
            src="/illustrations/mechanika-diagram.svg"
            alt="Schemat wiązki światła przechodzącej przez trzy pierścienie i zapalającej odbiornik na dole"
            width={480}
            height={640}
            className={styles.diagram}
          />
        </div>
      </Container>
    </section>
  );
}
