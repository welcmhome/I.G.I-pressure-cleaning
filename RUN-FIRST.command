#!/bin/bash
cd "$(dirname "$0")"

clear
echo "=============================================="
echo "  In & Out Pest Control — Starting the site"
echo "=============================================="
echo ""

# Free the port so we get a clean Next server (not an old Python/other server)
echo ">>> Freeing port 3006..."
lsof -ti:3006 | xargs kill -9 2>/dev/null || true
sleep 2

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo ">>> Installing dependencies (first time only)..."
  npm install
  echo ""
fi

# Start the Next.js dev server
echo ">>> Starting Next.js server..."
npm run dev &
PID=$!

echo ">>> Waiting for server to be ready..."
sleep 10

echo ""
echo ">>> Opening your browser at http://localhost:3006"
open "http://localhost:3006"

echo ""
echo "=============================================="
echo "  SERVER IS RUNNING"
echo "  Site URL: http://localhost:3006"
echo ""
echo "  >>> KEEP THIS WINDOW OPEN <<<"
echo "  Closing it will stop the site."
echo ""
echo "  To stop: press Ctrl+C"
echo "=============================================="
echo ""

wait $PID
