import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>naoya0117</title>
      </Head>
      <main>
        <header className={styles.header}>
            <h1>こんにちは</h1>
            <p>情報系の学部に通う学生のブログサイトです</p>
            <p>フレームワークの学習がてらnext.jsで作りました</p>
        </header>
        <div className={styles.container}>
          <h1>About</h1>
          <p>はじめまして</p>
          <p>大学生で、現在は情報系の学部に通っています。</p>
          <p>普段は、Linuxを中心に触っており、最近はアプリケーション開発を学んでおります。</p>
          <p>最近、より多くの技術を触れるようになったので備忘録がほしいと思い、ブログを作成しました。</p>
          <div className={styles.buttonContainer}>
            <Link className={styles.button} href="https://github.com/naoya0117">
              <Image src={"/button/github-mark.png"}
                     width={30} height={30}
                     alt={"github-button"}/>
            </Link>
            <Link className={styles.button} href={"mailto:117302@yahoo.ne.jp"}>
              <Image src={"/button/gmail.png"}
                       width={50} height={50}
                     alt={"gmail-button"}/>
            </Link>
          </div>
          <h1>Skill</h1>
          <h2>開発環境</h2>
          <ul>
            <li>GNU/Linux(ArchLinux)</li>
            <li>Windows</li>
            <li>Docker</li>
            <li>Git</li>
            <li>vim</li>
          </ul>
          <h2>使用言語</h2>
          <ul>
            <li>Bash</li>
            <li>C</li>
            <li>Java</li>
            <li>Typescript</li>
          </ul>
          <h2>フレームワーク・ライブラリ</h2>
          <ul>
            <li>React.js</li>
            <li>next.js</li>
            <li>Springboot</li>
          </ul>
        </div>
      </main>
    </div>
  )
}