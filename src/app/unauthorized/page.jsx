import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">401</h1>

        <h2 className="text-2xl font-semibold mb-2">
          Unauthorized Access
        </h2>

        <p className="text-gray-600 mb-6">
          Sorry, you do not have permission to access this page.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Go Home
          </Link>

          <Link
            href="auth/signin"
            className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}