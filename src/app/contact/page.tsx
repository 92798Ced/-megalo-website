"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const payload = {
      full_name: (form.fullName as any).value.trim(),
      email: (form.email as any).value.trim(),
      phone: (form.phone as any).value.trim(),
      project_type: (form.projectType as any).value,
      message: (form.message as any).value.trim(),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Submission failed.");

      router.push(`/thank-you?ref=${encodeURIComponent(json.ref)}`);
    } catch (err: any) {
      alert(err.message || "Submission failed.");
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
