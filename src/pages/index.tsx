import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>naoya0117</title>
      </Head>
      <main>
        <h1>こんにちは</h1>
        <p>情報系の学部に通う学生のブログサイトです</p>
        <p>フレームワークの学習がてらnext.jsで作りました</p>
        <h2>About</h2>
        <p>はじめましてnaoya0117です。</p>
        <p>大学生で、現在は情報系の学部に通っています。</p>
        <p>普段は、Linuxを中心に触っており、最近はアプリケーション開発を学んでおります。</p>
        <p>最近、より多くの技術を触れるようになったので備忘録がほしいと思い、ブログを作成しました。</p>
        <Link href="https://github.com/naoya0117"><img src="button/github-mark.png" alt="github" /></Link>
        <h2>Skill</h2>
        <p>経験環境・ツール</p>
        <ul>
          <li>GNU/Linux(ArchLinux)</li>
          <li>Windows</li>
          <li>Docker</li>
          <li>Git</li>
          <li>vim</li>
        </ul>
        <p>使用言語</p>
        <ul>
          <li>Bash</li>
          <li>C</li>
          <li>Java</li>
          <li>Typescript</li>
        </ul>
        <p>ツール</p>
        <ul>
          <li>next.js</li>
          <li>React</li>
        </ul>
      </main>
    </div>
  )
}