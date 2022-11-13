import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


export default function IndexPage() {
  
  const handleOption = (treatment: string) => {
    localStorage.setItem("treatment", treatment)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Clínica Érica Vasconcelos</title>
        <meta name="description" content="Learn forms with Next.js" />
        <link rel="icon" href="/clinica-erica-vasconcelos-logo.png" />
      </Head>

      <main className={styles.main}>
        {/* <span className={styles.logopage}>
          <Image src="/clinica-erica-vasconcelos-logo.png" alt="Emagrecimento" width={120} height={120} />
        </span> */}
        <h1 className={styles.title}>
          Clínica Érica Vasconcelos
        </h1>

        <h1 className={styles.description}>
          A sua clínica de confiança.
        </h1>

        <div className={styles.grid}>
          <Link href="/js-form" className={styles.card} onClick={()=>handleOption('1')}>
            <h2>Emagrecimento</h2>
            <span className={styles.logo}>
              <Image src="/weight-scale.png" alt="Emagrecimento" width={150} height={130} />
            </span>
          </Link>

          <Link href="/js-form" className={styles.card} onClick={()=>handleOption('2')}>
            <h2>Harmonização facial</h2>
            <span className={styles.logo}>
              <Image src="/face.png" alt="Harmonizacao" width={150} height={130} />
            </span>
          </Link>

          <Link href="/js-form" className={styles.card} onClick={()=>handleOption('3')}>
            <h2>Aumento de Massa Muscular</h2>
            <span className={styles.logo}>
              <Image src="/muscle.png" alt="Massa" width={150} height={130} />
            </span>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Portugal |  Clínica Érica Vasconcelos
        </a>
      </footer>
    </div>
  )
}
