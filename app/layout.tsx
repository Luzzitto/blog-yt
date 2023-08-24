import './globals.css'
import Navbar from './components/Navbar'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Luzzitto's Blog",
  description: 'Created by Dave Gray',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800" suppressHydrationWarning={true}>
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
