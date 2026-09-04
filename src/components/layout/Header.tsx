"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/site";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.bar}>
          <ul className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <ButtonLink href="/#demo" variant="primary">
              Zagraj teraz
            </ButtonLink>
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Zamknij menu" : "Otwórz menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>
      <div id="mobile-nav" className={open ? `${styles.mobileNav} ${styles.open}` : styles.mobileNav}>
        <div className={styles.mobileNavInner}>
          <Container>
            <ul className={styles.mobileList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </header>
  );
}
