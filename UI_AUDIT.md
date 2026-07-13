# UI Audit - JobTracker Frontend

## Problemas Encontrados

### 1. Rotas faltando na Sidebar
**Problema:** Sidebar possui 3 itens (Home, Candidaturas, Configurações) mas apenas `/` tem rota.

| Item | Rota | Status |
|------|------|--------|
| Home | `/` | ✅ Implementado |
| Candidaturas | `/candidaturas` | ✅ Implementado |
| Configurações | `/configuracoes` | ✅ Implementado |

---

### 2. ApplicationDetails com dados hardcoded
**Problema:** Apenas o id '1' (Nubank) tem dados completos. Clicar em outras candidaturas mostra fallback incorreto.

**Solução:** ✅ Dados mockados adicionados para todas as 6 candidaturas.

---

### 3. Componentes não utilizados
**Problema:** Componentes do dashboard antigo não eram mais usados.

**Solução:** ✅ Removidos:
- Header.tsx
- StatsCard.tsx
- RecentApplications.tsx
- ProcessStages.tsx
- UpcomingInterviews.tsx
- Reminders.tsx

---

### 4. Modal sem persistência
**Problema:** O formulário do NewApplicationModal não salva os dados.

**Status:** ⏳ Pendente (requer estado global ou API)

---

## Status Final

- [x] Remover componentes não utilizados
- [x] Criar rota `/candidaturas`
- [x] Criar rota `/configuracoes`
- [x] Preencher dados mockados em ApplicationDetails
- [ ] Conectar modal ao estado (requer Context/API)

---

*Atualizado: 13/07/2026*
