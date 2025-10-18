import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #10b981 10%, #0ea5e9 90%)",
          color: "#fff",
          fontSize: 64,
          fontWeight: 800,
          letterSpacing: -1,
          textAlign: "center",
          padding: "40px",
        }}
      >
        Artificial Webs México
      </div>
    ),
    size
  );
}
