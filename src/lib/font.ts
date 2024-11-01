import { Poppins } from 'next/font/google'

export const poppins = Poppins({
  preload: true,
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})