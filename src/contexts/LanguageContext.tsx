import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'da' | 'en'

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'da',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('da')
  const toggle = () => setLang(l => (l === 'da' ? 'en' : 'da'))
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
