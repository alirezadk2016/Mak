import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const experiences: Record<string, {
  company: string
  role: string
  period: string
  url: string
  priceUrl: string
  screenshot: string
  color: string
  tasks: { title: string; items: string[] }[]
}> = {
  yousee: {
    company: 'YouSee',
    role: 'Customer Service & Administration',
    period: 'IGU Program',
    url: 'https://yousee.dk/',
    priceUrl: 'https://yousee.dk/tv/pakker',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://yousee.dk/',
    color: '#E4002B',
    tasks: [
      {
        title: 'Kundeservice',
        items: [
          'Daglig kundekontakt og håndtering af henvendelser',
          'Klar kommunikation med ikke-tekniske brugere',
          'Løsning af problemer relateret til TV, internet og telefoni',
        ],
      },
      {
        title: 'Administration',
        items: [
          'Daglig administrativ sagsbehandling',
          'Registrering og opfølgning på kundedata',
          'Samarbejde på tværs af afdelinger',
        ],
      },
    ],
  },
  fourcom: {
    company: 'Fourcom',
    role: 'IT Support Intern',
    period: '2 måneders praktik',
    url: 'https://en.fourcom.dk/',
    priceUrl: 'https://en.fourcom.dk/services',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://en.fourcom.dk/',
    color: '#0057B8',
    tasks: [
      {
        title: 'Hardware Support',
        items: [
          'Installation og konfiguration af Windows på arbejdsstationer',
          'Fejlfinding og udskiftning af hardwarekomponenter',
          'Klargøring af nye computere til slutbrugere',
        ],
      },
      {
        title: 'Teknisk Support',
        items: [
          'Brugersupport ved tekniske problemer',
          'Dokumentation af udførte opgaver',
          'Samarbejde med senior-teknikere om komplekse sager',
        ],
      },
    ],
  },
  folkehuse: {
    company: 'Folkehuse Aarhus',
    role: 'IT Support — Skolepraktik',
    period: 'Skolepraktik — Aarhus Tech',
    url: 'https://folkehuse.aarhus.dk/',
    priceUrl: 'https://folkehuse.aarhus.dk/',
    screenshot: 'https://image.thum.io/get/width/1280/crop/720/https://folkehuse.aarhus.dk/',
    color: '#2E7D32',
    tasks: [
      {
        title: 'Brugersupport',
        items: [
          'IT-support på tværs af flere institutioner i Aarhus',
          'Hjælp til ældre borgere på plejehjem med daglig IT-brug',
          'Teknisk support under eksamener',
        ],
      },
      {
        title: 'Daglige Opgaver',
        items: [
          'Loginproblemer og adgangsstyring',
          'E-mail opsætning og fejlfinding',
          'Printeropsætning og vedligeholdelse',
          'Softwareinstallation og opdateringer',
        ],
      },
    ],
  },
}

export default function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const exp = experiences[slug ?? '']

  if (!exp) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0C0C0C' }}>
        <p className="text-white">Not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: '#0C0C0C' }}>
      {/* Header */}
      <div className="px-6 sm:px-10 py-6 flex items-center justify-between border-b border-[#D7E2EA]/10">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        <a
          href={exp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors text-sm uppercase tracking-widest"
        >
          Visit Site
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Hero */}
      <div className="px-6 sm:px-10 pt-16 pb-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[#D7E2EA]/40 uppercase tracking-widest text-sm mb-2">{exp.period}</p>
          <h1
            className="font-black uppercase leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(3rem, 10vw, 120px)', color: '#D7E2EA' }}
          >
            {exp.company}
          </h1>
          <p className="text-[#D7E2EA]/60 text-lg mb-10">{exp.role}</p>
        </motion.div>

        {/* Screenshot linking to price page */}
        <motion.a
          href={exp.priceUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block overflow-hidden rounded-[24px] border-2 border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50 transition-all duration-300 group mb-16"
        >
          <div className="relative" style={{ aspectRatio: '16/7' }}>
            <img
              src={exp.screenshot}
              alt={exp.company}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-medium uppercase tracking-widest border border-white rounded-full px-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Site →
              </span>
            </div>
          </div>
        </motion.a>

        {/* Tasks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {exp.tasks.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="rounded-[20px] border border-[#D7E2EA]/15 p-6"
            >
              <h3
                className="font-bold uppercase tracking-widest text-sm mb-4"
                style={{ color: exp.color }}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[#D7E2EA]/70 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
