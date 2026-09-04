import type { BoardState, ColorKey, LevelDefinition, Primary, Segment } from "./types";

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

export function createInitialState(level: LevelDefinition): BoardState {
  return { offsets: [...level.initialOffsets] };
}

export function isSolvedLayout(level: LevelDefinition): BoardState {
  return { offsets: level.rings.map(() => 0) };
}

export function rotateRing(
  level: LevelDefinition,
  state: BoardState,
  ringIndex: number,
  direction: 1 | -1,
): BoardState {
  const current = state.offsets[ringIndex];
  if (current === undefined) {
    throw new RangeError(`Nieprawidłowy indeks pierścienia: ${ringIndex}`);
  }
  const offsets = state.offsets.slice();
  offsets[ringIndex] = mod(current + direction, level.segmentCount);
  return { offsets };
}

function segmentAtSlot(segments: Segment[], offset: number, slot: number): Segment {
  const physicalIndex = mod(slot - offset, segments.length);
  const segment = segments[physicalIndex];
  if (segment === undefined) {
    throw new RangeError("Gniazdo poza zakresem pierścienia.");
  }
  return segment;
}

function canonicalColorKey(colors: Set<Primary>): ColorKey {
  return Array.from(colors).sort().join("") as ColorKey;
}

export function beamResultAtSlot(level: LevelDefinition, state: BoardState, slot: number): ColorKey {
  const colors = new Set<Primary>();
  let blocked = false;

  level.rings.forEach((ring, ringIndex) => {
    const offset = state.offsets[ringIndex] ?? 0;
    const segment = segmentAtSlot(ring.segments, offset, slot);
    if (segment === "blocker") {
      blocked = true;
    } else if (segment !== "clear") {
      colors.add(segment);
    }
  });

  if (blocked || colors.size === 0) return "";
  return canonicalColorKey(colors);
}

export function checkWin(level: LevelDefinition, state: BoardState): boolean {
  return level.targets.every((target) => beamResultAtSlot(level, state, target.slot) === target.required);
}

export function countRemainingTargets(level: LevelDefinition, state: BoardState): number {
  return level.targets.filter((target) => beamResultAtSlot(level, state, target.slot) !== target.required).length;
}
