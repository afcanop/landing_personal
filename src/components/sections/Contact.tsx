"use client"

import FadeIn from "@/components/ui/FadeIn"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 max-w-7xl mx-auto border-t border-neon-cyan/10 text-center">
      <FadeIn>
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tighter">
            Vamos a <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">conectar</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary">
            ¿Tienes un proyecto en mente? Me encantaría conversar contigo
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="flex justify-center gap-10 flex-wrap mb-12">
          <ContactLink href="mailto:afcanop@gmail.com" label="✉️ Email" />
          <ContactLink href="tel:+573016367374" label="📞 WhatsApp" />
          <ContactLink href="https://github.com/afcanop" label="💻 GitHub" />
          <ContactLink
            href="https://linkedin.com/in/andres-felipe-cano-piedrahita-333410180/"
            label="💼 LinkedIn"
          />
        </div>
      </FadeIn>
    </section>
  )
}

function ContactLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-neon-cyan font-bold text-base sm:text-lg no-underline transition-all duration-300 flex items-center gap-3 hover:text-neon-magenta hover:translate-x-1"
    >
      {label}
    </a>
  )
}
