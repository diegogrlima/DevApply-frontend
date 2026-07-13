import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Perfil() {
  const navigate = useNavigate()
  const [name, setName] = useState('Diego Lima')
  const [email, setEmail] = useState('diego@email.com')
  const [phone, setPhone] = useState('(11) 99999-9999')
  const [linkedin, setLinkedin] = useState('')
  const [github, setGithub] = useState('')
  const [jobEmail, setJobEmail] = useState('')
  const [imapServer, setImapServer] = useState('imap.gmail.com')
  const [imapPassword, setImapPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, phone, linkedin, github, jobEmail, imapServer, imapPassword })
    alert('Perfil atualizado!')
  }

  return (
    <div className="ml-64 min-h-screen bg-[#0a0a0a] p-8 w-full">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#888] hover:text-white mb-6 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Voltar
        </button>

        <div className="mb-8">
          <h1 className="text-white text-2xl font-bold">Meu perfil</h1>
          <p className="text-[#666] text-sm">Gerencie suas informações pessoais.</p>
        </div>

        <div className="bg-[#141414] rounded-xl p-6 border border-[#222] mb-6">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-[#333] rounded-full flex items-center justify-center text-white text-2xl font-medium">
              DL
            </div>
            <div>
              <button className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]">
                Alterar foto
              </button>
              <p className="text-[#666] text-xs mt-2">JPG, PNG. Tamanho máximo 2MB.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Informações pessoais</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#888] mb-2">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#888] mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#888] mb-2">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Email para candidaturas</h2>
            <p className="text-[#666] text-sm mb-4">Configure um email exclusivo para suas candidaturas. Os emails recebidos serão exibidos na página "Emails".</p>

            <div className="space-y-4">
              <div>
                <label htmlFor="jobEmail" className="block text-sm font-medium text-[#888] mb-2">
                  Email de candidaturas
                </label>
                <input
                  id="jobEmail"
                  type="email"
                  value={jobEmail}
                  onChange={(e) => setJobEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
                  placeholder="diego.trabalho@gmail.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="imapServer" className="block text-sm font-medium text-[#888] mb-2">
                    Servidor IMAP
                  </label>
                  <input
                    id="imapServer"
                    type="text"
                    value={imapServer}
                    onChange={(e) => setImapServer(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
                    placeholder="imap.gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="imapPassword" className="block text-sm font-medium text-[#888] mb-2">
                    Senha de app
                  </label>
                  <input
                    id="imapPassword"
                    type="password"
                    value={imapPassword}
                    onChange={(e) => setImapPassword(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <p className="text-[#666] text-xs">
                Para Gmail, gere uma senha de app em <a href="https://myaccount.google.com/apppasswords" target="_blank" rel="noopener noreferrer" className="text-[#1DB954] hover:underline">myaccount.google.com/apppasswords</a>
              </p>
            </div>
          </div>

          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Links profissionais</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-[#888] mb-2">
                  LinkedIn
                </label>
                <input
                  id="linkedin"
                  type="url"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
                  placeholder="https://linkedin.com/in/seu-perfil"
                />
              </div>

              <div>
                <label htmlFor="github" className="block text-sm font-medium text-[#888] mb-2">
                  GitHub
                </label>
                <input
                  id="github"
                  type="url"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
                  placeholder="https://github.com/seu-usuario"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 px-4 py-2.5 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760] transition-colors"
            >
              Salvar alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
