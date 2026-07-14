export interface JobPlatform {
  id: string
  label: string
  domain: string
}

export const jobPlatforms: JobPlatform[] = [
  { id: 'all', label: 'Todos', domain: '' },
  { id: 'gupy', label: 'Gupy', domain: 'gupy.com.br' },
  { id: 'inhire', label: 'InHire', domain: 'inhire.com.br' },
  { id: 'linkedin', label: 'LinkedIn', domain: 'linkedin.com' },
  { id: 'vagas', label: 'Vagas', domain: 'vagas.com.br' },
  { id: 'kenoby', label: 'Kenoby', domain: 'kenoby.com' },
  { id: 'other', label: 'Outros', domain: 'other' },
]

export const platformColors: Record<string, string> = {
  gupy: 'bg-blue-500',
  inhire: 'bg-purple-500',
  linkedin: 'bg-[#0A66C2]',
  vagas: 'bg-orange-500',
  kenoby: 'bg-teal-500',
  other: 'bg-[#666]',
}
