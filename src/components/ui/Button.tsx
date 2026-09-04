import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";

function variantClass(variant: Variant) {
  return `${styles.button} ${styles[variant]}`;
}

type LinkProps = { href: string; children: ReactNode; variant?: Variant } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className"
>;

export function ButtonLink({ href, children, variant = "primary", ...rest }: LinkProps) {
  const className = variantClass(variant);
  const isExternalOrAnchor = href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http");
  if (isExternalOrAnchor) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = { children: ReactNode; variant?: Variant } & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
>;

export function Button({ children, variant = "primary", ...rest }: ButtonProps) {
  return (
    <button className={variantClass(variant)} {...rest}>
      {children}
    </button>
  );
}
