import { Link } from 'react-router-dom'

interface AuthLayoutProps {
  title: string
  icon: string
  footer: { text: string; linkText: string; href: string }
  children: React.ReactNode
}

export default function AuthLayout({ title, icon, footer, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212]">
      <div className="w-full max-w-md bg-[#181818] rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-[#1DB954] rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#121212" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </div>

        {children}

        <p className="text-center text-sm text-[#B3B3B3] mt-4">
          {footer.text}{' '}
          <Link to={footer.href} className="text-[#1DB954] hover:underline">
            {footer.linkText}
          </Link>
        </p>
      </div>
    </div>
  )
}
