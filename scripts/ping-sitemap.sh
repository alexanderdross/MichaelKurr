#!/bin/sh
# Ping search engines with the sitemap URL after deploy
# Usage: ./scripts/ping-sitemap.sh

SITEMAP_URL="https://dr.michaelkurr.com/sitemap.xml"

echo "Pinging Google..."
curl -s "https://www.google.com/ping?sitemap=${SITEMAP_URL}" > /dev/null 2>&1
echo "Done."

echo "Pinging Bing..."
curl -s "https://www.bing.com/ping?sitemap=${SITEMAP_URL}" > /dev/null 2>&1
echo "Done."

echo "Sitemap ping complete: ${SITEMAP_URL}"
