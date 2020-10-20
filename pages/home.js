import styles from '../styles/Home.module.css'
import Link from "next/link"
import { AuthContext } from './auth/authContext.js'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from "next/router"
import Post from './components/post.js'
import axios from 'axios'

const HomePage = ({ logOut, data }) => {
    return (
        <div className={styles.container}>
            {data.map(data => <Post title={data.title} desc={data.body} author={data.author} />)}
            <Link href="/">
                <button type="button" onClick={logOut}>Log out</button>
            </Link>
        </div>
    )
}

export default function Home() {
    const router = useRouter();
    const auth = useContext(AuthContext)
    const [data, setData] = useState([])

    function logOut() {
        auth.setCookie('token', { auth: false, user: null }, { path: '/' })
        auth.setAuth(false)
        auth.setUser(null)
    }

    useEffect(() => {
        if (!auth.auth) {
            router.replace('login')
        }
    }, [])

    useEffect(() => {
        axios.get('/api/getPosts')
            .then(res => setData(res.data))
    }, [])

    return (
        <div>
            {auth.auth ? <HomePage data={data} logOut={logOut} /> : null}
        </div>
    )
}
