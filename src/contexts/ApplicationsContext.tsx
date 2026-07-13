import { createContext, useContext, useState, type ReactNode } from 'react'

export interface Application {
  id: number
  company: string
  role: string
  stage: string
  status: string
  date: string
  color: string
  salary: string
  location: string
  type: string
  description: string
  link: string
  logo: string | null
  timeline: { date: string; event: string; done: boolean }[]
}

interface ApplicationsContextType {
  applications: Application[]
  addApplication: (app: Omit<Application, 'id' | 'date' | 'stage' | 'status' | 'timeline'>) => void
}

const initialApplications: Application[] = [
  { id: 1, company: 'Nubank', role: 'Desenvolvedor Java Júnior', stage: 'Entrevista Técnica', status: 'Em andamento', date: '13/07/2026', color: '#820AD1', salary: 'R$ 6.000 - R$ 8.000', location: 'Remoto', type: 'CLT', description: 'Desenvolvimento de microsserviços em Java/Spring Boot.', link: '', logo: null, timeline: [{ date: '13/07/2026', event: 'Currículo enviado', done: true }] },
  { id: 2, company: 'Stone', role: 'Backend Java', stage: 'Teste Técnico', status: 'Em andamento', date: '08/07/2026', color: '#1A1A1A', salary: 'R$ 8.000 - R$ 12.000', location: 'São Paulo, SP', type: 'CLT', description: 'Desenvolvimento de APIs RESTful.', link: '', logo: null, timeline: [{ date: '08/07/2026', event: 'Currículo enviado', done: true }] },
  { id: 3, company: 'iFood', role: 'Desenvolvedor Backend', stage: 'Em Análise', status: 'Em andamento', date: '05/07/2026', color: '#EA1D2C', salary: 'R$ 7.000 - R$ 10.000', location: 'Remoto', type: 'CLT', description: 'Desenvolvimento de microsserviços escaláveis.', link: '', logo: null, timeline: [{ date: '05/07/2026', event: 'Currículo enviado', done: true }] },
  { id: 4, company: 'XP Inc.', role: 'Engenheiro de Software', stage: 'Rejeitada', status: 'Finalizada', date: '25/06/2026', color: '#000', salary: 'R$ 15.000 - R$ 20.000', location: 'São Paulo, SP', type: 'CLT', description: 'Arquitetura de sistemas de alta performance.', link: '', logo: null, timeline: [{ date: '25/06/2026', event: 'Currículo enviado', done: true }, { date: '01/07/2026', event: 'Rejeitada', done: true }] },
  { id: 5, company: 'Ambev', role: 'Desenvolvedor Pleno', stage: 'Entrevista RH', status: 'Em andamento', date: '18/06/2026', color: '#0066CC', salary: 'R$ 9.000 - R$ 13.000', location: 'São Paulo, SP', type: 'CLT', description: 'Desenvolvimento de aplicações web.', link: '', logo: null, timeline: [{ date: '18/06/2026', event: 'Currículo enviado', done: true }] },
  { id: 6, company: 'C6 Bank', role: 'Analista de Sistemas', stage: 'Currículo Enviado', status: 'Em andamento', date: '14/06/2026', color: '#1A1A1A', salary: 'R$ 7.000 - R$ 10.000', location: 'Remoto', type: 'CLT', description: 'Análise e desenvolvimento de sistemas bancários.', link: '', logo: null, timeline: [{ date: '14/06/2026', event: 'Currículo enviado', done: true }] },
]

const ApplicationsContext = createContext<ApplicationsContextType | undefined>(undefined)

export function ApplicationsProvider({ children }: { children: ReactNode }) {
  const [applications, setApplications] = useState<Application[]>(initialApplications)

  const addApplication = (newApp: Omit<Application, 'id' | 'date' | 'stage' | 'status' | 'timeline'>) => {
    const today = new Date().toLocaleDateString('pt-BR')
    const application: Application = {
      ...newApp,
      id: Date.now(),
      date: today,
      stage: 'Currículo Enviado',
      status: 'Em andamento',
      timeline: [{ date: today, event: 'Currículo enviado', done: true }],
    }
    setApplications((prev) => [application, ...prev])
  }

  return (
    <ApplicationsContext.Provider value={{ applications, addApplication }}>
      {children}
    </ApplicationsContext.Provider>
  )
}

export function useApplications() {
  const context = useContext(ApplicationsContext)
  if (!context) {
    throw new Error('useApplications must be used within an ApplicationsProvider')
  }
  return context
}
