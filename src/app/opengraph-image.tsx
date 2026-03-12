import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Dr. Michael Kurr - Operator & Transformation Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          width={320}
          height={320}
          style={{
            borderRadius: "50%",
            border: "4px solid #C9A84C",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "60px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "2px",
                background: "#C9A84C",
              }}
            />
            <span
              style={{
                color: "#C9A84C",
                fontSize: "16px",
                letterSpacing: "4px",
              }}
            >
              DR. KURR ADVISORY
            </span>
          </div>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Dr. Michael Kurr
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "24px",
              lineHeight: 1.4,
            }}
          >
            Operator & Transformation Leader · Fractional C-Level · Pharma &
            Life Sciences
          </p>
          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "16px",
              marginTop: "auto",
            }}
          >
            dr.michaelkurr.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
