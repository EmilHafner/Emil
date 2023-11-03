import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import {DarkModeToggle} from "@/components/darkModeToggle";

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Emil Hafner',
  description: 'Personal website of Emil Hafner',
  keywords: ['Emil Hafner', 'Emil', 'Hafner', 'Developer', 'Software', 'Full-Stack']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
          <div className={"absolute top-8 left-8"}>
            <DarkModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
