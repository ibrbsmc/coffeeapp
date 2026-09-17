"use client";

// Render sırasında hata olursa Next bunu gösterir
export default function Error({ reset }) {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-120 px-4 text-mauve-100">
      <h1 className="font-(family-name:--font-merienda) text-xl font-bold">
        Something went wrong
      </h1>
      <p className="text-mauve-400 text-sm mt-3 max-w-sm">
        An unexpected error occurred while loading this page.
      </p>
      <button
        onClick={reset}
        className="bg-mauve-100 text-black px-5 py-2.5 rounded-md text-sm font-(family-name:--font-merienda) hover:bg-mauve-300 transition-colors duration-300 mt-8 cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
