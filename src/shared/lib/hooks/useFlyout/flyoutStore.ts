import { create } from 'zustand'
import type { FlyoutType } from './useFlyout'

interface FlyoutState {
  openFlyouts: Set<FlyoutType>;
  openFlyout: (type: FlyoutType) => void;
  closeFlyout: (type: FlyoutType) => void;
  closeAll: () => void;
  isOpen: (type: FlyoutType) => boolean;
}

export const useFlyoutStore = create<FlyoutState>((set, get) => ({
  openFlyouts: new Set(),

  openFlyout: (type) => {
    set((state) => {
      const next = new Set(state.openFlyouts)
      next.add(type)
      return { openFlyouts: next }
    })
  },

  closeFlyout: (type) => {
    set((state) => {
      const next = new Set(state.openFlyouts)
      next.delete(type)
      return { openFlyouts: next }
    })
  },

  closeAll: () => set({ openFlyouts: new Set() }),

  isOpen: (type) => get().openFlyouts.has(type),
}))