import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-serif text-8xl md:text-9xl text-gold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl text-ivory-50 mb-4">
          Page Not Found
        </h2>
        <p className="text-ivory-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="bg-gold hover:bg-gold-light text-ivory-950 font-semibold"
          >
            <Link href="/">Go Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-ivory-700 text-ivory-300"
          >
            <Link href="/work">View Our Work</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
