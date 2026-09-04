"use client";

import { requestConsentSettings } from "@/lib/consent";
import footerStyles from "../layout/Footer.module.css";

export function CookieSettingsButton() {
  return (
    <li>
      <button type="button" onClick={requestConsentSettings} className={footerStyles.linkLikeButton}>
        Ustawienia cookies
      </button>
    </li>
  );
}
