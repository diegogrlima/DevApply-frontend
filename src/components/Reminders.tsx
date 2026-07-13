const reminders = [
  { title: 'Entrevista técnica - Nubank', description: 'Amanhã às 10:00', badge: 'Amanhã', badgeColor: 'bg-[#1DB954] text-[#121212]', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5' },
  { title: 'Fazer follow-up - Stone', description: 'Entrar em contato com recrutador', date: '17 mai 2024', icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' },
  { title: 'Enviar documentos - XP Inc.', description: 'Enviar certificados e portfólio', date: '18 mai 2024', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z' },
]

export default function Reminders() {
  return (
    <div className="bg-[#181818] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold text-lg">Lembretes</h2>
        <button className="text-[#1DB954] text-sm hover:underline">Ver todos</button>
      </div>

      <div className="space-y-3">
        {reminders.map((reminder, index) => (
          <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#282828] transition-colors cursor-pointer">
            <div className="w-10 h-10 bg-[#282828] rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B3B3B3" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d={reminder.icon} />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">{reminder.title}</p>
              <p className="text-[#B3B3B3] text-xs">{reminder.description}</p>
            </div>
            {reminder.badge ? (
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${reminder.badgeColor}`}>
                {reminder.badge}
              </span>
            ) : (
              <span className="text-[#B3B3B3] text-xs">{reminder.date}</span>
            )}
          </div>
        ))}
      </div>

      <button className="w-full text-center text-[#1DB954] text-sm mt-4 hover:underline">
        Ver todos os lembretes
      </button>
    </div>
  )
}
