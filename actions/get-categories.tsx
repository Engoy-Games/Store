import { Category } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  const data = await res.json();
  console.log('API Response:', data); // Log the response to inspect it

  return data;
};