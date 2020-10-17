import styles from '../styles/Home.module.css'
import Link from "next/link"
import { AuthContext } from './auth/authContext.js'
import { useContext } from 'react'

export default function Home() {
    const auth = useContext(AuthContext)

    console.log(auth)

    return (
        <div className={styles.container}>
            <Link href="/">
                <button type="button">Log out</button>
            </Link>
        </div>
    )
}
