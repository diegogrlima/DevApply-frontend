import { useNavigate } from 'react-router-dom'
import { useApplications } from '../contexts/ApplicationsContext'
import { getStageColor } from '../constants/stages'
import { useFilteredApplications } from '../hooks/useFilteredApplications'

const filterTabs = ['Todos', 'Em andamento', 'Aprovadas', 'Rejeitadas']

export default function Dashboard() {
  const { applications } = useApplications()
  const navigate = useNavigate()
  const { filtered, stats, filters, setFilter, clearFilters } = useFilteredApplications(applications)

  return (
    <div className="ml-64 min-h-screen bg-[#0a0a0a] p-8 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-white text-2xl font-bold">Home</h1>
            <p className="text-[#666] text-sm">Visão geral das suas candidaturas.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#666" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar por empresa ou cargo..."
                value={filters.search}
                onChange={(e) => setFilter('search', e.target.value)}
                className="bg-[#141414] text-white text-sm pl-10 pr-4 py-2.5 rounded-lg border border-[#222] focus:outline-none focus:border-[#1DB954] w-80"
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

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-[#141414] rounded-xl p-5 border border-[#222]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#1DB954]/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1DB954" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </div>
              <span className="text-[#888] text-sm">Total de candidaturas</span>
            </div>
            <p className="text-white text-3xl font-bold">{stats.total}</p>
            <p className="text-[#666] text-xs mt-1">Todas as vagas registradas</p>
          </div>

          <div className="bg-[#141414] rounded-xl p-5 border border-[#222]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F59E0B" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <span className="text-[#888] text-sm">Em andamento</span>
            </div>
            <p className="text-white text-3xl font-bold">{stats.inProgress}</p>
            <p className="text-[#666] text-xs mt-1">Processos ativos</p>
          </div>

          <div className="bg-[#141414] rounded-xl p-5 border border-[#222]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#10B981" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <span className="text-[#888] text-sm">Finalizadas</span>
            </div>
            <p className="text-white text-3xl font-bold">{stats.finalized}</p>
            <p className="text-[#666] text-xs mt-1">Aprovadas ou rejeitadas</p>
          </div>
        </div>

        <div className="bg-[#141414] rounded-xl border border-[#222]">
          <div className="flex items-center justify-between p-4 border-b border-[#222]">
            <div className="flex items-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter('activeFilter', tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filters.activeFilter === tab
                      ? 'bg-[#1DB954] text-[#121212]'
                      : 'text-[#888] hover:bg-[#1a1a1a]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <select
                value={filters.sortOrder}
                onChange={(e) => setFilter('sortOrder', e.target.value as 'recent' | 'oldest')}
                className="bg-[#1a1a1a] text-[#888] text-sm px-3 py-2 rounded-lg border border-[#222] focus:outline-none focus:border-[#1DB954]"
              >
                <option value="recent">Mais recentes</option>
                <option value="oldest">Mais antigos</option>
              </select>
              <button
                onClick={() => setFilter('showFilters', !filters.showFilters)}
                className={`p-2 rounded-lg transition-colors ${filters.showFilters ? 'bg-[#1DB954] text-[#121212]' : 'text-[#888] hover:bg-[#1a1a1a]'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
              </button>
            </div>
          </div>

          {filters.showFilters && (
            <div className="p-4 border-b border-[#222] bg-[#1a1a1a]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#888] text-sm">Empresa:</span>
                  <input
                    type="text"
                    placeholder="Filtrar por empresa..."
                    className="bg-[#141414] text-white text-sm px-3 py-1.5 rounded-lg border border-[#222] focus:outline-none focus:border-[#1DB954]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#888] text-sm">Status:</span>
                  <select
                    value={filters.statusFilter}
                    onChange={(e) => setFilter('statusFilter', e.target.value)}
                    className="bg-[#141414] text-white text-sm px-3 py-1.5 rounded-lg border border-[#222] focus:outline-none focus:border-[#1DB954]"
                  >
                    <option value="Todos">Todos</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Finalizada">Finalizada</option>
                  </select>
                </div>
                <button
                  onClick={clearFilters}
                  className="text-[#1DB954] text-sm hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            </div>
          )}

          <div className="divide-y divide-[#222]">
            {filtered.map((app) => (
              <div
                key={app.id}
                onClick={() => navigate(`/candidatura/${app.id}`)}
                className="flex items-center gap-4 p-4 hover:bg-[#1a1a1a] transition-colors cursor-pointer"
              >
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
                <div className="flex flex-col items-end">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStageColor(app.stage)}`}>
                    {app.stage}
                  </span>
                  <span className="text-xs mt-1 text-[#888]">{app.status}</span>
                </div>
                <div className="text-right w-32">
                  <p className="text-[#888] text-sm">Aplicado em</p>
                  <p className="text-white text-sm">{app.date}</p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(`/candidatura/${app.id}`) }}
                  className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]"
                >
                  Ver detalhes
                </button>
                <button className="p-2 text-[#888] hover:bg-[#1a1a1a] rounded-lg transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
