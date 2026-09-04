import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0e13",
        }}
      >
        <div
          style={{
            width: 340,
            height: 340,
            borderRadius: "50%",
            border: "26px solid #46c4b3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 190,
              height: 190,
              borderRadius: "50%",
              border: "26px solid #e5a13a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#fff3d9",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { width: 512, height: 512 },
  );
}
