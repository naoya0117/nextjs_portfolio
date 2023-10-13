import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <nav>
      <Head>
        <title>naoya0117</title>
      </Head>
      <h1>こんにちは</h1>
      <p>情報系の学部に通う学生のブログサイトです</p>
      <p>フレームワークの学習がてらnext.jsで作りました</p>
      <h2>About</h2>
      <p>はじめましてnaoya0117です。</p>
      <p>大学生で、現在は情報系の学部に通っています。</p>
      <p>普段は、Linuxを中心に触っており、最近はアプリケーション開発を学んでおります。</p>
      <p>最近、より多くの技術を触れるようになったので備忘録がほしいと思い、ブログを作成しました。</p>
      <Link href="https://github.com/naoya0117">Github</Link>
      <h2>Skill</h2>
      <ul>
        <li>Linux(ArchLinux)</li>
        <li>Git</li>
        <li>Bash</li>
        <li>C</li>
        <li>Typescript</li>
      </ul>
    </nav>
  )
}