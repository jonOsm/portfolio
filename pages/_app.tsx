import AlertBar from "@/components/AlertBar"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Martian_Mono } from "next/font/google"
import Head from "next/head"

const martian_mono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={martian_mono.variable}>
      <Head>
        <title>{"Jon's Portfolio"}</title>
        <meta
          property="og:title"
          content="Jonathan Osmond | Software Developer Seeking Employment"
        ></meta>
        <meta
          property="og:description"
          content="Jonathan Osmond's portfolio containing a variety of projects ranging from application to game development!"
        ></meta>
      </Head>
      <AlertBar />
      <Header />
      <Component className={"max-w-screen-xl" + martian_mono.variable} {...pageProps} />
      <Footer />
    </main>
  )
}
