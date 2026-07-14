import { useState } from 'react'
import { getNextStages } from '../../constants/stages'

interface StatusModalProps {
  currentStage: string
  onConfirm: (stage: string, status: string) => void
  onCancel: () => void
}

export default function StatusModal({ currentStage, onConfirm, onCancel }: StatusModalProps) {
  const availableStages = getNextStages(currentStage)
  const [newStage, setNewStage] = useState(availableStages[0])

  const handleConfirm = () => {
    const status = newStage === 'Aprovada' || newStage === 'Rejeitada' ? 'Finalizada' : 'Em andamento'
    onConfirm(newStage, status)
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#141414] rounded-2xl w-full max-w-md border border-[#222] p-6">
        <h3 className="text-white text-lg font-bold mb-4">Atualizar status</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#888] mb-2">Etapa</label>
            <select value={newStage} onChange={(e) => setNewStage(e.target.value)} className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]">
              {availableStages.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3">
            <button onClick={onCancel} className="flex-1 px-4 py-2.5 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] border border-[#333]">
              Cancelar
            </button>
            <button onClick={handleConfirm} className="flex-1 px-4 py-2.5 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760]">
              Atualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
