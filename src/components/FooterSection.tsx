import { motion } from 'framer-motion'

const links = [
  { label: 'Telefon',   value: '+45 91 48 88 43',  href: 'tel:+4591488843' },
  { label: 'LinkedIn',  value: 'Alireza Makvandi', href: 'https://dk.linkedin.com/in/alireza-makvandi-446704301' },
  { label: 'Instagram', value: '@alireza__tak',    href: 'https://www.instagram.com/alireza__tak/' },
  { label: 'Adresse',   value: 'Aarhus N · DK',   href: 'https://maps.google.com/?q=Aarhus+N+8200+Danmark' },
]

export default function FooterSection() {
  return (
    <section id="contact" style={{ background: '#0C0C0C' }}>

      {/* Top: label + subtext */}
      <div className="px-5 sm:px-10 md:px-16 pt-20 sm:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-[0.35em] mb-6"
          style={{ color: '#D7E2EA', opacity: 0.35 }}
        >
          · Contact
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-light mb-10 sm:mb-14 max-w-sm"
          style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)', lineHeight: 1.7 }}
        >
          Lad os tage en snak.<br />Skriv til mig — jeg svarer hurtigt.
        </motion.p>

        {/* Giant email */}
        <div className="overflow-hidden mb-16 sm:mb-24">
          <motion.a
            href="mailto:alirezadk2016@gmail.com"
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="group relative inline-block"
            style={{ fontSize: 'clamp(2.2rem, 6.5vw, 90px)', color: '#D7E2EA', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, textTransform: 'uppercase' }}
          >
            alirezadk2016
            <br className="sm:hidden" />
            @gmail.com
            <span className="hidden sm:block absolute left-0 -bottom-1 h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: '#D7E2EA' }} />
          </motion.a>
        </div>
      </div>

      {/* Links row */}
      <div className="border-t border-[#D7E2EA]/10">
        <div className="px-5 sm:px-10 md:px-16 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {links.map(({ label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col gap-2 hover:opacity-50 transition-opacity duration-200"
            >
              <span style={{ color: '#D7E2EA', opacity: 0.3, fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                {label}
              </span>
              <span style={{ color: '#D7E2EA', fontSize: '0.95rem', fontWeight: 500 }}>
                {value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D7E2EA]/8">
        <div className="px-5 sm:px-10 md:px-16 py-6 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.07)' }} />
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border flex-shrink-0" style={{ borderColor: 'rgba(215,226,234,0.1)' }}>
            <span style={{ color: '#D7E2EA', opacity: 0.25, fontSize: '10px' }}>&lt;&gt;</span>
            <span style={{ color: '#D7E2EA', opacity: 0.2, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Crafted by</span>
            <span style={{ color: '#D7E2EA', opacity: 0.45, fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>MAK</span>
          </div>
          <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.07)' }} />
        </div>
      </div>

    </section>
  )
}
