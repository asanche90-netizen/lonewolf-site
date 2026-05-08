import { ImageResponse } from "next/og";

export const alt = "LONE WOLF — WE DON'T BRAINSTORM. WE HUNT.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#E63946",
            fontWeight: 900,
            fontSize: 180,
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            whiteSpace: "nowrap",
          }}
        >
          LONE WOLF
        </div>
        <div
          style={{
            marginTop: 32,
            color: "#F4F1EC",
            fontWeight: 700,
            fontSize: 38,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          We don&rsquo;t brainstorm. We hunt.
        </div>
      </div>
    ),
    size,
  );
}
