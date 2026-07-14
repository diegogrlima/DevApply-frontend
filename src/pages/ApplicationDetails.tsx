import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApplications } from '../contexts/ApplicationsContext'
import { getStageColor } from '../constants/stages'
import EditForm from '../components/application-details/EditForm'
import TimelineSection from '../components/application-details/TimelineSection'
import NotesSection from '../components/application-details/NotesSection'
import StatusModal from '../components/application-details/StatusModal'
import DeleteConfirm from '../components/application-details/DeleteConfirm'

export default function ApplicationDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { applications, deleteApplication, updateApplication, addNote, deleteNote, updateStatus } = useApplications()

  const app = applications.find((a) => a.id === Number(id))

  const [isEditing, setIsEditing] = useState(false)
  const [showStatusModal, setShowStatusModal] = useState(false)
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
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStageColor(app.stage)}`}>
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
          <EditForm
            app={app}
            onSave={(updates) => { updateApplication(app.id, updates); setIsEditing(false) }}
            onCancel={() => setIsEditing(false)}
          />
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
          <TimelineSection timeline={app.timeline} />
        </div>

        <NotesSection
          notes={app.notes}
          onAdd={(text) => addNote(app.id, text)}
          onDelete={(noteId) => deleteNote(app.id, noteId)}
        />

        <div className="flex items-center justify-between mt-8">
          <button onClick={() => setShowDeleteConfirm(true)} className="px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm">
            Excluir candidatura
          </button>
          <div className="flex items-center gap-3">
            {app.status !== 'Finalizada' && (
              <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]">
                Editar
              </button>
            )}
            {app.status !== 'Finalizada' ? (
              <button onClick={() => setShowStatusModal(true)} className="px-4 py-2 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760] transition-colors">
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
          <StatusModal
            currentStage={app.stage}
            onConfirm={(stage, status) => { updateStatus(app.id, stage, status); setShowStatusModal(false) }}
            onCancel={() => setShowStatusModal(false)}
          />
        )}

        {showDeleteConfirm && (
          <DeleteConfirm
            onConfirm={() => { deleteApplication(app.id); navigate('/') }}
            onCancel={() => setShowDeleteConfirm(false)}
          />
        )}
      </div>
    </div>
  )
}
