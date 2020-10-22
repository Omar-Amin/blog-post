import styles from '../styles/Home.module.css'
import { AuthContext } from './auth/authContext.js'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from "next/router"
import Post from './components/post.js'
import axios from 'axios'
import Header from './components/header.js'

const HomePage = ({ data }) => {
    return (
        <div className={styles.container}>
            {data.map(data => <Post title={data.title} desc={data.body} author={data.author} date={data.date_created} />)}
        </div>
    )
}

export default function Home() {
    const router = useRouter();
    const auth = useContext(AuthContext)
    const [data, setData] = useState([])

    useEffect(() => {
        if (auth.auth) {
            axios.get('/api/getPosts')
                .then(res => setData(res.data))
                .catch()
        } else {
            router.replace('login')
        }
    }, [])

    return (
        <div>
            <Header />
            {auth.auth ? <HomePage data={data} /> : null}
        </div>
    )
}
