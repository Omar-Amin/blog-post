import styles from '../styles/Home.module.css'
import { AuthContext } from './auth/authContext.js'
import { useContext, useEffect } from 'react'
import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter();

    const auth = useContext(AuthContext)

    console.log(auth)

    useEffect(() => {
        if (!auth.auth) {
            router.replace('/')
        }
    }, [])

    return (
        <div className={styles.container}>
            {auth.auth ? <div>upload</div> : null}
        </div>
    )
}
