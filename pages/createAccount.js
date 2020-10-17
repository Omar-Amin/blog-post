import Axios from 'axios'
import { useState } from 'react'
import styles from '../styles/createAccount.module.css'
import Input from './components/formInput.js'
import Hash from './security/hashing.js'
import GenerateSalt from './security/salting.js'
import axios from 'axios'

export default function CreateAccount() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [email, setEmail] = useState("")

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
        axios.post('/api/createAccount', {
            username: username,
            password: password,
            email: email
        })
            .then(res => console.log(res.data))
            .catch(err => err)

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
            </form>
        </div>
    )
}
