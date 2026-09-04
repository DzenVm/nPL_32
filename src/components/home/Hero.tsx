import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.section} aria-labelledby="hero-tytul">
      <Container>
        <div className={styles.grid}>
          <div>
            <p className={styles.eyebrow}>
              <span className={styles.dot} aria-hidden="true" />
              gra przeglądarkowa · wciąż w budowie
            </p>
            <h1 className={styles.title} id="hero-tytul">
              Obracasz szkło, dopóki światło nie powie: tak.
            </h1>
            <p className={styles.lede}>
              Przeglądarkowa łamigłówka bez zegara, bez konta i bez podpowiedzi. Cztery pierścienie
              szkła, trzy barwy do wymieszania i jeden rdzeń, który zapala się dopiero wtedy, gdy
              trafisz dokładnie — nie w przybliżeniu.
            </p>
            <div className={styles.actions}>
              <ButtonLink href="#demo" variant="primary">
                Zagraj teraz
              </ButtonLink>
              <ButtonLink href="/jak-grac" variant="secondary">
                Przeczytaj pełne zasady
              </ButtonLink>
            </div>
            <ul className={styles.meta}>
              <li>6 plansz demo już działa</li>
              <li>bez rejestracji</li>
              <li>telefon, tablet, komputer</li>
            </ul>
          </div>
          <Image
            src="/illustrations/hero-pierscienie.svg"
            alt="Cztery koncentryczne pierścienie szkła z jasnym rdzeniem światła pośrodku"
            width={600}
            height={600}
            priority
            className={styles.art}
          />
        </div>
      </Container>
    </section>
  );
}
