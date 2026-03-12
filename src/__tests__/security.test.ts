import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Security: manifest.json", () => {
  const manifestPath = path.resolve(__dirname, "../../public/manifest.json");

  it("exists and is valid JSON", () => {
    const raw = fs.readFileSync(manifestPath, "utf-8");
    const manifest = JSON.parse(raw);
    expect(manifest.name).toBe("Dr. Michael Kurr - Pharma & Life Sciences Advisory");
    expect(manifest.short_name).toBe("Dr. Kurr");
    expect(manifest.display).toBe("standalone");
    expect(manifest.theme_color).toBe("#1B2A4A");
  });

  it("has icons configured", () => {
    const raw = fs.readFileSync(manifestPath, "utf-8");
    const manifest = JSON.parse(raw);
    expect(manifest.icons.length).toBeGreaterThanOrEqual(1);
  });
});

describe("Security: service worker", () => {
  const swPath = path.resolve(__dirname, "../../public/sw.js");

  it("exists", () => {
    expect(fs.existsSync(swPath)).toBe(true);
  });

  it("handles only GET requests", () => {
    const content = fs.readFileSync(swPath, "utf-8");
    expect(content).toContain('request.method !== "GET"');
  });

  it("skips cross-origin requests", () => {
    const content = fs.readFileSync(swPath, "utf-8");
    expect(content).toContain("url.origin !== self.location.origin");
  });

  it("uses network-first for navigation requests", () => {
    const content = fs.readFileSync(swPath, "utf-8");
    expect(content).toContain('request.mode === "navigate"');
  });
});

describe("Security: robots.txt", () => {
  const robotsPath = path.resolve(__dirname, "../../public/robots.txt");

  it("exists", () => {
    expect(fs.existsSync(robotsPath)).toBe(true);
  });
});

describe("Security: next.config headers", () => {
  it("includes CSP header in config source", async () => {
    const configPath = path.resolve(__dirname, "../../next.config.ts");
    const content = fs.readFileSync(configPath, "utf-8");
    expect(content).toContain("Content-Security-Policy");
    expect(content).toContain("X-Content-Type-Options");
    expect(content).toContain("X-Frame-Options");
    expect(content).toContain("Strict-Transport-Security");
    expect(content).toContain("Referrer-Policy");
    expect(content).toContain("Permissions-Policy");
    expect(content).toContain("frame-ancestors 'none'");
  });
});
