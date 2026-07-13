const stages = [
  { label: 'Currículo enviado', count: 8, percentage: 33.3, color: '#1DB954' },
  { label: 'Em análise', count: 6, percentage: 25, color: '#8B5CF6' },
  { label: 'Entrevista', count: 5, percentage: 20.8, color: '#3B82F6' },
  { label: 'Teste técnico', count: 3, percentage: 12.5, color: '#F59E0B' },
  { label: 'Proposta', count: 2, percentage: 8.4, color: '#6B7280' },
]

export default function ProcessStages() {
  const total = stages.reduce((acc, s) => acc + s.count, 0)
  const circumference = 2 * Math.PI * 15.9155
  let offset = 0

  return (
    <div className="bg-[#181818] rounded-xl p-5">
      <h2 className="text-white font-semibold text-lg mb-4">Etapas do processo</h2>

      <div className="flex items-center gap-6">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
            {stages.map((stage) => {
              const dashArray = (stage.percentage / 100) * circumference
              const currentOffset = offset
              offset += dashArray
              return (
                <circle
                  key={stage.label}
                  cx="18"
                  cy="18"
                  r="15.9155"
                  fill="none"
                  stroke={stage.color}
                  strokeWidth="3.5"
                  strokeDasharray={`${dashArray} ${circumference - dashArray}`}
                  strokeDashoffset={-currentOffset}
                  className="transition-all duration-500"
                />
              )
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-2xl font-bold">{total}</span>
            <span className="text-[#B3B3B3] text-xs">total</span>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          {stages.map((stage) => (
            <div key={stage.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stage.color }} />
                <span className="text-[#B3B3B3] text-sm">{stage.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-medium">{stage.count}</span>
                <span className="text-[#6B7280] text-xs">({stage.percentage}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 text-[#1DB954] text-sm mt-5 py-2 border border-[#333] rounded-lg hover:bg-[#282828] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
        Ver relatório completo
      </button>
    </div>
  )
}
