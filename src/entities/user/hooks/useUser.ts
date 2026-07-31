// Пока нет бэкэнда, тут будет заглушка с имитацией сервера

import { useState, useEffect } from 'react'
import type { User } from '../model/types'
import { mockUser } from '../model/mock'

interface UseUserProps {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
}

export const useUser = (): UseUserProps => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        // В будущем здесь будет реальный запрос: const data = await api.getUser()
        setUser(mockUser)
        setIsLoading(false)
      } catch (err) {
        setError(err as Error)
        setIsLoading(false)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return { user, isLoading, error }
}