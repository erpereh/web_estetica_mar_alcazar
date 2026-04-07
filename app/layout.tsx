import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Estética Mar Alcázar | Depilación Láser y Tratamientos Faciales en Villa de Vallecas',
  description: 'Centro de estética en Villa de Vallecas, Madrid. Depilación láser definitiva sin dolor y tratamientos faciales personalizados. 5.0 estrellas en Google con más de 73 reseñas.',
  keywords: 'depilación láser, tratamientos faciales, estética, Villa de Vallecas, Madrid, depilación sin dolor, limpieza facial',
  openGraph: {
    title: 'Estética Mar Alcázar | Depilación Láser y Tratamientos Faciales',
    description: 'Resultados reales. Sin dolor. Con el trato que mereces.',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
