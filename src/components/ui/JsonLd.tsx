export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrés Felipe Cano Piedrahita",
    givenName: "Andrés Felipe",
    familyName: "Cano Piedrahita",
    jobTitle: "Full Stack Developer & Engineer",
    url: "https://afcanop.vercel.app",
    email: "afcanop@gmail.com",
    telephone: "+57 301 636 7374",
    image: "https://afcanop.vercel.app/og-image.png",
    sameAs: [
      "https://github.com/afcanop",
      "https://linkedin.com/in/andres-felipe-cano-piedrahita-333410180/",
    ],
    knowsAbout: [
      "Angular",
      "Python",
      "Django",
      "PHP",
      "Laravel",
      "TypeScript",
      "JavaScript",
      "APIs REST",
      "SQL",
      "NoSQL",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressCountry: "Colombia",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
