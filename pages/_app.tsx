import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Martian_Mono } from 'next/font/google'
const martian_mono = Martian_Mono({ variable: '--font-martian-mono', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={martian_mono.variable}>
      <Component className={martian_mono.variable} {...pageProps} />
    </main>
  )
}
