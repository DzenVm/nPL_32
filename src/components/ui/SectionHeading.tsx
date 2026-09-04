import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  centered = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  centered?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={centered ? `${styles.heading} ${styles.centered}` : styles.heading}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Heading className={styles.title}>{title}</Heading>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </div>
  );
}
