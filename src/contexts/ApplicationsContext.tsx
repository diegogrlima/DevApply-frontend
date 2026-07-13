import { createContext, useContext, useState, type ReactNode } from 'react'

export interface Note {
  id: number
  text: string
  date: string
}

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
  notes: Note[]
}

interface ApplicationsContextType {
  applications: Application[]
  addApplication: (app: Omit<Application, 'id' | 'date' | 'stage' | 'status' | 'timeline' | 'notes'>) => void
  deleteApplication: (id: number) => void
  updateApplication: (id: number, updates: Partial<Application>) => void
  addNote: (appId: number, text: string) => void
  deleteNote: (appId: number, noteId: number) => void
  updateStatus: (id: number, stage: string, status: string) => void
}

const initialApplications: Application[] = [
  { id: 1, company: 'Nubank', role: 'Desenvolvedor Java Júnior', stage: 'Entrevista Técnica', status: 'Em andamento', date: '13/07/2026', color: '#820AD1', salary: 'R$ 6.000 - R$ 8.000', location: 'Remoto', type: 'CLT', description: 'Desenvolvimento de microsserviços em Java/Spring Boot.', link: '', logo: null, timeline: [{ date: '13/07/2026', event: 'Currículo enviado', done: true }], notes: [] },
  { id: 2, company: 'Stone', role: 'Backend Java', stage: 'Teste Técnico', status: 'Em andamento', date: '08/07/2026', color: '#1A1A1A', salary: 'R$ 8.000 - R$ 12.000', location: 'São Paulo, SP', type: 'CLT', description: 'Desenvolvimento de APIs RESTful.', link: '', logo: null, timeline: [{ date: '08/07/2026', event: 'Currículo enviado', done: true }], notes: [] },
  { id: 3, company: 'iFood', role: 'Desenvolvedor Backend', stage: 'Em Análise', status: 'Em andamento', date: '05/07/2026', color: '#EA1D2C', salary: 'R$ 7.000 - R$ 10.000', location: 'Remoto', type: 'CLT', description: 'Desenvolvimento de microsserviços escaláveis.', link: '', logo: null, timeline: [{ date: '05/07/2026', event: 'Currículo enviado', done: true }], notes: [] },
  { id: 4, company: 'XP Inc.', role: 'Engenheiro de Software', stage: 'Rejeitada', status: 'Finalizada', date: '25/06/2026', color: '#000', salary: 'R$ 15.000 - R$ 20.000', location: 'São Paulo, SP', type: 'CLT', description: 'Arquitetura de sistemas de alta performance.', link: '', logo: null, timeline: [{ date: '25/06/2026', event: 'Currículo enviado', done: true }, { date: '01/07/2026', event: 'Rejeitada', done: true }], notes: [] },
  { id: 5, company: 'Ambev', role: 'Desenvolvedor Pleno', stage: 'Entrevista RH', status: 'Em andamento', date: '18/06/2026', color: '#0066CC', salary: 'R$ 9.000 - R$ 13.000', location: 'São Paulo, SP', type: 'CLT', description: 'Desenvolvimento de aplicações web.', link: '', logo: null, timeline: [{ date: '18/06/2026', event: 'Currículo enviado', done: true }], notes: [] },
  { id: 6, company: 'C6 Bank', role: 'Analista de Sistemas', stage: 'Currículo Enviado', status: 'Em andamento', date: '14/06/2026', color: '#1A1A1A', salary: 'R$ 7.000 - R$ 10.000', location: 'Remoto', type: 'CLT', description: 'Análise e desenvolvimento de sistemas bancários.', link: '', logo: null, timeline: [{ date: '14/06/2026', event: 'Currículo enviado', done: true }], notes: [] },
]

const ApplicationsContext = createContext<ApplicationsContextType | undefined>(undefined)

export function ApplicationsProvider({ children }: { children: ReactNode }) {
  const [applications, setApplications] = useState<Application[]>(initialApplications)

  const addApplication = (newApp: Omit<Application, 'id' | 'date' | 'stage' | 'status' | 'timeline' | 'notes'>) => {
    const today = new Date().toLocaleDateString('pt-BR')
    const application: Application = {
      ...newApp,
      id: Date.now(),
      date: today,
      stage: 'Currículo Enviado',
      status: 'Em andamento',
      timeline: [{ date: today, event: 'Currículo enviado', done: true }],
      notes: [],
    }
    setApplications((prev) => [application, ...prev])
  }

  const deleteApplication = (id: number) => {
    setApplications((prev) => prev.filter((app) => app.id !== id))
  }

  const updateApplication = (id: number, updates: Partial<Application>) => {
    setApplications((prev) => prev.map((app) => (app.id === id ? { ...app, ...updates } : app)))
  }

  const addNote = (appId: number, text: string) => {
    const today = new Date().toLocaleDateString('pt-BR')
    const note: Note = { id: Date.now(), text, date: today }
    setApplications((prev) =>
      prev.map((app) => (app.id === appId ? { ...app, notes: [...app.notes, note] } : app))
    )
  }

  const deleteNote = (appId: number, noteId: number) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === appId ? { ...app, notes: app.notes.filter((n) => n.id !== noteId) } : app
      )
    )
  }

  const updateStatus = (id: number, stage: string, status: string) => {
    const today = new Date().toLocaleDateString('pt-BR')
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id
          ? {
              ...app,
              stage,
              status,
              timeline: [...app.timeline, { date: today, event: stage, done: true }],
            }
          : app
      )
    )
  }

  return (
    <ApplicationsContext.Provider
      value={{ applications, addApplication, deleteApplication, updateApplication, addNote, deleteNote, updateStatus }}
    >
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
