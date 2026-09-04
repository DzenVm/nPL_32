import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ForWhom.module.css";

const SCENARIOS = [
  {
    title: "Piętnaście minut przerwy",
    text: "Parzysz kawę, siadasz, otwierasz jedną planszę. Jeśli nie wyjdzie od razu — zamykasz kartę i wracasz jutro. Nic tu na Ciebie nie czeka z niecierpliwością.",
  },
  {
    title: "Ostatni przystanek jeszcze daleko",
    text: "Układ w pionie mieści się w jednej dłoni, sterowanie dotykiem działa tak samo jak myszką na komputerze. Bez logowania między jednym urządzeniem a drugim.",
  },
  {
    title: "Zanim zgasisz światło",
    text: "Ciemne tło nie razi po oczach o dwudziestej trzeciej. Bez dźwięku, jeśli obok śpi ktoś, kto nie musi słuchać obracających się pierścieni.",
  },
];

export function ForWhom() {
  return (
    <section className={styles.section} aria-labelledby="dlakogo-tytul">
      <Container>
        <SectionHeading
          eyebrow="dla kogo"
          title={<span id="dlakogo-tytul">Trzy sytuacje, w których ktoś już to otworzył</span>}
          lede="Nie projektowałem tego pod konkretną grupę wiekową ani „casualowych graczy”. Projektowałem pod konkretne chwile w ciągu dnia."
        />
        <Image
          src="/illustrations/dla-kogo-sceny.svg"
          alt="Trzy okrągłe ikony: kubek z parą, okno w podróży i półksiężyc symbolizujący wieczór"
          width={720}
          height={260}
          className={styles.art}
        />
        <div className={styles.grid}>
          {SCENARIOS.map((scenario) => (
            <article className={styles.card} key={scenario.title}>
              <h3 className={styles.cardTitle}>{scenario.title}</h3>
              <p className={styles.cardText}>{scenario.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
