import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil';
function MyApp({ Component, pageProps }) {
  return (
    <>
    <RecoilRoot>
      <Head>
        <title>YouTube</title>
        <link rel="icon" type="image/png" sizes="16x16" href='../../youtube.png'></link>
      </Head>
      <Header />
      <Component {...pageProps}/>
      </RecoilRoot>
    </>
    
  )
}

export default MyApp
