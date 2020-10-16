import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {

  return (
    <div className={styles.container}>
      <Link href="/login">
        <button type="button">Log in</button>
      </Link>
      <Link href="/createAccount">
        <button type="button">Create account</button>
      </Link>
    </div>
  )
}
