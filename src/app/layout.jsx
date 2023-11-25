import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Newsroom',
    default: 'Newsroom - Empowering author-owned publications',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased scroll-smooth">
      <body className="flex min-h-full flex-col scroll-smooth">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
