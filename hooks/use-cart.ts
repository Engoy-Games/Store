import { toast } from 'react-hot-toast'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { Product } from '@/types'
import { getProduct } from '@/actions/get-product' // Make sure this is correct

interface CartStore {
  items: Product[]
  product: Product | null
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  removeAll: () => void
  fetchProductById: (id: string) => void
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      product: null,
      addItem: (data: Product) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
          return toast('Item already in cart.')
        }

        set({ items: [...get().items, data] })
        toast.success('Item added to cart.')
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
        toast.success('Item removed from cart.')
      },
      removeAll: () => set({ items: [] }),

      fetchProductById: async (id: string) => {
        console.log('Fetching product for ID:', id)
        try {
          const product = await getProduct(id)
          console.log('Fetched product:', product)
          set({ product }) // Set the product in state
        } catch (error) {
          toast.error('Failed to fetch product.')
          console.error('Error fetching product:', error)
        }
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
