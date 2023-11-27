import ThemeRegistry from '@/component/ThemeRegistry/ThemeRegistry'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YOUTUBE_CLONE',
  description: 'CREATED BY DEV KM',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ThemeRegistry>
          <div>
            <Navbar/>
        {children}
        </div>
        </ThemeRegistry>
        </body>
    </html>
  )
}