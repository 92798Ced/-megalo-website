import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          MEGALO<span className="text-black/50">.construction</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/services" className="hover:text-black/70">Services</Link>
          <Link href="/portfolio" className="hover:text-black/70">Portfolio</Link>
          <Link href="/about" className="hover:text-black/70">About</Link>
          <Link href="/contact" className="hover:text-black/70">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
