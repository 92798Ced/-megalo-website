import { supabaseAdmin } from "@/lib/supabaseAdmin";

type LeadRow = {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string | null;
  project_type: string;
  message: string;
  source: string;
  status?: string | null;
};

export const dynamic = "force-dynamic"; // always fetch latest on refresh

export default async function AdminLeadsPage() {
  const { data, error } = await supabaseAdmin
    .from("public_leads")
    .select("id, created_at, full_name, email, phone, project_type, message, source, status")
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) {
    return (
      <div className="max-w-5xl p-8">
        <h1 className="text-2xl font-semibold">Admin • Leads</h1>
        <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm">
          Failed to load leads: {error.message}
        </p>
      </div>
    );
  }

  const leads = (data ?? []) as LeadRow[];

  return (
    <div className="max-w-6xl p-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Admin • Leads</h1>
          <p className="mt-1 text-sm text-black/60">
            Latest inquiries from the Megalo website.
          </p>
        </div>

        <a
          href="/"
          className="rounded-full border border-black/15 px-4 py-2 text-sm hover:bg-black/[0.03]"
        >
          Back to site
        </a>
      </div>

      <div className="mt-6 rounded-2xl border border-black/10 bg-white">
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <p className="text-sm">
            Total: <span className="font-semibold">{leads.length}</span>
          </p>
          <p className="text-xs text-black/50">
            Tip: refresh to see new submissions
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left text-sm">
            <thead className="border-b border-black/10 bg-black/[0.02]">
              <tr>
                <th className="px-5 py-3 font-medium">Created</th>
                <th className="px-5 py-3 font-medium">Client</th>
                <th className="px-5 py-3 font-medium">Contact</th>
                <th className="px-5 py-3 font-medium">Project</th>
                <th className="px-5 py-3 font-medium">Message</th>
                <th className="px-5 py-3 font-medium">Source</th>
              </tr>
            </thead>

            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td className="px-5 py-6 text-black/60" colSpan={6}>
                    No leads yet. Submit one via the Contact page.
                  </td>
                </tr>
              ) : (
                leads.map((l) => (
                  <tr key={l.id} className="border-b border-black/5 align-top">
                    <td className="px-5 py-4 whitespace-nowrap text-black/70">
                      {new Date(l.created_at).toLocaleString()}
                    </td>

                    <td className="px-5 py-4">
                      <p className="font-medium">{l.full_name}</p>
                      <p className="mt-1 font-mono text-xs text-black/45">
                        {l.id}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-black/80">{l.email}</p>
                      <p className="mt-1 text-black/60">{l.phone ?? "—"}</p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="font-medium">{l.project_type}</p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="max-w-[360px] whitespace-pre-wrap text-black/80">
                        {l.message}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-black/70">{l.source}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
