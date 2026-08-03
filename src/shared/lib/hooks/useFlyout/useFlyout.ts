import { useCallback } from 'react'
import { useFlyoutStore } from './flyoutStore'

export type FlyoutType = 'search' | 'cart'

export const useFlyout = () => {
  const { openFlyout, closeFlyout, closeAll } = useFlyoutStore()

  const openSearch = useCallback(() => openFlyout('search'), [openFlyout])
  const openCart = useCallback(() => openFlyout('cart'), [openFlyout])

  const closeSearch = useCallback(() => closeFlyout('search'), [closeFlyout])
  const closeCart = useCallback(() => closeFlyout('cart'), [closeFlyout])

  return {
    openSearch,
    openCart,
    closeSearch,
    closeCart,
    closeAll,
  }
}