import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const mockEmails = [
  {
    id: 1,
    from: 'noreply@gupy.com.br',
    fromName: 'Gupy - Nubank',
    subject: 'Sua candidatura foi atualizada',
    date: '13/07/2026 10:30',
    preview: 'Olá Diego, sua candidatura para Desenvolvedor Java Júnior foi atualizada...',
    body: `Olá Diego,

Sua candidatura para a vaga de Desenvolvedor Java Júnior na Nubank foi atualizada.

Status atual: Em análise

Acesse a plataforma Gupy para mais detalhes sobre o processo seletivo.

Equipe de Recrutamento - Nubank`,
  },
  {
    id: 2,
    from: 'noreply@inhire.com.br',
    fromName: 'InHire - Stone',
    subject: 'Convite para teste técnico',
    date: '12/07/2026 14:15',
    preview: 'Parabéns Diego! Você foi selecionado para a próxima etapa...',
    body: `Parabéns Diego!

Você foi selecionado para a próxima etapa do processo seletivo para a vaga de Backend Java na Stone.

Próxima etapa: Teste Técnico
Prazo: 5 dias úteis

Acesse a plataforma InHire para realizar a prova.

B sorte!`,
  },
  {
    id: 3,
    from: 'rh@ifood.com.br',
    fromName: 'RH iFood',
    subject: 'Sua candidatura está em análise',
    date: '11/07/2026 09:00',
    preview: 'Olá Diego, recebemos sua candidatura para a vaga de Desenvolvedor Backend...',
    body: `Olá Diego,

Recebemos sua candidatura para a vaga de Desenvolvedor Backend na iFood.

Sua candidatura está em análise pelo nosso time de recrutamento.

Retornaremos em breve com novidades.

Equipe de Pessoas - iFood`,
  },
  {
    id: 4,
    from: 'noreply@gupy.com.br',
    fromName: 'Gupy - XP Inc.',
    subject: 'Resultado do processo seletivo',
    date: '08/07/2026 16:45',
    preview: 'Olá Diego, infelizmente não seguimos com sua candidatura...',
    body: `Olá Diego,

Agradecemos seu interesse em trabalhar conosco.

Após análise cuidadosa, infelizmente não seguimos com sua candidatura para a vaga de Engenheiro de Software neste momento.

Desejamos sucesso na sua carreira!

Equipe de Recrutamento - XP Inc.`,
  },
  {
    id: 5,
    from: 'linkedin@linkedin.com',
    fromName: 'LinkedIn',
    subject: 'Vagas compatíveis com seu perfil',
    date: '07/07/2026 08:00',
    preview: 'Encontramos 10 novas vagas de desenvolvedor na sua região...',
    body: `Olá Diego,

Encontramos 10 novas vagas compatíveis com seu perfil:

- Desenvolvedor Backend Pleno - Mercado Libre
- Engenheiro de Software - Loft
- Backend Developer - QuintoAndar

Acesse o LinkedIn para ver detalhes.`,
  },
]

export default function Emails() {
  const navigate = useNavigate()
  const [selectedEmail, setSelectedEmail] = useState<typeof mockEmails[0] | null>(null)

  return (
    <div className="ml-64 min-h-screen bg-[#0a0a0a] p-8 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-white text-2xl font-bold">Emails</h1>
            <p className="text-[#666] text-sm">
              Emails recebidos no email de candidaturas.
            </p>
          </div>
          <button
            onClick={() => navigate('/perfil')}
            className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]"
          >
            Configurar email
          </button>
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
                  <div className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center text-[#121212] font-bold">
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
              <div className="divide-y divide-[#222]">
                {mockEmails.map((email) => (
                  <div
                    key={email.id}
                    onClick={() => setSelectedEmail(email)}
                    className="flex items-center gap-4 p-4 hover:bg-[#1a1a1a] transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center text-[#121212] text-sm font-bold">
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
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
