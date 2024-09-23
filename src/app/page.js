import Image from "next/image";
import styles from "@/styles/pages/page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                m
                <Link href='/test2'><div>test2</div></Link>
                <Link href='/testing'><div>testing</div></Link>
            </main>
            {/* <footer className={styles.footer}>
                f
            </footer> */}
        </div>
    );
}
