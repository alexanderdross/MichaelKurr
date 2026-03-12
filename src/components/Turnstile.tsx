"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/** Load the Turnstile script lazily (once) and resolve when ready. */
function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return reject();
    if (window.turnstile) {
      resolve();
      return;
    }

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      // Script tag exists but hasn't loaded yet - wait for it
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject());
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject());
    document.head.appendChild(script);
  });
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
}

export default function Turnstile({ onVerify, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  const handleVerify = useCallback((token: string) => onVerify(token), [onVerify]);
  const handleExpire = useCallback(() => onExpire?.(), [onExpire]);

  // Lazy-load script via IntersectionObserver - only when widget scrolls into view
  useEffect(() => {
    if (!SITE_KEY || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadScript()
            .then(() => setLoaded(true))
            .catch(() => {});
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Render widget once script is loaded
  useEffect(() => {
    if (!loaded || !containerRef.current || !window.turnstile) return;

    // Clean up previous widget if any
    if (widgetIdRef.current !== null) {
      window.turnstile.remove(widgetIdRef.current);
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      callback: handleVerify,
      "expired-callback": handleExpire,
      theme: "light",
    });

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [loaded, handleVerify, handleExpire]);

  if (!SITE_KEY) return null;

  return (
    <div className="mt-4 mb-2">
      <div
        ref={containerRef}
        className="min-h-[70px] flex items-center"
      >
        {!loaded && (
          <p className="text-xs text-charcoal/40">Loading verification&hellip;</p>
        )}
      </div>
    </div>
  );
}
