import Link from "next/link"

export default function AnalyticsPage() {
  return (
    <main className="mt-10 flex items-center justify-between">
      <h1 className="text-2xl">Analytics Page</h1>

      <Link
        href="/dashboard"
        className="flex space-x-2"
      >
        <span>{'<-'}</span>
        <p>Dashboard</p>
      </Link>
    </main>
  )
}
