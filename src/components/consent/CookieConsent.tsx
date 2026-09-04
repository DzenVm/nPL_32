"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  getConsentSnapshot,
  getServerConsentSnapshot,
  onRequestConsentSettings,
  subscribeConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";
import { Button } from "@/components/ui/Button";
import styles from "./CookieConsent.module.css";

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getServerConsentSnapshot);
  const [forcedOpen, setForcedOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [draft, setDraft] = useState<ConsentState>({ analytics: false, marketing: false });

  useEffect(() => {
    return onRequestConsentSettings(() => {
      setDraft(getConsentSnapshot() ?? { analytics: false, marketing: false });
      setExpanded(true);
      setForcedOpen(true);
    });
  }, []);

  const visible = forcedOpen || consent === null;
  if (!visible) return null;

  function acceptAll() {
    writeConsent({ analytics: true, marketing: true });
    setForcedOpen(false);
  }

  function rejectNonEssential() {
    writeConsent({ analytics: false, marketing: false });
    setForcedOpen(false);
  }

  function saveCustom() {
    writeConsent(draft);
    setForcedOpen(false);
  }

  return (
    <div className={styles.wrapper} role="dialog" aria-modal="false" aria-labelledby="zgoda-cookies-tytul">
      <div className={styles.panel}>
        <p className={styles.text} id="zgoda-cookies-tytul">
          <strong>Ta strona używa plików cookies.</strong> Niezbędne trzymają w pamięci Twój wybór
          i działanie łamigłówki. Analityczne pokazują mi zanonimizowane statystyki — które
          poziomy są za trudne, a które nudne. Reklamowe mierzą skuteczność kampanii, dzięki
          którym w ogóle tu trafiasz. Więcej w{" "}
          <Link href="/polityka-cookies">polityce cookies</Link>.
        </p>

        {expanded ? (
          <div className={styles.categories}>
            <div className={styles.category}>
              <input type="checkbox" checked disabled aria-readonly id="cat-niezbedne" />
              <div>
                <label className={styles.categoryTitle} htmlFor="cat-niezbedne">
                  Niezbędne (zawsze aktywne)
                </label>
                <p className={styles.categoryText}>
                  Zapamiętują Twój wybór w tym oknie i podstawowe ustawienia gry. Bez nich strona
                  nie działa poprawnie.
                </p>
              </div>
            </div>

            <div className={styles.category}>
              <input
                type="checkbox"
                id="cat-analityczne"
                checked={draft.analytics}
                onChange={(event) => setDraft((prev) => ({ ...prev, analytics: event.target.checked }))}
              />
              <div>
                <label className={styles.categoryTitle} htmlFor="cat-analityczne">
                  Analityczne
                </label>
                <p className={styles.categoryText}>
                  Zbiorcze, zanonimizowane dane o tym, jak używana jest gra — pomagają dobrać
                  trudność poziomów.
                </p>
              </div>
            </div>

            <div className={styles.category}>
              <input
                type="checkbox"
                id="cat-reklamowe"
                checked={draft.marketing}
                onChange={(event) => setDraft((prev) => ({ ...prev, marketing: event.target.checked }))}
              />
              <div>
                <label className={styles.categoryTitle} htmlFor="cat-reklamowe">
                  Reklamowe
                </label>
                <p className={styles.categoryText}>
                  Informują, z której kampanii reklamowej przyszedł ruch — bez tego nie da się
                  sensownie rozliczyć promocji projektu.
                </p>
              </div>
            </div>
          </div>
        ) : null}

        <div className={styles.actions}>
          <Button variant="primary" onClick={acceptAll}>
            Akceptuj wszystkie
          </Button>
          <Button variant="secondary" onClick={rejectNonEssential}>
            Tylko niezbędne
          </Button>
          {expanded ? (
            <Button variant="secondary" onClick={saveCustom}>
              Zapisz wybór
            </Button>
          ) : (
            <button type="button" className={styles.linkButton} onClick={() => setExpanded(true)}>
              Dostosuj
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
