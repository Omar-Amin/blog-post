import { useState, useContext } from "react"
import Link from "next/link"
import styles from './css/header.module.css'
import { AuthContext } from '../auth/authContext.js'

export default function Header() {

    const auth = useContext(AuthContext)

    function logOut() {
        auth.setCookie('token', { auth: false, user: null }, { path: '/' })
        auth.setAuth(false)
        auth.setUser(null)
    }

    return (
        <div className={styles.header}>
            <Link href='/home'>
                <a className={styles.item}>
                    Home
                </a>
            </Link>
            <Link href='/profile'>
                <a className={styles.item}>
                    Profile
                </a>
            </Link>
            <Link href='/upload'>
                <a className={styles.item}>
                    Upload
                </a>
            </Link>
            <Link href='/'>
                <a className={styles.item} onClick={logOut}>
                    Log Out
                </a>
            </Link>
        </div>
    )
}