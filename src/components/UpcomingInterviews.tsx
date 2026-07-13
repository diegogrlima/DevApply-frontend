const interviews = [
  { company: 'Nubank', role: 'Entrevista técnica', date: '14 mai 2024', time: '10:00', badge: 'Amanhã', badgeColor: 'bg-[#1DB954] text-[#121212]', color: '#820AD1' },
  { company: 'XP Inc.', role: 'Entrevista RH', date: '16 mai 2024', time: '14:00', badge: 'Em 2 dias', badgeColor: 'bg-[#282828] text-[#B3B3B3]', color: '#000' },
  { company: 'Stone', role: 'Entrevista final', date: '20 mai 2024', time: '15:30', badge: 'Em 6 dias', badgeColor: 'bg-[#282828] text-[#B3B3B3]', color: '#1A1A1A' },
]

export default function UpcomingInterviews() {
  return (
    <div className="bg-[#181818] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold text-lg">Próximas entrevistas</h2>
        <button className="text-[#1DB954] text-sm hover:underline">Ver agenda</button>
      </div>

      <div className="space-y-3">
        {interviews.map((interview, index) => (
          <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#282828] transition-colors cursor-pointer">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: interview.color }}
            >
              {interview.company.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">{interview.role}</p>
              <p className="text-[#B3B3B3] text-xs">{interview.company}</p>
            </div>
            <div className="flex items-center gap-2 text-[#B3B3B3] text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              {interview.date}
            </div>
            <div className="flex items-center gap-2 text-[#B3B3B3] text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {interview.time}
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${interview.badgeColor}`}>
              {interview.badge}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full text-center text-[#1DB954] text-sm mt-4 hover:underline">
        Ver todas as entrevistas
      </button>
    </div>
  )
}
