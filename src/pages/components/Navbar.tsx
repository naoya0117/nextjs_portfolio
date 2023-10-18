import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Navbar.module.css';


export default function Navbar() {
  return (
    <div className={styles.nav}>
        <div className={styles.navList}>
            <div className={styles.logo}>
                <Link href={"/"}>
                    <Image src={"/icon/logo.png"}
                           width={50}  height={50}
                           alt={"logo"}/>
                    <p>　Blog</p>
                </Link>
            </div>
            <ul>
                <li><Link href="/">TOP</Link></li>
                <li><Link href="/portfolio">PORTFOLIO</Link></li>
                <li><Link href="/contact">BLOG</Link></li>
            </ul>
        </div>
    </div>
  );
}