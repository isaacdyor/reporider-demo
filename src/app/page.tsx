export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-8">
      <div className="max-w-3xl text-center">
        <h1 className="mb-6 text-5xl font-bold">Welcome to My Landing Page</h1>
        <p className="mb-8 text-xl text-gray-600">
          A modern and minimal landing page built with Next.js and Tailwind CSS.
        </p>
        <button className="rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </main>
  );
}
