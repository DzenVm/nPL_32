"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { beamResultAtSlot, checkWin, createInitialState, rotateRing } from "@/lib/puzzle/engine";
import { levels } from "@/lib/puzzle/levels";
import { getServerSolvedSnapshot, getSolvedSnapshot, markLevelSolved, subscribeSolved } from "@/lib/progress";
import type { BoardState } from "@/lib/puzzle/types";
import { COLOR_NAME, RESULT_COLOR } from "./colors";
import { polarToCartesian } from "./geometry";
import { Ring } from "./Ring";
import styles from "./PuzzleBoard.module.css";

const OUTER_R = 188;
const CORE_R = 52;
const RING_GAP = 5;
const CENTER = 200;
const RING_NAMES = ["zewnętrzny", "środkowy", "wewnętrzny", "rdzeniowy"];

export function PuzzleBoard() {
  const [levelIndex, setLevelIndex] = useState(0);
  const level = levels[levelIndex]!;
  const [state, setState] = useState<BoardState>(() => createInitialState(level));
  const [moves, setMoves] = useState(0);
  const [patternsOn, setPatternsOn] = useState(false);
  const solved = useSyncExternalStore(subscribeSolved, getSolvedSnapshot, getServerSolvedSnapshot);

  const won = useMemo(() => checkWin(level, state), [level, state]);

  useEffect(() => {
    if (won) markLevelSolved(level.id);
  }, [won, level.id]);

  function selectLevel(index: number) {
    const nextLevel = levels[index]!;
    setLevelIndex(index);
    setState(createInitialState(nextLevel));
    setMoves(0);
  }

  function rotate(ringIndex: number, direction: 1 | -1) {
    if (won) return;
    setState((prev) => rotateRing(level, prev, ringIndex, direction));
    setMoves((m) => m + 1);
  }

  function reset() {
    setState(createInitialState(level));
    setMoves(0);
  }

  const bandWidth = (OUTER_R - CORE_R - RING_GAP * (level.rings.length - 1)) / level.rings.length;
  const angleStep = 360 / level.segmentCount;
  const ringRadii = level.rings.map((_, i) => {
    const outer = OUTER_R - i * (bandWidth + RING_GAP);
    return { inner: outer - bandWidth, outer };
  });

  return (
    <div>
      <div className={styles.levelTabs} role="tablist" aria-label="Wybór poziomu demo">
        {levels.map((lvl, index) => (
          <button
            key={lvl.id}
            type="button"
            role="tab"
            aria-selected={index === levelIndex}
            className={
              index === levelIndex
                ? `${styles.levelTab} ${styles.levelTabActive}`
                : solved.has(lvl.id)
                  ? `${styles.levelTab} ${styles.levelTabSolved}`
                  : styles.levelTab
            }
            onClick={() => selectLevel(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className={styles.wrapper}>
        <div className={styles.stage}>
          <h3 className={styles.levelTitle}>{level.title}</h3>
          <p className={styles.levelIntro}>{level.intro}</p>

          <div className={styles.boardFrame}>
            <svg viewBox="0 0 400 400" role="img" aria-labelledby={`plansza-opis-${level.id}`}>
              <title id={`plansza-opis-${level.id}`}>{`Plansza z ${level.rings.length} obracanymi pierścieniami i ${level.targets.length} odbiornikami światła.`}</title>
              <defs>
                <pattern id="wzor-R" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="6" stroke="white" strokeOpacity="0.55" strokeWidth="1.6" />
                </pattern>
                <pattern id="wzor-G" width="7" height="7" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.3" fill="white" fillOpacity="0.6" />
                </pattern>
                <pattern id="wzor-B" width="6" height="6" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="6" y2="0" stroke="white" strokeOpacity="0.5" strokeWidth="1.4" />
                  <line x1="0" y1="0" x2="0" y2="6" stroke="white" strokeOpacity="0.5" strokeWidth="1.4" />
                </pattern>
              </defs>

              {level.targets.map((target) => {
                const angle = target.slot * angleStep + angleStep / 2;
                const outerPoint = polarToCartesian(CENTER, CENTER, OUTER_R + 6, angle);
                const innerPoint = polarToCartesian(CENTER, CENTER, CORE_R - 6, angle);
                return (
                  <line
                    key={`guide-${target.slot}`}
                    x1={outerPoint.x}
                    y1={outerPoint.y}
                    x2={innerPoint.x}
                    y2={innerPoint.y}
                    stroke={RESULT_COLOR[target.required]}
                    strokeOpacity={0.28}
                    strokeDasharray="2 4"
                    strokeWidth={1.5}
                  />
                );
              })}

              {level.rings.map((ring, i) => (
                <Ring
                  key={i}
                  segments={ring.segments}
                  offset={state.offsets[i] ?? 0}
                  cx={CENTER}
                  cy={CENTER}
                  rInner={ringRadii[i]!.inner}
                  rOuter={ringRadii[i]!.outer}
                  patternsOn={patternsOn}
                  onActivate={() => rotate(i, 1)}
                />
              ))}

              <circle cx={CENTER} cy={CENTER} r={CORE_R - 8} fill="#0c0f14" stroke="var(--color-border-strong)" />

              {level.targets.map((target) => {
                const angle = target.slot * angleStep + angleStep / 2;
                const point = polarToCartesian(CENTER, CENTER, CORE_R - 22, angle);
                const current = beamResultAtSlot(level, state, target.slot);
                const isMet = current === target.required;
                return (
                  <g key={target.slot}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={13}
                      fill="none"
                      stroke={RESULT_COLOR[target.required]}
                      strokeOpacity={0.5}
                      strokeWidth={2}
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={8}
                      fill={RESULT_COLOR[current]}
                      style={{ color: RESULT_COLOR[current] }}
                      className={isMet ? `${styles.receptor} ${styles.receptorSolved}` : styles.receptor}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          <p className="visually-hidden" role="status" aria-live="polite">
            {won
              ? `Poziom rozwiązany w ${moves} ruchach.`
              : level.targets
                  .map((target, idx) => {
                    const current = beamResultAtSlot(level, state, target.slot);
                    return `Odbiornik ${idx + 1}: potrzebuje ${COLOR_NAME[target.required]}, obecnie ${COLOR_NAME[current]}.`;
                  })
                  .join(" ")}
          </p>

          <div className={styles.legend}>
            {(Object.keys(COLOR_NAME) as Array<keyof typeof COLOR_NAME>)
              .filter((key) => key !== "")
              .map((key) => (
                <span key={key} className={styles.legendSwatch}>
                  <span className={styles.legendDot} style={{ background: RESULT_COLOR[key] }} />
                  {COLOR_NAME[key]}
                </span>
              ))}
          </div>
        </div>

        <div className={styles.panel}>
          {won ? (
            <div className={styles.winBanner}>
              Rdzeń otwarty w {moves} {moves === 1 ? "ruchu" : "ruchach"} (najkrótsze możliwe rozwiązanie to{" "}
              {level.parMoves}).
            </div>
          ) : null}

          <div className={styles.ringControls}>
            {level.rings.map((_, i) => (
              <div className={styles.ringControlRow} key={i}>
                <span>Pierścień {RING_NAMES[i] ?? i + 1}</span>
                <div className={styles.ringButtons}>
                  <button
                    type="button"
                    className={styles.ringButton}
                    onClick={() => rotate(i, -1)}
                    disabled={won}
                    aria-label={`Obróć pierścień ${RING_NAMES[i] ?? i + 1} w lewo`}
                  >
                    ⟲
                  </button>
                  <button
                    type="button"
                    className={styles.ringButton}
                    onClick={() => rotate(i, 1)}
                    disabled={won}
                    aria-label={`Obróć pierścień ${RING_NAMES[i] ?? i + 1} w prawo`}
                  >
                    ⟳
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.stats}>
            <span>
              Ruchy: <strong>{moves}</strong>
            </span>
            <span>
              Rekord planszy: <strong>{level.parMoves}</strong>
            </span>
          </div>

          <label className={styles.toggleRow}>
            <input type="checkbox" checked={patternsOn} onChange={(event) => setPatternsOn(event.target.checked)} />
            Wzory zamiast samego koloru
          </label>

          <div className={styles.actionsRow}>
            <button type="button" className={styles.actionButton} onClick={reset}>
              Zacznij od nowa
            </button>
            {won ? (
              <button type="button" className={styles.actionButton} onClick={() => selectLevel((levelIndex + 1) % levels.length)}>
                Następny poziom
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
