export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "zgoda-cookies-v1";
const OPEN_SETTINGS_EVENT = "zgoda-cookies:otworz";

const listeners = new Set<() => void>();
let cache: ConsentState | null | undefined;

function parseConsent(raw: string | null): ConsentState | null {
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      parsed !== null &&
      typeof parsed === "object" &&
      typeof (parsed as ConsentState).analytics === "boolean" &&
      typeof (parsed as ConsentState).marketing === "boolean"
    ) {
      return parsed as ConsentState;
    }
  } catch {
    // uszkodzony zapis w localStorage — traktujemy tak, jakby zgody jeszcze nie było
  }
  return null;
}

/** Snapshot dla useSyncExternalStore — czytany leniwie i cache'owany do najbliższej zmiany. */
export function getConsentSnapshot(): ConsentState | null {
  if (cache === undefined) {
    cache = typeof window === "undefined" ? null : parseConsent(window.localStorage.getItem(STORAGE_KEY));
  }
  return cache;
}

export function getServerConsentSnapshot(): ConsentState | null {
  return null;
}

export function writeConsent(state: ConsentState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  cache = state;
  listeners.forEach((listener) => listener());
}

export function subscribeConsent(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function requestConsentSettings(): void {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

export function onRequestConsentSettings(handler: () => void): () => void {
  window.addEventListener(OPEN_SETTINGS_EVENT, handler);
  return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handler);
}
