import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="rounded-3xl border border-black/10 p-12">
        <p className="text-xs uppercase tracking-widest text-black/50">
          Megalo Construction
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Build modern. Build right.
        </h1>
        <p className="mt-4 max-w-xl text-black/70">
          Residential and commercial construction with clear timelines,
          transparent costs, and disciplined execution.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-black px-6 py-3 text-sm text-white hover:bg-black/90"
          >
            Request a Quote
          </Link>
          <Link
            href="/booking"
            className="rounded-full border border-black px-6 py-3 text-sm hover:bg-black hover:text-white"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {[
          ["Design to Build", "One team from planning to completion"],
          ["Transparent Pricing", "Clear scope and honest estimates"],
          ["On-Time Delivery", "Milestone-based project execution"],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-3xl border border-black/10 p-8">
            <h3 className="font-medium">{title}</h3>
            <p className="mt-2 text-sm text-black/70">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
