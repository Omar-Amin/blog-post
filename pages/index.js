import { useHistory } from "react-router-dom"
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {


  function handleLogIn() {
    this.props.history.push("/login")
  }

  return (
    <div className={styles.container}>
      <Link href="/login">
        <button type="button">Log in</button>
      </Link>
    </div>
  )
}
