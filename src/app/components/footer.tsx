export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-black/60 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Megalo Construction</p>
        <p className="text-black/40">Client Website · KOFI CRM Integration</p>
      </div>
    </footer>
  );
}
