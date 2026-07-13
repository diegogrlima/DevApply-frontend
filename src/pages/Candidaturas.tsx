import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const applications = [
  { id: 1, company: 'Nubank', role: 'Desenvolvedor Java Júnior', stage: 'Entrevista Técnica', status: 'Em andamento', date: '13/07/2026', color: '#820AD1' },
  { id: 2, company: 'Stone', role: 'Backend Java', stage: 'Teste Técnico', status: 'Em andamento', date: '08/07/2026', color: '#1A1A1A' },
  { id: 3, company: 'iFood', role: 'Desenvolvedor Backend', stage: 'Em Análise', status: 'Em andamento', date: '05/07/2026', color: '#EA1D2C' },
  { id: 4, company: 'XP Inc.', role: 'Engenheiro de Software', stage: 'Rejeitada', status: 'Finalizada', date: '25/06/2026', color: '#000' },
  { id: 5, company: 'Ambev', role: 'Desenvolvedor Pleno', stage: 'Entrevista RH', status: 'Em andamento', date: '18/06/2026', color: '#0066CC' },
  { id: 6, company: 'C6 Bank', role: 'Analista de Sistemas', stage: 'Currículo Enviado', status: 'Em andamento', date: '14/06/2026', color: '#1A1A1A' },
]

const stageColors: Record<string, string> = {
  'Entrevista Técnica': 'bg-emerald-500/20 text-emerald-400',
  'Teste Técnico': 'bg-amber-500/20 text-amber-400',
  'Em Análise': 'bg-blue-500/20 text-blue-400',
  'Rejeitada': 'bg-[#333] text-[#888]',
  'Entrevista RH': 'bg-emerald-500/20 text-emerald-400',
  'Currículo Enviado': 'bg-[#333] text-[#888]',
}

export default function Candidaturas() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const filtered = applications.filter(
    (app) =>
      app.company.toLowerCase().includes(search.toLowerCase()) ||
      app.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="ml-64 min-h-screen bg-[#0a0a0a] p-8 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-white text-2xl font-bold">Candidaturas</h1>
            <p className="text-[#666] text-sm">Todas as suas candidaturas registradas.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#666" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar candidatura..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#141414] text-white text-sm pl-10 pr-4 py-2.5 rounded-lg border border-[#222] focus:outline-none focus:border-[#1DB954] w-72"
              />
            </div>
            <button
              onClick={() => navigate('/nova-candidatura')}
              className="bg-[#1DB954] text-[#121212] px-4 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-[#1ed760] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Nova candidatura
            </button>
          </div>
        </div>

        <div className="bg-[#141414] rounded-xl border border-[#222]">
          <div className="divide-y divide-[#222]">
            {filtered.map((app) => (
              <div key={app.id} className="flex items-center gap-4 p-4 hover:bg-[#1a1a1a] transition-colors">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: app.color }}
                >
                  {app.company.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium">{app.company}</p>
                  <p className="text-[#666] text-sm truncate">{app.role}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${stageColors[app.stage] || 'bg-[#333] text-[#888]'}`}>
                  {app.stage}
                </span>
                <div className="text-right w-32">
                  <p className="text-[#888] text-sm">Aplicado em</p>
                  <p className="text-white text-sm">{app.date}</p>
                </div>
                <button
                  onClick={() => navigate(`/candidatura/${app.id}`)}
                  className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]"
                >
                  Ver detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
