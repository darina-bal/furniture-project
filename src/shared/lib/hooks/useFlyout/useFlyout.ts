import { useCallback } from 'react'
import { useFlyoutStore } from './flyoutStore'

export type FlyoutType = 'search' | 'account' | 'cart'

export const useFlyout = () => {
  const { openFlyout, closeFlyout, closeAll } = useFlyoutStore()

  const openSearch = useCallback(() => openFlyout('search'), [openFlyout])
  const openAccount = useCallback(() => openFlyout('account'), [openFlyout])
  const openCart = useCallback(() => openFlyout('cart'), [openFlyout])

  const closeSearch = useCallback(() => closeFlyout('search'), [closeFlyout])
  const closeAccount = useCallback(() => closeFlyout('account'), [closeFlyout])
  const closeCart = useCallback(() => closeFlyout('cart'), [closeFlyout])

  return {
    openSearch,
    openAccount,
    openCart,
    closeSearch,
    closeAccount,
    closeCart,
    closeAll,
  }
}