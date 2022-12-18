import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Logo from '../../public/logo.png'
import Main from "../components/Main";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Rise Technology & Consulting</title>
        <meta name="description" content="Rise Technology & Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
         <Image className={styles.logo} src={Logo} alt={"Logo"}/>
        </header>
        <Main/>
        <footer className={styles.footer}>
          <div className={styles.repository}>
            <div className={styles.git}>
              git
            </div>
            <a
              target={"_blank"}
              className={styles.repoLink} href="https://github.com/mcelikx/next-task-manager" rel="noreferrer"
            >
              Repository
            </a>
          </div>
          <div className={styles.copyright}>
            © 2022 Muhammed Çelik
          </div>
        </footer>
      </main>
    </>
  )
}
