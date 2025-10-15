import './globals.css'
import { ThemeToggle } from '@/components/commons/theme-toggle'
import { montserrat } from '@/lib/fonts'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased ${montserrat.className}`}>
        {children}
        <ThemeToggle />
      </body>
    </html>
  )
}
