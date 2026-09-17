import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// notFound() çağrılınca veya olmayan route'ta gösterilir
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-120 px-4 text-mauve-100">
      <p className="font-(family-name:--font-merienda) text-5xl font-bold">404</p>
      <h1 className="font-(family-name:--font-merienda) text-xl font-bold mt-4">
        Page Not Found
      </h1>
      <p className="text-mauve-400 text-sm mt-3 max-w-sm">
        The page you are looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-mauve-100 text-black px-5 py-2.5 rounded-md text-sm font-(family-name:--font-merienda) hover:bg-mauve-300 transition-colors duration-300 mt-8"
      >
        <ArrowLeft size={14} />
        Back to Home
      </Link>
    </div>
  );
}
