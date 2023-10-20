import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import {Button, Grid} from "@mui/material";

export default function Home() {
  return (
    <>
      <title>naoya0117</title>
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
            <br/>
          </div>
          <h1>Portfolio</h1>
            <p>今までの開発の成果物やスキルなどをあげています。<br/>
              なにか開発したり、新しい技術を学んだら更新していきます。
            </p>
          <Grid container justifyContent="center">
            <Button variant="outlined" href="/portfolio">
              PORTFOLIO
            </Button>
          </Grid>
          <h1>ブログ</h1>
          <p>準備中です<br/>
            PCの環境構築や設定、開発で詰まったところを書いていこうと思います。
          </p>
          <Grid container alignContent="center" justifyContent="center">
            <Button variant="outlined" href="#">
              BLOG(準備中)
            </Button>
          </Grid>
        </div>
      </main>
    </>
  )
}