import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram, Phone } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

const contactItems = [
  {
    icon: Phone,
    label: { da: 'Telefon', en: 'Phone' },
    value: '+45 91 48 88 43',
    href: 'tel:+4591488843',
  },
  {
    icon: Mail,
    label: { da: 'E-mail', en: 'Email' },
    value: 'alirezadk2016@gmail.com',
    href: 'mailto:alirezadk2016@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Alireza Makvandi',
    href: 'https://dk.linkedin.com/in/alireza-makvandi-446704301',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@alireza__tak',
    href: 'https://www.instagram.com/alireza__tak/',
  },
]

export default function FooterSection() {
  const { lang } = useLang()
  const tx = t[lang].footer

  return (
    <section id="contact" style={{ background: '#0C0C0C', position: 'relative', zIndex: 20 }}>
      <div className="px-5 sm:px-10 md:px-16 pt-20 sm:pt-32 pb-0">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8 sm:mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#D7E2EA', opacity: 0.4 }} />
          <span style={{ color: '#D7E2EA', opacity: 0.35, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
            {tx.label}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            color: '#D7E2EA',
            fontSize: 'clamp(2.2rem, 6vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            whiteSpace: 'pre-line',
          }}
          className="mb-16 sm:mb-20"
        >
          {tx.heading}
        </motion.h2>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-0">
          {contactItems.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col gap-4 rounded-[20px] border border-[#D7E2EA]/10 p-5 hover:border-[#D7E2EA]/30 hover:bg-[#D7E2EA]/3 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span style={{ color: '#D7E2EA', opacity: 0.25, fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                  {typeof label === 'object' ? label[lang] : label}
                </span>
                <div className="w-8 h-8 rounded-full border border-[#D7E2EA]/15 flex items-center justify-center group-hover:border-[#D7E2EA]/35 transition-colors duration-300">
                  <Icon size={14} style={{ color: '#D7E2EA', opacity: 0.5 }} strokeWidth={1.5} />
                </div>
              </div>
              <span style={{ color: '#D7E2EA', fontSize: '0.85rem', fontWeight: 500, opacity: 0.85 }} className="leading-snug">
                {value}
              </span>
            </motion.a>
          ))}
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-[#D7E2EA]/8">
        <div className="px-5 sm:px-10 md:px-16 py-6 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.06)' }} />
          <div className="flex items-center gap-2 px-5 py-2 rounded-full border flex-shrink-0" style={{ borderColor: 'rgba(215,226,234,0.1)' }}>
            <span style={{ color: '#D7E2EA', opacity: 0.25, fontSize: '10px' }}>&lt;&gt;</span>
            <span style={{ color: '#D7E2EA', opacity: 0.2, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Crafted by</span>
            <span style={{ color: '#D7E2EA', opacity: 0.45, fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>MAK</span>
          </div>
          <div className="flex-1 h-px" style={{ background: 'rgba(215,226,234,0.06)' }} />
        </div>
      </div>

    </section>
  )
}
