import styles from '../styles/upload.module.css'
import { AuthContext } from './auth/authContext.js'
import { useContext, useEffect } from 'react'
import { useRouter } from "next/router"
import UploadLayout from './components/uploadLayout.js'

export default function Upload() {
    const router = useRouter();

    const auth = useContext(AuthContext)

    useEffect(() => {
        if (!auth.auth || !auth.user) {
            router.push('/')
        }
    }, [])

    return (
        <div className={styles.container}>
            {auth.auth ? <UploadLayout /> : null}
        </div>
    )
}
