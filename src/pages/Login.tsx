import { useState } from 'react'
import AuthLayout from '../components/AuthLayout'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <AuthLayout
      title="Entrar"
      icon="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      footer={{ text: 'Não tem uma conta?', linkText: 'Cadastrar', href: '/register' }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#B3B3B3] mb-1">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 bg-[#282828] border border-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#B3B3B3] mb-1">
            Senha
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 bg-[#282828] border border-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1DB954] text-[#121212] py-3 rounded-full font-bold hover:bg-[#1ed760] transition-colors"
        >
          Entrar
        </button>
      </form>
    </AuthLayout>
  )
}
