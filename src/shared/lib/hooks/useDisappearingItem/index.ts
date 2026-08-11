import { useCallback, useEffect, useRef, useState } from 'react'

export const useDisappearingItem = () => {
  const [disappearingId, setDisappearingId] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const startDisappearing = useCallback(
    (id: string, onComplete: () => void) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      setDisappearingId(id)

      timerRef.current = setTimeout(() => {
        onComplete()
        setDisappearingId(null)
        timerRef.current = null
      }, 400)
    }, [])

  const isDisappearing = useCallback((id: string) => 
    disappearingId === id,
    [disappearingId]
  )

  return {
    disappearingId,
    isDisappearing,
    startDisappearing,
  }
}