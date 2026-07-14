import { useState, useMemo } from 'react'
import type { Application } from '../contexts/ApplicationsContext'

export interface ApplicationFilters {
  activeFilter: string
  search: string
  sortOrder: 'recent' | 'oldest'
  statusFilter: string
  showFilters: boolean
}

export interface ApplicationStats {
  total: number
  inProgress: number
  finalized: number
}

const defaultFilters: ApplicationFilters = {
  activeFilter: 'Todos',
  search: '',
  sortOrder: 'recent',
  statusFilter: 'Todos',
  showFilters: false,
}

export function useFilteredApplications(applications: Application[]) {
  const [filters, setFilters] = useState<ApplicationFilters>(defaultFilters)

  const setFilter = <K extends keyof ApplicationFilters>(
    key: K,
    value: ApplicationFilters[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => setFilters(defaultFilters)

  const filtered = useMemo(() => {
    return applications
      .filter((app) => {
        const matchesTab =
          filters.activeFilter === 'Todos' ||
          (filters.activeFilter === 'Em andamento' && app.status === 'Em andamento') ||
          (filters.activeFilter === 'Aprovadas' && app.stage.includes('Aprovada')) ||
          (filters.activeFilter === 'Rejeitadas' && app.stage.includes('Rejeitada'))

        const matchesStatus =
          filters.statusFilter === 'Todos' || app.status === filters.statusFilter

        const matchesSearch =
          app.company.toLowerCase().includes(filters.search.toLowerCase()) ||
          app.role.toLowerCase().includes(filters.search.toLowerCase())

        return matchesTab && matchesStatus && matchesSearch
      })
      .sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-'))
        const dateB = new Date(b.date.split('/').reverse().join('-'))
        return filters.sortOrder === 'recent'
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime()
      })
  }, [applications, filters])

  const stats = useMemo<ApplicationStats>(() => ({
    total: applications.length,
    inProgress: applications.filter((a) => a.status === 'Em andamento').length,
    finalized: applications.filter((a) => a.status === 'Finalizada').length,
  }), [applications])

  return { filtered, stats, filters, setFilter, clearFilters }
}
