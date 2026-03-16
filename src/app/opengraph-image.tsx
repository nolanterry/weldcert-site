import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WeldCert — Welder Certification Tracking Made Simple";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #FF6B00 0%, #FF9A40 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#FF6B00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "white",
            }}
          >
            WC
          </div>
          <span style={{ color: "#FF6B00", fontSize: "28px", fontWeight: 700 }}>
            WeldCert
          </span>
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          Welder Certification Tracking Made Simple
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          Track qualifications, prevent lapses, generate audit reports. Smart alerts for AWS D1.1, ASME IX, and API 1104.
        </div>
        <div style={{ display: "flex", marginTop: "32px" }}>
          <div
            style={{
              background: "#FF6B00",
              color: "white",
              padding: "12px 32px",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Try Free for 14 Days → weldcert.io
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
