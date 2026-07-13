import { useState } from 'react'

interface NewApplicationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewApplicationModal({ isOpen, onClose }: NewApplicationModalProps) {
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [salary, setSalary] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('CLT')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ company, role, salary, location, type, description, link })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#141414] rounded-2xl w-full max-w-lg border border-[#222] max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-[#222]">
          <div>
            <h2 className="text-white text-xl font-bold">Nova candidatura</h2>
            <p className="text-[#666] text-sm">Registre uma nova vaga</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#888] hover:bg-[#1a1a1a] rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-[#888] mb-2">
              Empresa *
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
              placeholder="Ex: Nubank"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-[#888] mb-2">
              Cargo *
            </label>
            <input
              id="role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
              placeholder="Ex: Desenvolvedor Backend"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-[#888] mb-2">
                Salário
              </label>
              <input
                id="salary"
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
                placeholder="Ex: R$ 5.000 - R$ 8.000"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-[#888] mb-2">
                Localização
              </label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
                placeholder="Ex: Remoto"
              />
            </div>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-[#888] mb-2">
              Tipo de contrato
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
            >
              <option value="CLT">CLT</option>
              <option value="PJ">PJ</option>
              <option value="Estágio">Estágio</option>
              <option value="Freelancer">Freelancer</option>
            </select>
          </div>

          <div>
            <label htmlFor="link" className="block text-sm font-medium text-[#888] mb-2">
              Link da vaga
            </label>
            <input
              id="link"
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]"
              placeholder="https://..."
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-[#888] mb-2">
              Descrição
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954] resize-none"
              placeholder="Descreva as principais atividades e requisitos..."
            />
          </div>

          <div className="flex items-center gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760] transition-colors"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
