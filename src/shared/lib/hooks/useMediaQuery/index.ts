import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string) => {
  const getMatches = (): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false; // Дефолт для сервера
  }

  const [matches, setMatches] = useState<boolean>(getMatches)

  useEffect(() => {
    const media = window.matchMedia(query)
    const handleChange = () => setMatches(media.matches)

    media.addEventListener('change', handleChange)
    
    return () => media.removeEventListener('change', handleChange)
  }, [query])

  return matches
}

export const useIsMobile = () => useMediaQuery('(max-width: 599px)')