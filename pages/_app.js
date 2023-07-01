import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>COBBLED Marketplace by Aaron Hope</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
}
