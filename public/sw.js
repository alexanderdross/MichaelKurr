/// <reference lib="webworker" />

const CACHE_VERSION = 6;
const CACHE_NAME = `mk-v${CACHE_VERSION}`;
const OFFLINE_URL = "/offline.html";

// Core assets to precache on install — all pages for full offline support
const PRECACHE_URLS = [
  "/",
  "/offline.html",
  "/icon",
  "/apple-icon",
  "/manifest.json",
  // Top-level pages
  "/advisory/",
  "/contact/",
  "/transformation-circus/",
  "/imprint/",
  "/privacy-policy/",
  // Advisory service subpages
  "/advisory/fractional-c-level-leadership/",
  "/advisory/global-operating-model-design/",
  "/advisory/ai-digital-strategy/",
  "/advisory/commercial-medical-operations/",
  "/advisory/strategic-partnerships-alliances/",
  "/advisory/organizational-design-people-strategy/",
  // Expertise subpages
  "/expertise/corporate-transformation/",
  "/expertise/process-reengineering/",
  "/expertise/commercial-medical-operations/",
  "/expertise/cooperation-management/",
  "/expertise/digital-ai-strategy/",
  "/expertise/people-leadership/",
  // Leadership subpages
  "/leadership/transparency/",
  "/leadership/respect/",
  "/leadership/empowerment/",
  "/leadership/fairness/",
  "/leadership/vision/",
  // Industries subpages
  "/industries/pharma-biotech/",
  "/industries/medtech-diagnostics/",
  "/industries/life-sciences-services/",
  "/industries/healthtech-digital-health/",
  "/industries/automotive-mobility/",
  "/industries/industrial-manufacturing/",
  "/industries/technology-saas/",
  "/industries/energy-chemicals/",
  "/industries/consumer-goods/",
  "/industries/financial-services/",
  "/industries/investors-venture-capital/",
  "/industries/boards-governance/",
  "/industries/executive-education/",
  "/industries/expert-networks/",
  "/industries/interim-turnaround/",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Skip non-same-origin requests (analytics, external CDNs, etc.)
  if (url.origin !== self.location.origin) return;

  // Network-first for navigation (HTML pages)
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // Cache-first for static assets (JS, CSS, fonts, images)
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/_next/image") ||
    url.pathname.match(/\.(woff2?|ttf|otf|css|js|png|jpg|jpeg|svg|webp|ico|avif)$/)
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return response;
          })
      )
    );
    return;
  }

  // Cache-first for manifest and icons
  if (
    url.pathname === "/manifest.json" ||
    url.pathname === "/icon" ||
    url.pathname === "/apple-icon" ||
    url.pathname.startsWith("/icon-")
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return response;
          })
      )
    );
    return;
  }

  // Stale-while-revalidate for everything else
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetched = fetch(request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      });
      return cached || fetched;
    })
  );
});
