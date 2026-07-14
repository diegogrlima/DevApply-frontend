import { useState } from 'react'
import type { Note } from '../../contexts/ApplicationsContext'

interface NotesSectionProps {
  notes: Note[]
  onAdd: (text: string) => void
  onDelete: (noteId: number) => void
}

export default function NotesSection({ notes, onAdd, onDelete }: NotesSectionProps) {
  const [newNote, setNewNote] = useState('')

  const handleAdd = () => {
    if (newNote.trim()) {
      onAdd(newNote.trim())
      setNewNote('')
    }
  }

  return (
    <div className="bg-[#141414] rounded-xl p-6 border border-[#222] mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold">Notas</h2>
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Adicionar uma nota..."
          className="flex-1 px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
        />
        <button onClick={handleAdd} className="px-4 py-2 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760]">
          Adicionar
        </button>
      </div>
      {notes.length === 0 ? (
        <div className="bg-[#1a1a1a] rounded-lg p-4">
          <p className="text-[#888] text-sm">Nenhuma nota adicionada ainda.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {notes.map((note) => (
            <div key={note.id} className="bg-[#1a1a1a] rounded-lg p-4 flex items-start justify-between">
              <div>
                <p className="text-white text-sm">{note.text}</p>
                <p className="text-[#666] text-xs mt-1">{note.date}</p>
              </div>
              <button onClick={() => onDelete(note.id)} className="text-red-400 hover:text-red-300 text-sm">
                Excluir
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
