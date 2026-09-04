import type { ReactNode } from "react";
import { Container } from "./Container";
import styles from "./PageIntro.module.css";

export function PageIntro({ eyebrow, title, lede }: { eyebrow: string; title: ReactNode; lede?: ReactNode }) {
  return (
    <section className={styles.section}>
      <Container>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        {lede ? <p className={styles.lede}>{lede}</p> : null}
      </Container>
    </section>
  );
}
