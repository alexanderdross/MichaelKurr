import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt =
  "Dr. Kurr Advisory - Fractional C-Level & Transformation Advisory for Pharma & Life Sciences";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const imageData = readFileSync(
    join(process.cwd(), "public/images/profile.jpg")
  );
  const profileSrc = `data:image/jpeg;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background:
            "linear-gradient(135deg, #111D35 0%, #1B2A4A 50%, #243558 100%)",
          display: "flex",
          alignItems: "center",
          padding: "60px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <img
          src={profileSrc}
          width={180}
          height={180}
          style={{ borderRadius: "50%", border: "3px solid #C9A84C" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "50px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{ width: "40px", height: "2px", background: "#C9A84C" }}
            />
            <span
              style={{
                color: "#C9A84C",
                fontSize: "14px",
                letterSpacing: "4px",
              }}
            >
              ADVISORY SERVICES
            </span>
          </div>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "44px",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            Strategic Clarity. Scalable Models. Profitable Growth.
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "22px",
              lineHeight: 1.4,
              maxWidth: "650px",
            }}
          >
            Fractional C-Level & Transformation Advisory for Pharma & Life
            Sciences
          </p>
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "14px",
              marginTop: "auto",
            }}
          >
            Dr. Kurr Advisory · dr.michaelkurr.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
