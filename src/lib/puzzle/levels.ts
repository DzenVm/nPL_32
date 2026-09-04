import type { LevelDefinition } from "./types";

/**
 * Wszystkie sześć poziomów zostało wygenerowanych z pierścieni w stanie
 * rozwiązanym, a następnie celowo rozsynchronizowanych — i potwierdzonych
 * przeszukiwaniem całej przestrzeni stanów (BFS), więc `parMoves` to
 * rzeczywista, najkrótsza możliwa liczba ruchów, a nie szacunek.
 */
export const levels: LevelDefinition[] = [
  {
    id: "pierwszy-promien",
    title: "Pierwszy promień",
    intro: "Jeden nadajnik, jeden odbiornik. Trzeba tylko trafić.",
    segmentCount: 6,
    rings: [
      { segments: ["R", "blocker", "clear", "clear", "clear", "clear"] },
      { segments: ["clear", "blocker", "blocker", "B", "clear", "clear"] },
    ],
    targets: [{ slot: 0, required: "R" }],
    initialOffsets: [2, 5],
    parMoves: 3,
  },
  {
    id: "wspolna-barwa",
    title: "Wspólna barwa",
    intro: "Dwa pierścienie muszą dołożyć swój kolor w tym samym miejscu.",
    segmentCount: 8,
    rings: [
      { segments: ["G", "G", "blocker", "blocker", "clear", "blocker", "clear", "clear"] },
      { segments: ["R", "clear", "clear", "blocker", "clear", "G", "blocker", "clear"] },
    ],
    targets: [{ slot: 0, required: "GR" }],
    initialOffsets: [4, 3],
    parMoves: 6,
  },
  {
    id: "trzeci-filtr",
    title: "Trzeci filtr",
    intro: "Trzeci pierścień potrafi zgasić wszystko, jeśli stanie w złym miejscu.",
    segmentCount: 8,
    rings: [
      { segments: ["clear", "G", "clear", "R", "blocker", "G", "blocker", "blocker"] },
      { segments: ["B", "blocker", "clear", "clear", "G", "clear", "clear", "R"] },
      { segments: ["clear", "clear", "blocker", "G", "G", "clear", "blocker", "clear"] },
    ],
    targets: [{ slot: 0, required: "B" }],
    initialOffsets: [1, 4, 5],
    parMoves: 7,
  },
  {
    id: "biel",
    title: "Biel",
    intro: "Wszystkie trzy barwy naraz, w jednym punkcie.",
    segmentCount: 8,
    rings: [
      { segments: ["B", "clear", "blocker", "clear", "clear", "blocker", "clear", "G"] },
      { segments: ["G", "clear", "clear", "clear", "clear", "clear", "clear", "clear"] },
      { segments: ["R", "R", "G", "clear", "clear", "clear", "R", "clear"] },
    ],
    targets: [{ slot: 0, required: "BGR" }],
    initialOffsets: [4, 6, 4],
    parMoves: 8,
  },
  {
    id: "dwa-punkty",
    title: "Dwa punkty",
    intro: "To, co naprawia jeden odbiornik, potrafi popsuć drugi.",
    segmentCount: 10,
    rings: [
      { segments: ["R", "clear", "R", "blocker", "R", "clear", "clear", "G", "R", "G"] },
      { segments: ["clear", "blocker", "clear", "R", "blocker", "B", "clear", "blocker", "clear", "B"] },
      { segments: ["clear", "clear", "clear", "clear", "B", "clear", "clear", "clear", "blocker", "B"] },
    ],
    targets: [
      { slot: 0, required: "R" },
      { slot: 5, required: "B" },
    ],
    initialOffsets: [6, 5, 1],
    parMoves: 10,
  },
  {
    id: "rdzen",
    title: "Rdzeń",
    intro: "Cztery pierścienie, dwa odbiorniki, żadnej podpowiedzi.",
    segmentCount: 10,
    rings: [
      { segments: ["G", "clear", "blocker", "blocker", "clear", "clear", "blocker", "clear", "blocker", "blocker"] },
      { segments: ["clear", "G", "clear", "blocker", "blocker", "B", "clear", "clear", "clear", "G"] },
      { segments: ["R", "blocker", "blocker", "G", "R", "clear", "clear", "clear", "clear", "clear"] },
      { segments: ["clear", "G", "blocker", "clear", "R", "G", "clear", "blocker", "clear", "clear"] },
    ],
    targets: [
      { slot: 0, required: "GR" },
      { slot: 5, required: "BG" },
    ],
    initialOffsets: [3, 5, 3, 2],
    parMoves: 13,
  },
];

export function getLevelById(id: string): LevelDefinition | undefined {
  return levels.find((level) => level.id === id);
}
