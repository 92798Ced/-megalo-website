export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { ref?: string };
}) {
  const ref = searchParams?.ref;

  return (
    <div className="max-w-2xl rounded-3xl border border-black/10 p-10">
      <h2 className="text-3xl font-semibold tracking-tight">Thank you.</h2>
      <p className="mt-2 text-black/70">
        Your request has been received. We’ll contact you shortly.
      </p>

      <div className="mt-6 rounded-2xl bg-black/[0.03] p-6">
        <p className="text-xs uppercase tracking-widest text-black/50">Reference</p>
        <p className="mt-2 font-mono text-lg">{ref ?? "N/A"}</p>
      </div>
    </div>
  );
}
