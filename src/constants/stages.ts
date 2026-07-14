export const stages = [
  'Currículo Enviado',
  'Em Análise',
  'Teste Técnico',
  'Entrevista Técnica',
  'Entrevista RH',
  'Proposta',
  'Aprovada',
  'Rejeitada',
] as const

export type Stage = (typeof stages)[number]

export const stageColors: Record<Stage, string> = {
  'Currículo Enviado': 'bg-[#333] text-[#888]',
  'Em Análise': 'bg-blue-500/20 text-blue-400',
  'Teste Técnico': 'bg-amber-500/20 text-amber-400',
  'Entrevista Técnica': 'bg-emerald-500/20 text-emerald-400',
  'Entrevista RH': 'bg-emerald-500/20 text-emerald-400',
  'Proposta': 'bg-purple-500/20 text-purple-400',
  'Aprovada': 'bg-emerald-500/20 text-emerald-400',
  'Rejeitada': 'bg-[#333] text-[#888]',
}

export function getStageColor(stage: string): string {
  return stageColors[stage as Stage] ?? 'bg-[#333] text-[#888]'
}
