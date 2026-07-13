interface StatsCardProps {
  title: string
  value: number | string
  subtitle: string
  icon: string
  color: string
}

export default function StatsCard({ title, value, subtitle, icon, color }: StatsCardProps) {
  return (
    <div className="bg-[#181818] rounded-xl p-5 flex-1">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#121212" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
        <span className="text-[#B3B3B3] text-sm">{title}</span>
      </div>
      <p className="text-white text-3xl font-bold">{value}</p>
      <p className="text-[#1DB954] text-sm mt-1">{subtitle}</p>
    </div>
  )
}
