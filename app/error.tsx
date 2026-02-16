'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8 text-center">
      <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
      <p className="text-gray-400 mb-6 max-w-md">{error.message}</p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-400"
      >
        Try again
      </button>
    </div>
  )
}
