import Link from "next/link";
import styles from '../../styles/Navbar.module.css';


export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">TOP</Link></li>
        <li><Link href="/portfolio">SKILL</Link></li>
        <li><Link href="/contact">BLOG</Link></li>
      </ul>
    </nav>
  );
}