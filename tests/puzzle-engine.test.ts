import { describe, expect, it } from "vitest";
import {
  beamResultAtSlot,
  checkWin,
  createInitialState,
  rotateRing,
} from "@/lib/puzzle/engine";
import { levels } from "@/lib/puzzle/levels";
import type { BoardState, LevelDefinition } from "@/lib/puzzle/types";

function bfsShortestSolution(level: LevelDefinition, start: BoardState, maxDepth = 40): number {
  const key = (state: BoardState) => state.offsets.join(",");
  if (checkWin(level, start)) return 0;

  const visited = new Set<string>([key(start)]);
  let frontier: BoardState[] = [start];

  for (let depth = 1; depth <= maxDepth; depth++) {
    const next: BoardState[] = [];
    for (const state of frontier) {
      for (let ringIndex = 0; ringIndex < level.rings.length; ringIndex++) {
        for (const direction of [1, -1] as const) {
          const candidate = rotateRing(level, state, ringIndex, direction);
          const candidateKey = key(candidate);
          if (visited.has(candidateKey)) continue;
          visited.add(candidateKey);
          if (checkWin(level, candidate)) return depth;
          next.push(candidate);
        }
      }
    }
    frontier = next;
  }
  return -1;
}

describe("rotacja pierścienia", () => {
  const level = levels[0]!;

  it("zawija się na obu końcach zakresu", () => {
    const start = createInitialState(level);
    const rotatedBack = rotateRing(level, { offsets: [0, 0] }, 0, -1);
    expect(rotatedBack.offsets[0]).toBe(level.segmentCount - 1);

    const rotatedForward = rotateRing(level, { offsets: [level.segmentCount - 1, 0] }, 0, 1);
    expect(rotatedForward.offsets[0]).toBe(0);

    expect(start.offsets).toEqual(level.initialOffsets);
  });

  it("nie zmienia pozostałych pierścieni", () => {
    const next = rotateRing(level, { offsets: [2, 5] }, 1, 1);
    expect(next.offsets[0]).toBe(2);
    expect(next.offsets[1]).toBe(0);
  });
});

describe("mieszanie barw w gnieździe", () => {
  const segmentCount = 4;
  const makeLevel = (rings: LevelDefinition["rings"]): LevelDefinition => ({
    id: "test",
    title: "test",
    intro: "test",
    segmentCount,
    rings,
    targets: [],
    initialOffsets: rings.map(() => 0),
    parMoves: 0,
  });

  it("pojedynczy kolor przechodzi bez zmian", () => {
    const level = makeLevel([{ segments: ["R", "clear", "clear", "clear"] }]);
    expect(beamResultAtSlot(level, { offsets: [0] }, 0)).toBe("R");
  });

  it("dwa różne kolory łączą się w porządku alfabetycznym", () => {
    const level = makeLevel([
      { segments: ["G", "clear", "clear", "clear"] },
      { segments: ["R", "clear", "clear", "clear"] },
    ]);
    expect(beamResultAtSlot(level, { offsets: [0, 0] }, 0)).toBe("GR");
  });

  it("ten sam kolor z dwóch pierścieni nie podwaja się", () => {
    const level = makeLevel([
      { segments: ["R", "clear", "clear", "clear"] },
      { segments: ["R", "clear", "clear", "clear"] },
    ]);
    expect(beamResultAtSlot(level, { offsets: [0, 0] }, 0)).toBe("R");
  });

  it("bloker gasi światło niezależnie od kolorów przed nim", () => {
    const level = makeLevel([
      { segments: ["R", "clear", "clear", "clear"] },
      { segments: ["blocker", "clear", "clear", "clear"] },
    ]);
    expect(beamResultAtSlot(level, { offsets: [0, 0] }, 0)).toBe("");
  });

  it("brak koloru i brak blokady to puste gniazdo", () => {
    const level = makeLevel([{ segments: ["clear", "clear", "clear", "clear"] }]);
    expect(beamResultAtSlot(level, { offsets: [0] }, 0)).toBe("");
  });
});

describe("zestaw poziomów", () => {
  it.each(levels)("$id: nie jest rozwiązany na starcie", (level) => {
    const start = createInitialState(level);
    expect(checkWin(level, start)).toBe(false);
  });

  it.each(levels)("$id: da się rozwiązać w deklarowanej liczbie ruchów", (level) => {
    const start = createInitialState(level);
    const shortest = bfsShortestSolution(level, start);
    expect(shortest).toBeGreaterThan(0);
    expect(shortest).toBe(level.parMoves);
  });

  it("identyfikatory poziomów są unikalne", () => {
    const ids = levels.map((level) => level.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
