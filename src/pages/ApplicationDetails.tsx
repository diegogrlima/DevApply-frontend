import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApplications } from '../contexts/ApplicationsContext'

const stageColors: Record<string, string> = {
  'Entrevista Técnica': 'bg-emerald-500/20 text-emerald-400',
  'Teste Técnico': 'bg-amber-500/20 text-amber-400',
  'Em Análise': 'bg-blue-500/20 text-blue-400',
  'Rejeitada': 'bg-[#333] text-[#888]',
  'Entrevista RH': 'bg-emerald-500/20 text-emerald-400',
  'Currículo Enviado': 'bg-[#333] text-[#888]',
  'Aprovada': 'bg-emerald-500/20 text-emerald-400',
}

const stages = ['Currículo Enviado', 'Em Análise', 'Teste Técnico', 'Entrevista Técnica', 'Entrevista RH', 'Proposta', 'Aprovada', 'Rejeitada']

export default function ApplicationDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { applications, deleteApplication, updateApplication, addNote, deleteNote, updateStatus } = useApplications()

  const app = applications.find((a) => a.id === Number(id))

  const [isEditing, setIsEditing] = useState(false)
  const [editCompany, setEditCompany] = useState('')
  const [editRole, setEditRole] = useState('')
  const [editSalary, setEditSalary] = useState('')
  const [editLocation, setEditLocation] = useState('')
  const [editType, setEditType] = useState('')
  const [editDescription, setEditDescription] = useState('')

  const [newNote, setNewNote] = useState('')
  const [showStatusModal, setShowStatusModal] = useState(false)
  const [newStage, setNewStage] = useState('')
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  if (!app) {
    return (
      <div className="ml-64 min-h-screen bg-[#0a0a0a] p-8 w-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#888] text-lg mb-4">Candidatura não encontrada</p>
          <button onClick={() => navigate('/')} className="px-4 py-2 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760] transition-colors">
            Voltar ao início
          </button>
        </div>
      </div>
    )
  }

  const startEdit = () => {
    setEditCompany(app.company)
    setEditRole(app.role)
    setEditSalary(app.salary)
    setEditLocation(app.location)
    setEditType(app.type)
    setEditDescription(app.description)
    setIsEditing(true)
  }

  const saveEdit = () => {
    updateApplication(app.id, {
      company: editCompany,
      role: editRole,
      salary: editSalary,
      location: editLocation,
      type: editType,
      description: editDescription,
    })
    setIsEditing(false)
  }

  const handleAddNote = () => {
    if (newNote.trim()) {
      addNote(app.id, newNote.trim())
      setNewNote('')
    }
  }

  const handleUpdateStatus = () => {
    if (newStage) {
      const status = newStage === 'Aprovada' || newStage === 'Rejeitada' ? 'Finalizada' : 'Em andamento'
      updateStatus(app.id, newStage, status)
      setShowStatusModal(false)
      setNewStage('')
    }
  }

  const handleDelete = () => {
    deleteApplication(app.id)
    navigate('/')
  }

  return (
    <div className="ml-64 min-h-screen bg-[#0a0a0a] p-8 w-full">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#888] hover:text-white mb-6 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Voltar
        </button>

        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            {app.logo ? (
              <img src={app.logo} alt={app.company} className="w-16 h-16 rounded-xl object-cover" />
            ) : (
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: app.color }}>
                {app.company.slice(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              <h1 className="text-white text-2xl font-bold">{app.company}</h1>
              <p className="text-[#888]">{app.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${stageColors[app.stage] || 'bg-[#333] text-[#888]'}`}>
              {app.stage}
            </span>
          </div>
        </div>

        {app.status === 'Finalizada' && (
          <div className={`p-4 rounded-xl mb-6 ${app.stage === 'Aprovada' ? 'bg-emerald-500/10 border border-emerald-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
            <p className={`text-sm font-medium ${app.stage === 'Aprovada' ? 'text-emerald-400' : 'text-red-400'}`}>
              Esta candidatura foi {app.stage === 'Aprovada' ? 'aprovada' : 'rejeitada'} e não pode mais ser alterada.
            </p>
          </div>
        )}

        {isEditing ? (
          <div className="bg-[#141414] rounded-xl p-6 border border-[#222] mb-6">
            <h2 className="text-white font-semibold mb-4">Editando candidatura</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#888] mb-1">Empresa</label>
                  <input value={editCompany} onChange={(e) => setEditCompany(e.target.value)} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]" />
                </div>
                <div>
                  <label className="block text-sm text-[#888] mb-1">Cargo</label>
                  <input value={editRole} onChange={(e) => setEditRole(e.target.value)} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-[#888] mb-1">Salário</label>
                  <input value={editSalary} onChange={(e) => setEditSalary(e.target.value)} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]" />
                </div>
                <div>
                  <label className="block text-sm text-[#888] mb-1">Localização</label>
                  <input value={editLocation} onChange={(e) => setEditLocation(e.target.value)} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]" />
                </div>
                <div>
                  <label className="block text-sm text-[#888] mb-1">Contrato</label>
                  <select value={editType} onChange={(e) => setEditType(e.target.value)} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]">
                    <option value="CLT">CLT</option>
                    <option value="PJ">PJ</option>
                    <option value="Estágio">Estágio</option>
                    <option value="Freelancer">Freelancer</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#888] mb-1">Descrição</label>
                <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} rows={3} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954] resize-none" />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] border border-[#333]">Cancelar</button>
                <button onClick={saveEdit} className="px-4 py-2 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760]">Salvar</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-[#141414] rounded-xl p-4 border border-[#222]">
              <p className="text-[#666] text-xs mb-1">Salário</p>
              <p className="text-white font-medium">{app.salary || 'Não informado'}</p>
            </div>
            <div className="bg-[#141414] rounded-xl p-4 border border-[#222]">
              <p className="text-[#666] text-xs mb-1">Localização</p>
              <p className="text-white font-medium">{app.location || 'Não informado'}</p>
            </div>
            <div className="bg-[#141414] rounded-xl p-4 border border-[#222]">
              <p className="text-[#666] text-xs mb-1">Contrato</p>
              <p className="text-white font-medium">{app.type}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Descrição da vaga</h2>
            <p className="text-[#888] text-sm leading-relaxed">{app.description || 'Sem descrição'}</p>
            <div className="mt-6 pt-4 border-t border-[#222]">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#666]">Data da candidatura</span>
                <span className="text-white">{app.date}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Andamento do processo</h2>
            <div className="space-y-4">
              {app.timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${item.done ? 'bg-[#1DB954]' : 'bg-[#333]'}`} />
                    {index < app.timeline.length - 1 && <div className={`w-0.5 h-8 ${item.done ? 'bg-[#1DB954]' : 'bg-[#333]'}`} />}
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
        </div>

        <div className="bg-[#141414] rounded-xl p-6 border border-[#222] mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Notas</h2>
          </div>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
              placeholder="Adicionar uma nota..."
              className="flex-1 px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
            />
            <button onClick={handleAddNote} className="px-4 py-2 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760]">
              Adicionar
            </button>
          </div>
          {app.notes.length === 0 ? (
            <div className="bg-[#1a1a1a] rounded-lg p-4">
              <p className="text-[#888] text-sm">Nenhuma nota adicionada ainda.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {app.notes.map((note) => (
                <div key={note.id} className="bg-[#1a1a1a] rounded-lg p-4 flex items-start justify-between">
                  <div>
                    <p className="text-white text-sm">{note.text}</p>
                    <p className="text-[#666] text-xs mt-1">{note.date}</p>
                  </div>
                  <button onClick={() => deleteNote(app.id, note.id)} className="text-red-400 hover:text-red-300 text-sm">
                    Excluir
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-8">
          <button onClick={() => setShowDeleteConfirm(true)} className="px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm">
            Excluir candidatura
          </button>
          <div className="flex items-center gap-3">
            {app.status !== 'Finalizada' && (
              <button onClick={startEdit} className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]">
                Editar
              </button>
            )}
            {app.status !== 'Finalizada' ? (
              <button onClick={() => { setNewStage(app.stage); setShowStatusModal(true) }} className="px-4 py-2 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760] transition-colors">
                Atualizar status
              </button>
            ) : (
              <span className="px-4 py-2 bg-[#333] text-[#888] text-sm rounded-lg">
                {app.stage === 'Aprovada' ? 'Aprovada' : 'Rejeitada'}
              </span>
            )}
          </div>
        </div>

        {showStatusModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-[#141414] rounded-2xl w-full max-w-md border border-[#222] p-6">
              <h3 className="text-white text-lg font-bold mb-4">Atualizar status</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#888] mb-2">Etapa</label>
                  <select value={newStage} onChange={(e) => setNewStage(e.target.value)} className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]">
                    {stages.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setShowStatusModal(false)} className="flex-1 px-4 py-2.5 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] border border-[#333]">
                    Cancelar
                  </button>
                  <button onClick={handleUpdateStatus} className="flex-1 px-4 py-2.5 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760]">
                    Atualizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-[#141414] rounded-2xl w-full max-w-md border border-[#222] p-6">
              <h3 className="text-white text-lg font-bold mb-2">Excluir candidatura</h3>
              <p className="text-[#888] text-sm mb-6">Tem certeza que deseja excluir esta candidatura? Esta ação não pode ser desfeita.</p>
              <div className="flex gap-3">
                <button onClick={() => setShowDeleteConfirm(false)} className="flex-1 px-4 py-2.5 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] border border-[#333]">
                  Cancelar
                </button>
                <button onClick={handleDelete} className="flex-1 px-4 py-2.5 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600">
                  Excluir
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
