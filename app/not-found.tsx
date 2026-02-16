import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8 text-center">
      <h1 className="text-2xl font-bold mb-2">Page not found</h1>
      <p className="text-gray-400 mb-6">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-400"
      >
        Go to home
      </Link>
    </div>
  )
}
