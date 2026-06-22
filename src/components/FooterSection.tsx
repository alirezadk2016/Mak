import { motion } from 'framer-motion'

const links = [
  { label: 'Telefon',   value: '+45 91 48 88 43',  href: 'tel:+4591488843' },
  { label: 'LinkedIn',  value: 'Alireza Makvandi', href: 'https://dk.linkedin.com/in/alireza-makvandi-446704301' },
  { label: 'Instagram', value: '@alireza__tak',    href: 'https://www.instagram.com/alireza__tak/' },
  { label: 'Adresse',   value: 'Aarhus N · DK',   href: 'https://maps.google.com/?q=Aarhus+N+8200+Danmark' },
]

export default function FooterSection() {
  return (
    <section id="contact" style={{ background: '#0C0C0C' }} className="overflow-hidden">
      <div className="px-5 sm:px-10 md:px-16 pt-16 sm:pt-24 pb-0">

        {/* Label */}
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-white opacity-40" />
          <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: '#D7E2EA', opacity: 0.35 }}>
            Contact
          </span>
        </div>

        {/* Heading */}
        <div className="mb-6 sm:mb-10">
          <p
            className="font-light uppercase tracking-[0.2em]"
            style={{ color: '#D7E2EA', opacity: 0.45, fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}
          >
            Lad os tage en snak — skriv til mig
          </p>
        </div>

        {/* Big email */}
        <div className="mb-10 sm:mb-16">
          <motion.a
            href="mailto:alirezadk2016@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative inline-block"
          >
            <span
              className="font-black uppercase leading-none block"
              style={{
                fontSize: 'clamp(1.4rem, 4.5vw, 64px)',
                color: '#D7E2EA',
                letterSpacing: '-0.02em',
                wordBreak: 'break-all',
              }}
            >
              alirezadk2016@gmail.com
            </span>
            <span
              className="absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
              style={{ background: '#D7E2EA' }}
            />
          </motion.a>
        </div>

        {/* Links grid */}
        <div className="border-t border-[#D7E2EA]/10 pt-8 pb-10 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
          {links.map(({ label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col gap-2 hover:opacity-60 transition-opacity duration-200"
            >
              <span className="text-[10px] uppercase tracking-[0.25em]" style={{ color: '#D7E2EA', opacity: 0.35 }}>
                {label}
              </span>
              <span className="font-medium text-sm sm:text-base" style={{ color: '#D7E2EA' }}>
                {value}
              </span>
            </motion.a>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div
        className="px-5 sm:px-10 md:px-16 py-5 border-t"
        style={{ borderColor: 'rgba(215,226,234,0.08)' }}
      >
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.08)' }} />
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border flex-shrink-0"
            style={{ borderColor: 'rgba(215,226,234,0.12)' }}
          >
            <span className="text-[10px]" style={{ color: '#D7E2EA', opacity: 0.3 }}>&lt;&gt;</span>
            <span className="text-[9px] uppercase tracking-[0.2em]" style={{ color: '#D7E2EA', opacity: 0.25 }}>Crafted by</span>
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#D7E2EA', opacity: 0.5 }}>MAK</span>
          </div>
          <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.08)' }} />
        </div>
      </div>

    </section>
  )
}
