import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <h2 className={styles.title}>Sześć plansz czeka wyżej na stronie</h2>
          <p className={styles.text}>
            Bez rejestracji, bez pobierania niczego, bez zobowiązań. Wystarczy przewinąć z powrotem
            do demo — albo najpierw przeczytać pełne zasady, jeśli wolisz wiedzieć wszystko
            zawczasu.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="#demo" variant="primary">
              Wróć do gry
            </ButtonLink>
            <ButtonLink href="/jak-grac" variant="secondary">
              Pełne zasady
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
