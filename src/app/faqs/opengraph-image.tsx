import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0891b2 10%, #10b981 90%)",
        color: "#fff",
        fontSize: 64,
        fontWeight: 800,
        letterSpacing: -1,
        textAlign: "center",
        padding: "40px",
      }}>
        Preguntas Frecuentes · Artificial Webs
      </div>
    ),
    size
  );
}
