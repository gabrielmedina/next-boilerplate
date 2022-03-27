import type { NextPage } from 'next'
import Head from 'next/head'
import { LayoutDefault } from 'src/components/layouts'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDefault>
        <h1 style={{ margin: 0 }}>Next Boilerplate</h1>
      </LayoutDefault>
    </>
  )
}

export default Home
