import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApplications } from '../contexts/ApplicationsContext'

const companyColors = ['#820AD1', '#EA1D2C', '#0066CC', '#1DB954', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4']

export default function NewApplication() {
  const navigate = useNavigate()
  const { addApplication } = useApplications()
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [salary, setSalary] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('CLT')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [logo, setLogo] = useState<string | null>(null)

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setLogo(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const randomColor = companyColors[Math.floor(Math.random() * companyColors.length)]
    addApplication({ company, role, salary, location, type, description, link, logo, color: randomColor })
    navigate('/')
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
          <h1 className="text-white text-2xl font-bold">Nova candidatura</h1>
          <p className="text-[#666] text-sm">Registre uma nova vaga</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Dados da empresa</h2>

            <div className="space-y-4">
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
                <label className="block text-sm font-medium text-[#888] mb-2">
                  Logo da empresa
                </label>
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="logo-upload"
                    className="flex flex-col items-center justify-center w-24 h-24 bg-[#1a1a1a] border border-dashed border-[#333] rounded-xl cursor-pointer hover:border-[#1DB954] transition-colors"
                  >
                    {logo ? (
                      <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-xl" />
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#666" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        <span className="text-[#666] text-xs mt-1">Upload logo</span>
                      </>
                    )}
                    <input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      className="hidden"
                    />
                  </label>
                  {logo && (
                    <button
                      type="button"
                      onClick={() => setLogo(null)}
                      className="text-red-400 text-sm hover:underline"
                    >
                      Remover
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Dados da vaga</h2>

            <div className="space-y-4">
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
                  rows={4}
                  className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954] resize-none"
                  placeholder="Descreva as principais atividades e requisitos..."
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
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
