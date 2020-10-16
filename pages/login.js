import Axios from 'axios'
import { useState } from 'react'
import styles from '../styles/login.module.css'
import Input from './components/formInput.js'
import Hash from './security/hashing.js'
import axios from 'axios'

export default function LogIn() {

    // post som log in

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
            .then(res => console.log(res.data))
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
            </form>
        </div>
    )
}
