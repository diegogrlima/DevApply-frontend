import { useParams, useNavigate } from 'react-router-dom'
import { useApplications } from '../contexts/ApplicationsContext'

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
  const { applications } = useApplications()

  const app = applications.find((a) => a.id === Number(id))

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
            {app.logo ? (
              <img src={app.logo} alt={app.company} className="w-16 h-16 rounded-xl object-cover" />
            ) : (
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-lg font-bold"
                style={{ backgroundColor: app.color }}
              >
                {app.company.slice(0, 2).toUpperCase()}
              </div>
            )}
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
            <p className="text-white font-medium">{app.salary || 'Não informado'}</p>
          </div>
          <div className="bg-[#141414] rounded-xl p-4 border border-[#222]">
            <p className="text-[#666] text-xs mb-1">Localização</p>
            <p className="text-white font-medium">{app.location || 'Não informado'}</p>
          </div>
          <div className="bg-[#141414] rounded-xl p-4 border border-[#222]">
            <p className="text-[#666] text-xs mb-1">Contrato</p>
            <p className="text-white font-medium">{app.type}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Descrição da vaga</h2>
            <p className="text-[#888] text-sm leading-relaxed">{app.description || 'Sem descrição'}</p>
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
