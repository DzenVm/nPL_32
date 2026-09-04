"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { getConsentSnapshot, getServerConsentSnapshot, subscribeConsent } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID;

export function Analytics() {
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getServerConsentSnapshot);

  if (!GA_ID && !ADS_ID) return null;

  const analyticsAllowed = Boolean(consent?.analytics) && Boolean(GA_ID);
  const marketingAllowed = Boolean(consent?.marketing) && Boolean(ADS_ID);

  if (!analyticsAllowed && !marketingAllowed) return null;

  const loaderId = GA_ID ?? ADS_ID;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('consent', 'default', {
  analytics_storage: '${analyticsAllowed ? "granted" : "denied"}',
  ad_storage: '${marketingAllowed ? "granted" : "denied"}',
  ad_user_data: '${marketingAllowed ? "granted" : "denied"}',
  ad_personalization: '${marketingAllowed ? "granted" : "denied"}'
});
${analyticsAllowed ? `gtag('config', '${GA_ID}');` : ""}
${marketingAllowed && ADS_ID !== GA_ID ? `gtag('config', '${ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}
