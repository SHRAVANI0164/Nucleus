"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold">College Portal</div>
        <div className="flex items-center space-x-6">
          <Link href="/dashboard/profile">Profile</Link>
          <Link href="/dashboard/history">Application History</Link>
          <button className="bg-white text-indigo-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <main className="flex-1 p-10 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Welcome to Your Dashboard
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/dashboard/exam"
            className="bg-white p-6 rounded-2xl shadow-md transform transition hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">
              Exam Section
            </h3>
            <p className="text-gray-600 mb-4">
              View exam schedules, results, and notices.
            </p>
            <button className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition">
              Go to Exam Section
            </button>
          </Link>

          <Link
            href="/dashboard/admin"
            className="bg-white p-6 rounded-2xl shadow-md transform transition hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">
              Admin Office
            </h3>
            <p className="text-gray-600 mb-4">
              Access forms, certificates, and student records.
            </p>
            <button className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition">
              Go to Admin Office
            </button>
          </Link>

          <Link
            href="/dashboard/library"
            className="bg-white p-6 rounded-2xl shadow-md transform transition hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">
              Library
            </h3>
            <p className="text-gray-600 mb-4">
              Search books, renew loans, and check availability.
            </p>
            <button className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition">
              Go to Library
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
