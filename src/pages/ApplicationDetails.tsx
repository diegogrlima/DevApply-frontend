import { useParams, useNavigate } from 'react-router-dom'

interface ApplicationData {
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
  timeline: { date: string; event: string; done: boolean }[]
}

const applicationsData: Record<string, ApplicationData> = {
  '1': {
    company: 'Nubank',
    role: 'Desenvolvedor Java Júnior',
    stage: 'Entrevista Técnica',
    status: 'Em andamento',
    date: '13/07/2026',
    color: '#820AD1',
    salary: 'R$ 6.000 - R$ 8.000',
    location: 'Remoto',
    type: 'CLT',
    description: 'Desenvolvimento de microsserviços em Java/Spring Boot, atuando na squad de pagamentos. Experiência com AWS, Docker e testes automatizados.',
    timeline: [
      { date: '13/07/2026', event: 'Currículo enviado', done: true },
      { date: '15/07/2026', event: 'Currículo em análise', done: true },
      { date: '18/07/2026', event: 'Convite para entrevista técnica', done: true },
      { date: '22/07/2026', event: 'Entrevista técnica agendada', done: false },
      { date: '', event: 'Proposta', done: false },
    ],
  },
  '2': {
    company: 'Stone',
    role: 'Backend Java',
    stage: 'Teste Técnico',
    status: 'Em andamento',
    date: '08/07/2026',
    color: '#1A1A1A',
    salary: 'R$ 8.000 - R$ 12.000',
    location: 'São Paulo, SP',
    type: 'CLT',
    description: 'Desenvolvimento de APIs RESTful para sistema de pagamentos. Java, Spring Boot, PostgreSQL.',
    timeline: [
      { date: '08/07/2026', event: 'Currículo enviado', done: true },
      { date: '10/07/2026', event: 'Teste técnico enviado', done: true },
      { date: '', event: 'Entrevista', done: false },
      { date: '', event: 'Proposta', done: false },
    ],
  },
  '3': {
    company: 'iFood',
    role: 'Desenvolvedor Backend',
    stage: 'Em Análise',
    status: 'Em andamento',
    date: '05/07/2026',
    color: '#EA1D2C',
    salary: 'R$ 7.000 - R$ 10.000',
    location: 'Remoto',
    type: 'CLT',
    description: 'Desenvolvimento de microsserviços escaláveis para plataforma de delivery. Go ou Python.',
    timeline: [
      { date: '05/07/2026', event: 'Currículo enviado', done: true },
      { date: '07/07/2026', event: 'Em análise pelo RH', done: true },
      { date: '', event: 'Entrevista técnica', done: false },
      { date: '', event: 'Proposta', done: false },
    ],
  },
  '4': {
    company: 'XP Inc.',
    role: 'Engenheiro de Software',
    stage: 'Rejeitada',
    status: 'Finalizada',
    date: '25/06/2026',
    color: '#000',
    salary: 'R$ 15.000 - R$ 20.000',
    location: 'São Paulo, SP',
    type: 'CLT',
    description: 'Arquitetura de sistemas de alta performance para trading. Experiência com Java/Kotlin.',
    timeline: [
      { date: '25/06/2026', event: 'Currículo enviado', done: true },
      { date: '27/06/2026', event: 'Entrevista técnica', done: true },
      { date: '01/07/2026', event: 'Rejeitada', done: true },
    ],
  },
  '5': {
    company: 'Ambev',
    role: 'Desenvolvedor Pleno',
    stage: 'Entrevista RH',
    status: 'Em andamento',
    date: '18/06/2026',
    color: '#0066CC',
    salary: 'R$ 9.000 - R$ 13.000',
    location: 'São Paulo, SP',
    type: 'CLT',
    description: 'Desenvolvimento de aplicações web para gestão de vendas. React + Node.js.',
    timeline: [
      { date: '18/06/2026', event: 'Currículo enviado', done: true },
      { date: '22/06/2026', event: 'Entrevista técnica', done: true },
      { date: '28/06/2026', event: 'Entrevista RH agendada', done: false },
      { date: '', event: 'Proposta', done: false },
    ],
  },
  '6': {
    company: 'C6 Bank',
    role: 'Analista de Sistemas',
    stage: 'Currículo Enviado',
    status: 'Em andamento',
    date: '14/06/2026',
    color: '#1A1A1A',
    salary: 'R$ 7.000 - R$ 10.000',
    location: 'Remoto',
    type: 'CLT',
    description: 'Análise e desenvolvimento de sistemas bancários. Java, APIs REST.',
    timeline: [
      { date: '14/06/2026', event: 'Currículo enviado', done: true },
      { date: '', event: 'Em análise', done: false },
      { date: '', event: 'Entrevista', done: false },
      { date: '', event: 'Proposta', done: false },
    ],
  },
}

const stageColors: Record<string, string> = {
  'Entrevista Técnica': 'bg-emerald-500/20 text-emerald-400',
  'Teste Técnico': 'bg-amber-500/20 text-amber-400',
  'Em Análise': 'bg-blue-500/20 text-blue-400',
  'Rejeitada': 'bg-[#333] text-[#888]',
  'Entrevista RH': 'bg-emerald-500/20 text-emerald-400',
  'Currículo Enviado': 'bg-[#333] text-[#888]',
}

export default function ApplicationDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const app = applicationsData[id || '1']

  if (!app) {
    return (
      <div className="ml-64 min-h-screen bg-[#0a0a0a] p-8 w-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#888] text-lg mb-4">Candidatura não encontrada</p>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760] transition-colors"
          >
            Voltar ao início
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="ml-64 min-h-screen bg-[#0a0a0a] p-8 w-full">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#888] hover:text-white mb-6 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Voltar
        </button>

        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-lg font-bold"
              style={{ backgroundColor: app.color }}
            >
              {app.company.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">{app.company}</h1>
              <p className="text-[#888]">{app.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${stageColors[app.stage] || 'bg-[#333] text-[#888]'}`}>
              {app.stage}
            </span>
            <button className="p-2 text-[#888] hover:bg-[#1a1a1a] rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-[#141414] rounded-xl p-4 border border-[#222]">
            <p className="text-[#666] text-xs mb-1">Salário</p>
            <p className="text-white font-medium">{app.salary}</p>
          </div>
          <div className="bg-[#141414] rounded-xl p-4 border border-[#222]">
            <p className="text-[#666] text-xs mb-1">Localização</p>
            <p className="text-white font-medium">{app.location}</p>
          </div>
          <div className="bg-[#141414] rounded-xl p-4 border border-[#222]">
            <p className="text-[#666] text-xs mb-1">Contrato</p>
            <p className="text-white font-medium">{app.type}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Descrição da vaga</h2>
            <p className="text-[#888] text-sm leading-relaxed">{app.description}</p>
            <div className="mt-6 pt-4 border-t border-[#222]">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#666]">Data da candidatura</span>
                <span className="text-white">{app.date}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Andamento do processo</h2>
            <div className="space-y-4">
              {app.timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${item.done ? 'bg-[#1DB954]' : 'bg-[#333]'}`} />
                    {index < app.timeline.length - 1 && (
                      <div className={`w-0.5 h-8 ${item.done ? 'bg-[#1DB954]' : 'bg-[#333]'}`} />
                    )}
                  </div>
                  <div className="flex-1 -mt-1">
                    <p className={`text-sm font-medium ${item.done ? 'text-white' : 'text-[#666]'}`}>{item.event}</p>
                    {item.date && <p className="text-[#666] text-xs">{item.date}</p>}
                  </div>
                  {item.done && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#1DB954" className="w-4 h-4 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#141414] rounded-xl p-6 border border-[#222] mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Notas</h2>
            <button className="text-[#1DB954] text-sm hover:underline">+ Adicionar nota</button>
          </div>
          <div className="bg-[#1a1a1a] rounded-lg p-4">
            <p className="text-[#888] text-sm">Nenhuma nota adicionada ainda.</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button className="px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm">
            Excluir candidatura
          </button>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]">
              Editar
            </button>
            <button className="px-4 py-2 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760] transition-colors">
              Atualizar status
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
