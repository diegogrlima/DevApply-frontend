import { useApplicationForm } from '../../hooks/useApplicationForm'
import type { Application } from '../../contexts/ApplicationsContext'

interface EditFormProps {
  app: Application
  onSave: (updates: Partial<Application>) => void
  onCancel: () => void
}

export default function EditForm({ app, onSave, onCancel }: EditFormProps) {
  const { form, handleChange } = useApplicationForm({
    company: app.company,
    role: app.role,
    salary: app.salary,
    location: app.location,
    type: app.type,
    description: app.description,
    link: app.link,
    logo: app.logo,
  })

  const handleSave = () => {
    onSave({
      company: form.company,
      role: form.role,
      salary: form.salary,
      location: form.location,
      type: form.type,
      description: form.description,
    })
  }

  return (
    <div className="bg-[#141414] rounded-xl p-6 border border-[#222] mb-6">
      <h2 className="text-white font-semibold mb-4">Editando candidatura</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-[#888] mb-1">Empresa</label>
            <input value={form.company} onChange={(e) => handleChange('company', e.target.value)} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]" />
          </div>
          <div>
            <label className="block text-sm text-[#888] mb-1">Cargo</label>
            <input value={form.role} onChange={(e) => handleChange('role', e.target.value)} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-[#888] mb-1">Salário</label>
            <input value={form.salary} onChange={(e) => handleChange('salary', e.target.value)} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]" />
          </div>
          <div>
            <label className="block text-sm text-[#888] mb-1">Localização</label>
            <input value={form.location} onChange={(e) => handleChange('location', e.target.value)} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]" />
          </div>
          <div>
            <label className="block text-sm text-[#888] mb-1">Contrato</label>
            <select value={form.type} onChange={(e) => handleChange('type', e.target.value)} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954]">
              <option value="CLT">CLT</option>
              <option value="PJ">PJ</option>
              <option value="Estágio">Estágio</option>
              <option value="Freelancer">Freelancer</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm text-[#888] mb-1">Descrição</label>
          <textarea value={form.description} onChange={(e) => handleChange('description', e.target.value)} rows={3} className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#222] text-white rounded-lg focus:outline-none focus:border-[#1DB954] resize-none" />
        </div>
        <div className="flex gap-3">
          <button onClick={onCancel} className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] border border-[#333]">Cancelar</button>
          <button onClick={handleSave} className="px-4 py-2 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760]">Salvar</button>
        </div>
      </div>
    </div>
  )
}
