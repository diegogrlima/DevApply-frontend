export default function Configuracoes() {
  return (
    <div className="ml-64 min-h-screen bg-[#0a0a0a] p-8 w-full">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-white text-2xl font-bold">Configurações</h1>
          <p className="text-[#666] text-sm">Gerencie suas preferências.</p>
        </div>

        <div className="space-y-6">
          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Perfil</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#333] rounded-full flex items-center justify-center text-white text-xl font-medium">
                DL
              </div>
              <div>
                <p className="text-white font-medium">Diego Lima</p>
                <p className="text-[#666] text-sm">diego@email.com</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]">
              Editar perfil
            </button>
          </div>

          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Notificações</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm">Email de lembretes</p>
                  <p className="text-[#666] text-xs">Receba lembretes de entrevistas</p>
                </div>
                <div className="w-10 h-6 bg-[#1DB954] rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm">Atualização de status</p>
                  <p className="text-[#666] text-xs">Notificar quando o status mudar</p>
                </div>
                <div className="w-10 h-6 bg-[#1DB954] rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Integração com Email</h2>
            <p className="text-[#888] text-sm mb-4">
              Conecte seu email para receber notificações automáticas sobre suas candidaturas.
            </p>
            <button className="px-4 py-2 bg-[#1DB954] text-[#121212] text-sm font-semibold rounded-lg hover:bg-[#1ed760] transition-colors">
              Conectar email
            </button>
          </div>

          <div className="bg-[#141414] rounded-xl p-6 border border-[#222]">
            <h2 className="text-white font-semibold mb-4">Dados</h2>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-lg hover:bg-[#222] transition-colors border border-[#333]">
                Exportar dados
              </button>
              <button className="px-4 py-2 text-red-400 text-sm rounded-lg hover:bg-red-500/10 transition-colors">
                Limpar todos os dados
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
