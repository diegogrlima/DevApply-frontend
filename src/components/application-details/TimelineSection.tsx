import type { Application } from '../../contexts/ApplicationsContext'

interface TimelineSectionProps {
  timeline: Application['timeline']
}

export default function TimelineSection({ timeline }: TimelineSectionProps) {
  return (
    <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
      <h2 className="text-white font-semibold mb-4">Andamento do processo</h2>
      <div className="space-y-4">
        {timeline.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full ${item.done ? 'bg-[#1DB954]' : 'bg-[#333]'}`} />
              {index < timeline.length - 1 && <div className={`w-0.5 h-8 ${item.done ? 'bg-[#1DB954]' : 'bg-[#333]'}`} />}
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
  )
}
