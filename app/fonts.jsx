// app/fonts.ts
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["100", "200" , "300","400", "500", "600", "700", "800", "900"],
})

export const fonts = {
  poppins,
}