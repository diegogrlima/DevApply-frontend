const applications = [
  { company: 'Nubank', role: 'Desenvolvedor Backend Júnior', stage: 'Entrevista técnica', date: '12 mai 2024', color: '#820AD1' },
  { company: 'Stone', role: 'Desenvolvedor Python Pleno', stage: 'Teste técnico', date: '10 mai 2024', color: '#1A1A1A' },
  { company: 'XP Inc.', role: 'Engenheiro de Software', stage: 'Entrevista RH', date: '09 mai 2024', color: '#000' },
  { company: 'iFood', role: 'Desenvolvedor Fullstack', stage: 'Em análise', date: '07 mai 2024', color: '#EA1D2C' },
  { company: 'Globo', role: 'Analista de Sistemas', stage: 'Currículo enviado', date: '05 mai 2024', color: '#1A1A1A' },
]

const stageColors: Record<string, string> = {
  'Entrevista técnica': 'bg-[#1DB954]',
  'Teste técnico': 'bg-[#1A73E8]',
  'Entrevista RH': 'bg-[#EA1D2C]',
  'Em análise': 'bg-[#F59E0B]',
  'Currículo enviado': 'bg-[#6B7280]',
}

export default function RecentApplications() {
  return (
    <div className="bg-[#181818] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold text-lg">Candidaturas recentes</h2>
        <button className="text-[#1DB954] text-sm hover:underline">Ver todas</button>
      </div>

      <div className="space-y-3">
        {applications.map((app, index) => (
          <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#282828] transition-colors cursor-pointer">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: app.color }}
            >
              {app.company.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">{app.role}</p>
              <p className="text-[#B3B3B3] text-xs">{app.company}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${stageColors[app.stage] || 'bg-[#6B7280]'}`}>
              {app.stage}
            </span>
            <span className="text-[#B3B3B3] text-xs w-24 text-right">{app.date}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B3B3B3" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        ))}
      </div>

      <button className="w-full text-center text-[#1DB954] text-sm mt-4 hover:underline">
        Ver todas as candidaturas
      </button>
    </div>
  )
}
