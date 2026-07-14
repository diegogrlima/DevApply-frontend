export interface Email {
  id: number
  from: string
  fromName: string
  subject: string
  date: string
  preview: string
  body: string
  platform: string
}

export const mockEmails: Email[] = [
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
    platform: 'gupy',
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
    platform: 'inhire',
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
    platform: 'other',
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
    platform: 'gupy',
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
    platform: 'linkedin',
  },
]
