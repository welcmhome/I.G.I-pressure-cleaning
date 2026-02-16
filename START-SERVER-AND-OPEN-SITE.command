#!/bin/bash
cd "$(dirname "$0")"

echo "Starting Next.js dev server..."
echo ""
echo "When you see 'Ready' below, the site is running."
echo "If the browser doesn't load, open http://localhost:3006 in your browser."
echo ""
npm run dev &
PID=$!
sleep 8
open "http://localhost:3006"
echo ""
echo ">>> Keep this window OPEN. Site: http://localhost:3006 — To stop: press Ctrl+C <<<"
wait $PID
