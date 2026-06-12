export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-neon-cyan/10 py-8 text-center text-text-tertiary">
      <div className="max-w-7xl mx-auto px-8">
        <p>&copy; {year} Andrés Felipe Cano Piedrahita. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
