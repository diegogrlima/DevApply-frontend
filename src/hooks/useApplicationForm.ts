import { useState } from 'react'

export interface ApplicationFormData {
  company: string
  role: string
  salary: string
  location: string
  type: string
  description: string
  link: string
  logo: string | null
}

const emptyForm: ApplicationFormData = {
  company: '',
  role: '',
  salary: '',
  location: '',
  type: 'CLT',
  description: '',
  link: '',
  logo: null,
}

export function useApplicationForm(initialValues?: Partial<ApplicationFormData>) {
  const [form, setForm] = useState<ApplicationFormData>({
    ...emptyForm,
    ...initialValues,
  })

  const handleChange = (field: keyof ApplicationFormData, value: string | null) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const reset = (values?: Partial<ApplicationFormData>) => {
    setForm({ ...emptyForm, ...values })
  }

  return { form, handleChange, reset }
}
