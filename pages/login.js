import { useContext, useState } from 'react'
import styles from '../styles/login.module.css'
import Input from './components/formInput.js'
import axios from 'axios'
import Link from "next/link"
import { useRouter } from "next/router"
import { AuthContext } from './auth/authContext.js'

export default function LogIn() {
    const router = useRouter()

    const authentication = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        axios.post('/api/login', {
            username: username,
            password: password
        })
            .then(res => {
                if (res.data) {
                    authentication.setAuth(true)
                    authentication.setUser(res.data)
                    router.push("home")
                }
            })
            .catch(err => err)

        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.container}>
                <div className={styles.formBox}>
                    <h4 className={styles.title}>Log in</h4>
                    <Input title="Username" type="text" action={handleUsername} />
                    <Input title="Password" type="password" action={handlePassword} />
                    <input className={styles.submit} type="submit" value="Log in" />
                </div>
                <Link href="/createAccount">
                    <h5 className={styles.redirectLogin}>Create account</h5>
                </Link>
            </form>
        </div>
    )
}
