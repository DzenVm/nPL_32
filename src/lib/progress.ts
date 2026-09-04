const STORAGE_KEY = "postep-demo-v1";
const EMPTY_SET: ReadonlySet<string> = new Set();

const listeners = new Set<() => void>();
let cache: ReadonlySet<string> | undefined;

function loadFromStorage(): ReadonlySet<string> {
  if (typeof window === "undefined") return EMPTY_SET;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_SET;
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? new Set(parsed as string[]) : EMPTY_SET;
  } catch {
    return EMPTY_SET;
  }
}

/** Snapshot dla useSyncExternalStore — stabilna referencja aż do kolejnego rozwiązanego poziomu. */
export function getSolvedSnapshot(): ReadonlySet<string> {
  if (cache === undefined) cache = loadFromStorage();
  return cache;
}

export function getServerSolvedSnapshot(): ReadonlySet<string> {
  return EMPTY_SET;
}

export function markLevelSolved(id: string): void {
  const current = getSolvedSnapshot();
  if (current.has(id)) return;
  const next = new Set(current).add(id);
  cache = next;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
    } catch {
      // tryb prywatny albo pełny localStorage — postęp demo po prostu się nie zapisze
    }
  }
  listeners.forEach((listener) => listener());
}

export function subscribeSolved(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}
