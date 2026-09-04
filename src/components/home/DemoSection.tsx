import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PuzzleBoard } from "@/components/game/PuzzleBoard";
import styles from "./DemoSection.module.css";

export function DemoSection() {
  return (
    <section id="demo" className={styles.section} aria-labelledby="demo-tytul">
      <Container>
        <div className={styles.heading}>
          <SectionHeading
            as="h2"
            eyebrow="wypróbuj"
            title={<span id="demo-tytul">Zanim przeczytasz dalej, po prostu zagraj</span>}
            lede="To nie zwiastun ani makieta. To ten sam silnik, który stoi za całą grą — tu tylko
              z sześcioma wybranymi planszami zamiast pełnej progresji z pięciu odcinków."
          />
        </div>
        <PuzzleBoard />
      </Container>
    </section>
  );
}
