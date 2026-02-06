"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      // Frontend-only placeholder for now (no API yet)
      await new Promise((r) => setTimeout(r, 800));
      alert("Submitted (placeholder). Next step: connect to Supabase API.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight">Request a Quote</h2>
      <p className="mt-2 text-black/70">
        Tell us about your project. We’ll contact you shortly.
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-8 rounded-3xl border border-black/10 p-8 space-y-4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <input
            name="fullName"
            placeholder="Full name *"
            required
            className="h-11 rounded-xl border border-black/15 px-4 outline-none focus:border-black"
          />
          <input
            name="email"
            type="email"
            placeholder="Email *"
            required
            className="h-11 rounded-xl border border-black/15 px-4 outline-none focus:border-black"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            name="phone"
            placeholder="Phone (optional)"
            className="h-11 rounded-xl border border-black/15 px-4 outline-none focus:border-black"
          />
          <select
            name="projectType"
            defaultValue="Residential"
            className="h-11 rounded-xl border border-black/15 px-4 outline-none focus:border-black bg-white"
          >
            <option>Residential</option>
            <option>Commercial</option>
            <option>Renovation</option>
            <option>Estimate Only</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Project details *"
          required
          rows={6}
          className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black"
        />

        <button
          disabled={loading}
          className="w-full rounded-full bg-black px-5 py-3 text-sm text-white hover:bg-black/90 transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
