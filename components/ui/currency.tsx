'use client'

import { formatter } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface CurrencyProps {
  value: string | number
  currencySymbol?: string // Optional prop for custom currency symbol
  fontSize?: string // Optional prop for font size
  color?: string // Optional prop for text color
  className?: string // Optional prop for additional custom classes
}

export const Currency: React.FC<CurrencyProps> = ({
  value,
  currencySymbol,
  fontSize = 'text-bold', // Default font size
  color = 'black', // Default text color
  className = '' // Default empty class
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  // Check if value is a number or can be parsed as a number
  const numericValue = typeof value === 'number' ? value : parseFloat(value as string)
  if (isNaN(numericValue)) return <div className="text-red-500">Invalid Value</div> // Handle invalid values

  // Format the value using the formatter utility
  const formattedValue = formatter.format(numericValue)

  return (
    <div className={`${fontSize} ${color} font-semibold ${className}`}>
      {currencySymbol ? `${currencySymbol} ${formattedValue}` : formattedValue}
    </div>
  )
}
