import styles from '../styles/Home.module.css'
import Link from "next/link"
import { useContext, useEffect } from 'react'
import { useRouter } from "next/router"
import { AuthContext } from './auth/authContext.js'

export default function Home() {
  const router = useRouter()
  const authentication = useContext(AuthContext)

  useEffect(() => {
    if (authentication.auth && authentication.user !== null) {
      router.push('/home')
    }
  }, [])

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
