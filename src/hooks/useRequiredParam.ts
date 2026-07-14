import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function useRequiredParam(name: string): string {
  const { [name]: param } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!param || isNaN(Number(param))) {
      navigate('/', { replace: true })
    }
  }, [param, navigate])

  return param ?? ''
}
