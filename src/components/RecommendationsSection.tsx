import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

const accents: Record<string, string> = {
  YouSee: '#E4002B',
  Fourcom: '#0057B8',
  'Folkehuse Aarhus': '#2E7D32',
}

export default function RecommendationsSection() {
  const { lang } = useLang()
  const tx = t[lang].recommendations

  return (
    <section
      id="recommendations"
      className="relative px-5 sm:px-10 md:px-14 lg:px-20 py-24 sm:py-32 md:py-40 overflow-hidden"
      style={{ background: '#0A0908' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'rgba(232,224,213,0.07)' }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn delay={0} y={30}>
          <p style={{ color: '#E8DDD0', opacity: 0.22, fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '14px' }}>
            {tx.navLabel}
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(2.6rem, 9vw, 7rem)', letterSpacing: '-0.03em' }}
          >
            {tx.heading}
          </h2>
          <p
            className="font-light leading-relaxed max-w-xl mb-14 sm:mb-20"
            style={{ color: '#E8DDD0', opacity: 0.4, fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', lineHeight: 1.8 }}
          >
            {tx.subheading}
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {tx.items.map((item, i) => {
            const accent = accents[item.company] ?? '#C9A96E'
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="relative rounded-[20px] p-6 sm:p-7 flex flex-col gap-6 overflow-hidden group"
                style={{ background: 'linear-gradient(160deg, rgba(232,224,213,0.045) 0%, rgba(232,224,213,0.015) 100%)', border: '1px solid rgba(232,224,213,0.08)' }}
              >
                {/* Accent top line */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(to right, ${accent}, transparent)` }} />

                <Quote size={26} strokeWidth={1.4} style={{ color: accent, opacity: 0.55 }} />

                <p
                  className="font-light leading-relaxed flex-1"
                  style={{ color: '#E8DDD0', opacity: 0.72, fontSize: '14px', lineHeight: 1.75 }}
                >
                  {item.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(232,224,213,0.07)' }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${accent}1A`, border: `1px solid ${accent}40` }}
                  >
                    <span style={{ color: accent, fontSize: '13px', fontWeight: 700 }}>
                      {item.company.charAt(0)}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span style={{ color: '#E8DDD0', opacity: 0.85, fontSize: '12px', fontWeight: 600 }}>
                      {item.name}
                    </span>
                    <span style={{ color: '#E8DDD0', opacity: 0.35, fontSize: '10px', letterSpacing: '0.05em' }}>
                      {item.role} · {item.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Note */}
        <FadeIn delay={0.2} y={16}>
          <div className="flex items-center gap-3 mt-12 sm:mt-16">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-50" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: '#C9A96E' }} />
            </span>
            <span style={{ color: '#E8DDD0', opacity: 0.3, fontSize: '11px', letterSpacing: '0.05em', fontWeight: 300 }}>
              {tx.note}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
