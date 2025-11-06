import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          Course Not Found
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          The requested course or city is not available. Please check the URL or
          try selecting from the available options below.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            className="inline-flex items-center px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
            href="/"
          >
            Go to Home
          </Link>
          <Link
            className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
            href="/"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

