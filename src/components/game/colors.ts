import type { ColorKey, Segment } from "@/lib/puzzle/types";

export const RESULT_COLOR: Record<ColorKey, string> = {
  "": "#1c2029",
  R: "#ef5b4f",
  G: "#5bcb6e",
  B: "#5390f0",
  BG: "#57d6c9",
  BR: "#e072c9",
  GR: "#e8c24a",
  BGR: "#f4f3ec",
};

export const SEGMENT_FILL: Record<Segment, string> = {
  clear: "rgba(238, 241, 246, 0.05)",
  blocker: "#181c24",
  R: "rgba(239, 91, 79, 0.6)",
  G: "rgba(91, 203, 110, 0.6)",
  B: "rgba(83, 144, 240, 0.6)",
};

export const SEGMENT_STROKE: Record<Segment, string> = {
  clear: "rgba(238, 241, 246, 0.12)",
  blocker: "rgba(0, 0, 0, 0.4)",
  R: "rgba(239, 91, 79, 0.9)",
  G: "rgba(91, 203, 110, 0.9)",
  B: "rgba(83, 144, 240, 0.9)",
};

export const COLOR_NAME: Record<ColorKey, string> = {
  "": "ciemno",
  R: "czerwień",
  G: "zieleń",
  B: "błękit",
  BG: "turkus",
  BR: "purpura",
  GR: "żółć",
  BGR: "biel",
};
