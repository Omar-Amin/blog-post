import { useState, useContext, useEffect } from 'react'
import styles from '../styles/createAccount.module.css'
import Input from './components/formInput.js'
import Hash from './security/hashing.js'
import GenerateSalt from './security/salting.js'
import axios from 'axios'
import Link from "next/link"
import { useRouter } from "next/router"
import { AuthContext } from './auth/authContext.js'

export default function CreateAccount() {
    const router = useRouter()
    const authentication = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        if (authentication.auth && authentication.user !== null) {
            router.push('/home')
        }
    }, [])

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleConfirmPass(e) {
        setConfirmPass(e.target.value)
    }

    function handleSubmit(e) {
        if (password === confirmPass) {
            const salt = GenerateSalt()
            axios.post('/api/createAccount', {
                username: username,
                password: Hash(password, salt),
                email: email,
                salting: salt
            })
                .then(res => {
                    if (res.data.type === 0) {
                        console.log("This user might already exist")
                    } else if (res.data.type === 1) {
                        authentication.setAuth(true)
                        authentication.setUser(res.data.name)
                        router.push("home")
                    }
                })
                .catch(err => err)
        }

        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.container}>
                <div className={styles.formBox}>
                    <h4 className={styles.title}>Create account</h4>
                    <Input title="Username" type="text" action={handleUsername} />
                    <Input title="Password" type="password" action={handlePassword} />
                    <Input title="Confirm password" type="password" action={handleConfirmPass} />
                    <Input title="Email" type="text" action={handleEmail} />
                    <input className={styles.submit} type="submit" value="Create account" />
                </div>
                <Link href="/login">
                    <h5 className={styles.redirectLogin}>I already have an account.</h5>
                </Link>
            </form>
        </div>
    )
}
