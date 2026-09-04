"use client";

import type { Segment } from "@/lib/puzzle/types";
import { SEGMENT_FILL, SEGMENT_STROKE } from "./colors";
import { wedgePath } from "./geometry";
import styles from "./PuzzleBoard.module.css";

const GAP_DEG = 2.4;

export function Ring({
  segments,
  offset,
  cx,
  cy,
  rInner,
  rOuter,
  patternsOn,
  onActivate,
}: {
  segments: Segment[];
  offset: number;
  cx: number;
  cy: number;
  rInner: number;
  rOuter: number;
  patternsOn: boolean;
  onActivate: () => void;
}) {
  const n = segments.length;
  const angleStep = 360 / n;

  return (
    <g
      className={styles.ringGroup}
      style={{ transform: `rotate(${offset * angleStep}deg)`, transformOrigin: `${cx}px ${cy}px` }}
      onClick={onActivate}
    >
      {segments.map((segment, i) => {
        const start = i * angleStep + GAP_DEG / 2;
        const end = (i + 1) * angleStep - GAP_DEG / 2;
        const d = wedgePath(cx, cy, rInner, rOuter, start, end);
        return (
          <path key={i} d={d} fill={SEGMENT_FILL[segment]} stroke={SEGMENT_STROKE[segment]} strokeWidth={1} />
        );
      })}
      {patternsOn
        ? segments.map((segment: Segment, i) => {
            if (segment === "clear" || segment === "blocker") return null;
            const start = i * angleStep + GAP_DEG / 2;
            const end = (i + 1) * angleStep - GAP_DEG / 2;
            const d = wedgePath(cx, cy, rInner, rOuter, start, end);
            return <path key={`wzor-${i}`} d={d} fill={`url(#wzor-${segment})`} />;
          })
        : null}
    </g>
  );
}
