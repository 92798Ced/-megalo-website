export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-semibold">Services</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          "Residential Construction",
          "Commercial Projects",
          "Renovations",
          "Project Management",
        ].map((service) => (
          <div key={service} className="rounded-3xl border border-black/10 p-8">
            <h3 className="font-medium">{service}</h3>
            <p className="mt-2 text-sm text-black/70">
              Professional planning, execution, and delivery.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
