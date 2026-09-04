export type Primary = "R" | "G" | "B";

export type Segment = "clear" | "blocker" | Primary;

/**
 * Wynik zawsze zapisany jako litery posortowane alfabetycznie, np. "R", "GR", "BGR".
 * Pusty string oznacza brak światła (zablokowane albo nic nie dołożyło koloru).
 */
export type ColorKey = "" | "R" | "G" | "B" | "BG" | "BR" | "GR" | "BGR";

export interface RingPattern {
  /** Fizyczny układ segmentów pierścienia, indeks 0..segmentCount-1. Nie zmienia się w trakcie gry. */
  segments: Segment[];
}

export interface Target {
  /** Numer gniazda (0..segmentCount-1), w którym stoi odbiornik. */
  slot: number;
  required: ColorKey;
}

export interface LevelDefinition {
  id: string;
  title: string;
  intro: string;
  segmentCount: number;
  /** Pierścienie od zewnętrznego do wewnętrznego. */
  rings: RingPattern[];
  targets: Target[];
  /** Startowe przesunięcia pierścieni — celowo rozsynchronizowane. */
  initialOffsets: number[];
  /** Najkrótsze możliwe rozwiązanie w ruchach, policzone przeszukiwaniem stanu. */
  parMoves: number;
}

export interface BoardState {
  offsets: number[];
}
