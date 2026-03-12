"use client";

import { useState, useEffect, useCallback } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISSED_KEY = "pwa-install-dismissed";
const DISMISS_DAYS = 14;

function wasDismissedRecently(): boolean {
  if (typeof window === "undefined") return true;
  const dismissed = localStorage.getItem(DISMISSED_KEY);
  if (!dismissed) return false;
  const dismissedAt = parseInt(dismissed, 10);
  const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24);
  return daysSince < DISMISS_DAYS;
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in navigator && (navigator as { standalone?: boolean }).standalone === true)
  );
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isStandalone() || wasDismissedRecently()) return;

    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
    setIsIOS(ios);

    // On iOS, there's no beforeinstallprompt - show manual instructions after a delay
    if (ios) {
      const timer = setTimeout(() => setShowBanner(true), 4000);
      return () => clearTimeout(timer);
    }

    function onBeforeInstall(e: Event) {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowBanner(true), 3000);
    }

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstall);
  }, []);

  const dismiss = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setShowBanner(false);
      setClosing(false);
      localStorage.setItem(DISMISSED_KEY, Date.now().toString());
    }, 300);
  }, []);

  const install = useCallback(async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  }, [deferredPrompt]);

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Install app prompt"
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 transition-all duration-300 ${
        closing ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto max-w-md rounded-2xl bg-navy text-white shadow-2xl border border-white/10 overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2 sm:px-5 sm:pt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2v10m0 0l-3-3m3 3l3-3" />
                <path d="M5 16h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">Add to Home Screen</p>
              <p className="text-xs text-gray-400 leading-tight mt-0.5">dr.michaelkurr.com</p>
            </div>
          </div>
          <button
            onClick={dismiss}
            aria-label="Dismiss install prompt"
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <p className="text-sm text-gray-300 leading-relaxed mt-1">
            Install this site as an app for faster load times, offline access, and a full-screen experience.
          </p>

          {isIOS ? (
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-xs text-gray-300 leading-relaxed">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gold" aria-hidden="true">
                <path d="M12 5v14M5 12l7-7 7 7" />
                <rect x="4" y="2" width="16" height="3" rx="1" />
              </svg>
              <span>
                Tap <strong className="text-white">Share</strong> then <strong className="text-white">Add to Home Screen</strong>
              </span>
            </div>
          ) : (
            <div className="mt-3 flex gap-2">
              <button
                onClick={install}
                className="flex-1 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy hover:bg-gold-light transition-colors focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                Install
              </button>
              <button
                onClick={dismiss}
                className="rounded-lg px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                Not now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
