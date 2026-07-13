import Header from '../components/Header'
import StatsCard from '../components/StatsCard'
import RecentApplications from '../components/RecentApplications'
import ProcessStages from '../components/ProcessStages'
import UpcomingInterviews from '../components/UpcomingInterviews'
import Reminders from '../components/Reminders'

const stats = [
  { title: 'Total de candidaturas', value: 24, subtitle: '+4 esta semana', icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0', color: 'bg-[#1DB954]' },
  { title: 'Em andamento', value: 10, subtitle: '41.7% do total', icon: 'M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z', color: 'bg-[#1DB954]' },
  { title: 'Entrevistas esta semana', value: 3, subtitle: 'Próxima: Amanhã 10:00', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5', color: 'bg-[#1DB954]' },
  { title: 'Aprovadas', value: 2, subtitle: '8.5% do total', icon: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', color: 'bg-[#1DB954]' },
  { title: 'Rejeitadas', value: 6, subtitle: '25% do total', icon: 'M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636', color: 'bg-[#EF4444]' },
]

export default function Dashboard() {
  return (
    <div className="ml-64 min-h-screen bg-[#121212] p-8">
      <Header />

      <div className="flex gap-4 mb-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <RecentApplications />
          <UpcomingInterviews />
        </div>
        <div className="space-y-6">
          <ProcessStages />
          <Reminders />
        </div>
      </div>
    </div>
  )
}
