import styles from '../styles/Home.module.css'
import Link from "next/link"
import { AuthContext } from './auth/authContext.js'
import { useContext, useEffect } from 'react'
import { useRouter } from "next/router"

const HomePage = (logOut) => {
    return (
        <Link href="/">
            <button type="button" onClick={logOut}>Log out</button>
        </Link>
    )
}

export default function Home() {
    const router = useRouter();

    const auth = useContext(AuthContext)

    console.log(auth)

    function logOut() {
        auth.setAuth(false)
        auth.setUser(null)
    }

    useEffect(() => {
        if (!auth.auth) {
            router.replace('login')
        }
    }, [])

    return (
        <div className={styles.container}>
            {auth.auth ? <HomePage logOut={logOut} /> : null}
        </div>
    )
}
