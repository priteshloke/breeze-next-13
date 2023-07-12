import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next 13 + Laravel Auth',
  description: 'Next 13 + Laravel Auth sample bootstrap app',
}

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='container content'>
          {children}
        </main>
      </body>
    </html>
  )
}
