// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
// import Layout ,{ siteTitle } from '../components/layout';
// import utilStyles from '../styles/utils.module.css';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  
  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Read <Link href="/posts/first-post"><a>This page !!</a></Link>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>
    //     <h1>Say My Name</h1>
    //     <img src='/images/dearWW.png' alt='l8r'/>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi , I am Heisenberg , a Science Teacher in junior high school.
         Sometimes , I cook some blue good shit for money , but I got a badly
         lung cancer , so I will be dead in anytime .
        </p>

      <h1 className={utilStyles.toNext}>
        Read <Link href="/posts/first-post"><a>This page !!</a></Link>
      </h1>

        <div>
          check out some blue good shit:<br/>
          <a href='https://en.wikipedia.org/wiki/Breaking_Bad'>
            Sooo Good Web
          </a>
        </div>
      </section>
    </Layout>
  )
}
