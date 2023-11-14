import type { Metadata } from 'next'
import { Inconsolata as GlobalFont } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import {DarkModeToggle} from "@/components/darkModeToggle";
import { Analytics } from '@vercel/analytics/react';

const inter = GlobalFont({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Emil Hafner',
  description: 'Personal website of Emil Hafner',
  keywords: ['Emil Hafner', 'Emil', 'Hafner', 'Developer', 'Software', 'Full-Stack'],
  icons: {
    icon: '@/public/favicon.ico',
  }
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
      <Analytics />
      </body>
    </html>
  )
}
