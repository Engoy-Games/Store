'use client'

import { Product } from '@/types'
import { ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import { Currency } from './ui/currency'

interface InfoProps {
  data: Product
}

export const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">{data?.name}</h1>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-white">
          <Currency value={data?.price} />
        </p>
      </div>

      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2 text-black bg-white">
          Add to cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  )
}
