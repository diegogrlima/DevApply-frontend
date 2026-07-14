interface DeleteConfirmProps {
  onConfirm: () => void
  onCancel: () => void
}

export default function DeleteConfirm({ onConfirm, onCancel }: DeleteConfirmProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#141414] rounded-2xl w-full max-w-md border border-[#222] p-6">
        <h3 className="text-white text-lg font-bold mb-2">Excluir candidatura</h3>
        <p className="text-[#888] text-sm mb-6">Tem certeza que deseja excluir esta candidatura? Esta ação não pode ser desfeita.</p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 px-4 py-2.5 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] border border-[#333]">
            Cancelar
          </button>
          <button onClick={onConfirm} className="flex-1 px-4 py-2.5 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600">
            Excluir
          </button>
        </div>
      </div>
    </div>
  )
}
