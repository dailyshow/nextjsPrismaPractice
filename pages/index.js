import Head from 'next/head'
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="next 연습!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        홈 화면입니다.
      </h1>
    </Layout>
  )
}
