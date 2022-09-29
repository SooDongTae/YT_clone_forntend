import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>YouTube</title>
        <link rel="icon" type="image/png" sizes="16x16" href='../../youtube.png'></link>
      </Head>
      <Component {...pageProps}/>
      {/* <Header /> */}
    </>
    
  )
}

export default MyApp
