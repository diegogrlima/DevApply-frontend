import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { jobPlatforms, platformColors } from '../constants/platforms'
import { mockEmails, type Email } from '../data/mockEmails'

export default function Emails() {
  const navigate = useNavigate()
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null)
  const [activePlatform, setActivePlatform] = useState('all')
  const [search, setSearch] = useState('')

  const filteredEmails = mockEmails.filter((email) => {
    const matchesPlatform = activePlatform === 'all' || email.platform === activePlatform
    const matchesSearch =
      email.fromName.toLowerCase().includes(search.toLowerCase()) ||
      email.subject.toLowerCase().includes(search.toLowerCase())
    return matchesPlatform && matchesSearch
  })

  return (
    <div className="ml-64 min-h-screen bg-[#0a0a0a] p-8 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-white text-2xl font-bold">Emails</h1>
            <p className="text-[#666] text-sm">Emails de plataformas de vagas.</p>
          </div>
          <button
            onClick={() => navigate('/perfil')}
            className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]"
          >
            Configurar email
          </button>
        </div>

        <div className="mb-6">
          <div className="relative mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#666" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar por remetente ou assunto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#141414] text-white text-sm pl-10 pr-4 py-2.5 rounded-lg border border-[#222] focus:outline-none focus:border-[#1DB954]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {jobPlatforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activePlatform === platform.id
                    ? 'bg-[#1DB954] text-[#121212]'
                    : 'text-[#888] hover:bg-[#1a1a1a]'
                }`}
              >
                {platform.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {selectedEmail ? (
            <div className="bg-[#141414] rounded-xl border border-[#222]">
              <div className="p-4 border-b border-[#222] flex items-center justify-between">
                <button
                  onClick={() => setSelectedEmail(null)}
                  className="flex items-center gap-2 text-[#888] hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  Voltar
                </button>
                <button className="px-4 py-2 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760] transition-colors">
                  Criar candidatura
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${platformColors[selectedEmail.platform]}`}>
                    {selectedEmail.fromName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{selectedEmail.fromName}</p>
                    <p className="text-[#666] text-sm">{selectedEmail.from}</p>
                  </div>
                </div>

                <h2 className="text-white text-xl font-bold mb-2">{selectedEmail.subject}</h2>
                <p className="text-[#666] text-sm mb-6">{selectedEmail.date}</p>

                <div className="bg-[#1a1a1a] rounded-lg p-6">
                  <p className="text-[#888] text-sm whitespace-pre-wrap leading-relaxed">{selectedEmail.body}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#141414] rounded-xl border border-[#222]">
              {filteredEmails.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-[#888]">Nenhum email encontrado.</p>
                </div>
              ) : (
                <div className="divide-y divide-[#222]">
                  {filteredEmails.map((email) => (
                    <div
                      key={email.id}
                      onClick={() => setSelectedEmail(email)}
                      className="flex items-center gap-4 p-4 hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold ${platformColors[email.platform]}`}>
                        {email.fromName.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium">{email.fromName}</p>
                        <p className="text-[#888] text-sm truncate">{email.subject}</p>
                        <p className="text-[#666] text-xs truncate mt-1">{email.preview}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#666] text-xs">{email.date.split(' ')[0]}</p>
                        <p className="text-[#666] text-xs">{email.date.split(' ')[1]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
