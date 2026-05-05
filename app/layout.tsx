import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kimani Mukundi — Software Developer',
  description: 'Portfolio of Kimani Mukundi — Software Developer, ML Engineer, Problem Solver based in Nairobi, Kenya.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
