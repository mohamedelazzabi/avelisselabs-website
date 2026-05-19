import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #FFF7FB, #E5E7FF)",
          color: "#101321",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 800, color: "#FF7EB6" }}>Avelisse Labs</div>
        <div style={{ marginTop: 34, maxWidth: 850, fontSize: 72, lineHeight: 1.05, fontWeight: 900 }}>
          Building Smart Mobile Apps for Everyday Wellness
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#5B6275" }}>
          Pregnancy, fitness, calories, cycle tracking, family, and AI-powered tools.
        </div>
      </div>
    ),
    size,
  );
}
