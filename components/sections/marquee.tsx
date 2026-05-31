const words = [
  "Klarheit",
  "Wachstum",
  "Leichtigkeit",
  "Authentizität",
  "Eleganz",
  "Mut",
  "Selbstvertrauen",
  "Fülle",
];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <section className="overflow-hidden border-y border-greige/20 bg-seasalt/50 py-7">
      <div className="marquee-track items-center">
        {row.map((w, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-8 font-display text-2xl font-light italic text-clay md:text-3xl">
              {w}
            </span>
            <span className="text-taupe/45">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
