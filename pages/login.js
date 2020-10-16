import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Input from './components/formInput.js'

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
        console.log(username)
        console.log(password)
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.container}>
                <Input title="Username" type="text" action={handleUsername} />
                <Input title="Password" type="password" action={handlePassword} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
