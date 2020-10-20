import styles from '../styles/upload.module.css'
import { AuthContext } from './auth/authContext.js'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from "next/router"
import UploadLayout from './components/uploadLayout.js'
import axios from 'axios'

export default function Upload() {
    const router = useRouter();

    const auth = useContext(AuthContext)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    useEffect(() => {
        if (!auth.auth || !auth.user) {
            router.push('/')
        }
    }, [])

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleDesc(e) {
        setDesc(e.target.value)
    }

    function submit() {
        axios.post('/api/upload', {
            title: title,
            body: desc,
            user_id: auth.user.id,
            author: auth.user.username,
            date_created: new Date()
        }).then(res => {
            if (res.data == 0) {
                console.log("Something went wrong...")
            } else {
                router.push('/home')
            }
        })
            .catch(err => err)
    }

    return (
        <div className={styles.container}>
            {auth.auth ? <UploadLayout handleTitle={handleTitle} handleDesc={handleDesc} submit={submit} /> : null}
        </div>
    )
}
