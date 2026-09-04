import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Obracasz szkło, dopóki światło nie powie: tak — przeglądarkowa łamigłówka logiczna";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [fraunces, plexSans] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fraunces-600.woff")),
    readFile(join(process.cwd(), "src/assets/plex-sans-400.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b0e13",
          padding: 80,
          fontFamily: "Plex Sans",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 640 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              color: "#7bdfd0",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            przeglądarkowa gra logiczna
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontSize: 56,
              lineHeight: 1.2,
              color: "#eef1f6",
            }}
          >
            Obracasz szkło, dopóki światło nie powie: tak.
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a9b1c2", marginTop: 32 }}>
            bez rejestracji · bez presji czasu · po polsku
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              width: 320,
              height: 320,
              borderRadius: "50%",
              border: "22px solid #46c4b3",
              opacity: 0.85,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 185,
                height: 185,
                borderRadius: "50%",
                border: "22px solid #e5a13a",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", width: 60, height: 60, borderRadius: "50%", background: "#fff3d9" }} />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Plex Sans", data: plexSans, weight: 400, style: "normal" },
      ],
    },
  );
}
