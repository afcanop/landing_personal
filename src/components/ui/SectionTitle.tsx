export default function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-2">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tighter text-text-primary">
        {children}
      </h2>
    </div>
  )
}
