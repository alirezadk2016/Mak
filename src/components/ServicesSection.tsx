import FadeIn from './FadeIn'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

export default function ServicesSection() {
  const { lang } = useLang()
  const tx = t[lang].services

  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <p className="text-center uppercase tracking-widest text-sm mb-3 font-medium" style={{ color: '#0C0C0C', opacity: 0.4 }}>
          {tx.sectionLabel}
        </p>
        <h2 className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          {tx.heading}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {tx.items.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.08} y={20}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12,12,12,0.12)',
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.12)' : undefined,
              }}
            >
              <span className="font-black leading-none flex-shrink-0" style={{ color: '#0C0C0C', fontSize: 'clamp(2rem, 8vw, 140px)' }}>
                {s.num}
              </span>
              <div className="flex flex-col gap-3 pt-2 w-full">
                <span className="font-medium uppercase" style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {s.name}
                </span>
                <span className="font-light leading-relaxed max-w-2xl" style={{ color: '#0C0C0C', opacity: 0.6, fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)' }}>
                  {s.desc}
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {s.tags.map((tag) => (
                    <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border" style={{ color: '#0C0C0C', borderColor: 'rgba(12,12,12,0.2)', opacity: 0.7 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
