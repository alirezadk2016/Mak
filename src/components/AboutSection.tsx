import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import AnimatedText from './AnimatedText'
import { useLang } from '../contexts/LanguageContext'
import { t } from '../translations'

function parseNum(str: string): { value: number; suffix: string; prefix: string } {
  const match = str.match(/^([^0-9]*)(\d+)([^0-9]*)$/)
  if (!match) return { value: 0, suffix: '', prefix: str }
  return { value: parseInt(match[2], 10), suffix: match[3], prefix: match[1] }
}

function CountUp({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)
  const { value, suffix, prefix } = parseNum(target)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const steps = 40
    const increment = value / steps
    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), value)
      setCount(current)
      if (current >= value) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function AboutSection() {
  const { lang } = useLang()
  const tx = t[lang].about

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.03,
          mixBlendMode: 'overlay',
        }}
      />

      <FadeIn delay={0.1} x={-60} y={0} duration={1} className="absolute top-[8%] left-[2%] md:left-[4%] hidden sm:block z-10">
        <div className="flex flex-col gap-2">
          {['Windows Server', 'Active Directory', 'VMware'].map(s => (
            <span key={s} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/40 whitespace-nowrap">{s}</span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.2} x={-60} y={0} duration={1} className="absolute bottom-[10%] left-[2%] md:left-[6%] hidden sm:block z-10">
        <div className="flex flex-col gap-2">
          {['Linux', 'DNS & DHCP', 'GPO'].map(s => (
            <span key={s} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/40 whitespace-nowrap">{s}</span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.15} x={60} y={0} duration={1} className="absolute top-[8%] right-[2%] md:right-[4%] hidden sm:block z-10">
        <div className="flex flex-col gap-2 items-end">
          {['React', 'TypeScript', 'Web Design'].map(s => (
            <span key={s} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/40 whitespace-nowrap">{s}</span>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.3} x={60} y={0} duration={1} className="absolute bottom-[10%] right-[2%] md:right-[6%] hidden sm:block z-10">
        <div className="flex flex-col gap-2 items-end">
          {['IT-sikkerhed', 'Hardware', 'Netværk'].map(s => (
            <span key={s} className="text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA]/40 whitespace-nowrap">{s}</span>
          ))}
        </div>
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10 max-w-3xl text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {tx.heading}
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-12">
          <AnimatedText
            key={tx.bio}
            text={tx.bio}
            className="font-medium text-center leading-relaxed"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as React.CSSProperties}
          />

          <FadeIn delay={0.3} y={20}>
            <div className="grid grid-cols-3 gap-8 sm:gap-16 mt-2">
              {tx.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <motion.span
                    className="font-black leading-none"
                    style={{ color: '#D7E2EA', fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                  >
                    <CountUp target={stat.num} />
                  </motion.span>
                  <span className="uppercase tracking-widest text-xs" style={{ color: '#D7E2EA', opacity: 0.4 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={20}>
            <ContactButton label={t[lang].hero.cta} />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
