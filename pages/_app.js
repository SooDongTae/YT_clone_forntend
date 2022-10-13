import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';
import WatchHeader from '../components/watchHeader';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <RecoilRoot>
      <Head>
        <title>YouTube</title>
        <link rel="icon" type="image/png" sizes="16x16" href='../../youtube.png'></link>
      </Head>
      {router.route === '/' ? <Header /> : <WatchHeader />}
      <Component {...pageProps}/>
      </RecoilRoot>
    </>
    
  )
}

export default MyApp
