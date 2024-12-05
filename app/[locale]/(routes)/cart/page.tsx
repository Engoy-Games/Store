'use client'

import { Container } from '@/components/ui/container'
import { useCart } from '@/hooks/use-cart'
import { useEffect, useState } from 'react'
import { CartItems } from './components/cart-items'
import { Summary } from './components/summary'
import { useTranslations } from 'next-intl' // Importing the translations hook

const CartPage = () => {
  const cart = useCart()
  const t = useTranslations('cart') // Accessing cart translations
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="bg-gradient-to-bl from-[#7f36b9] via-[#6a3fbf] to-[#625bff] py-[100px] px-12">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">{t('title')}</h1>

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-white">{t('emptyMessage')}</p>
              )}

              <ul>
                {cart.items.map((item) => (
                  <CartItems key={item.id} data={item} />
                ))}
              </ul>
            </div>

            <Summary />
          </div>

          {/* Optional: Add a Continue Shopping Button */}
          {cart.items.length === 0 && (
            <div className="mt-8">
              <button
                className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-bold"
                onClick={() => window.location.href = '/shop'} // Redirect to shop page
              >
                {t('continueShopping')}
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default CartPage
