import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension' // required for devtools typing

const useCountStore = create<CountInterface>()(
  devtools(
    // persist(
      (set) => ({
        count: 0,
        increase: (by) => set((state) => ({ count: state.count + by })),
      }),
      {
        name: 'count-storage',
      },
    // ),
  ),
)

export {
  useCountStore
}