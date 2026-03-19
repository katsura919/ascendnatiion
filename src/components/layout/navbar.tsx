import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 pt-6 pb-2 bg-gradient-to-b from-background/80 to-transparent pointer-events-none">
      <nav className="mx-auto w-[95%] max-w-7xl bg-secondary text-secondary-foreground rounded-full px-6 py-4 flex items-center justify-between shadow-lg pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
            O
          </div>
          <span className="text-2xl font-heading font-bold tracking-wide">Olivia.</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-base font-medium">
          <Link href="#" className="text-primary font-semibold underline decoration-2 underline-offset-4 decoration-primary">Home</Link>
          <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Services</Link>
          <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">About</Link>
          <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Projects</Link>
          <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Blogs</Link>
          <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Testimonials</Link>
        </div>

        <Link href="#" className="bg-background text-foreground px-8 py-3 rounded-full text-sm font-bold hover:bg-background/90 transition-colors hidden sm:block">
          Contact Me
        </Link>
      </nav>
    </div>
  );
}