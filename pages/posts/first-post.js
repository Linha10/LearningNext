import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'


export default function FirstPost () {
    return (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy = 'lazyOnload'
        onLoad={()=>
        console.log('script loaded Success , window FB works')}
        />

        <h1>First Post</h1>

        <h1>
            <Link href='/'>
                <a>Back To Home</a>
            </Link>
        </h1>
    </Layout>
    )
}