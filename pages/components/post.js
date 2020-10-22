import { useEffect, useState } from 'react'
import styles from './css/post.module.css'

export default function Post({ title, desc, author, date }) {

    const [created, setCreated] = useState(date)

    useEffect(() => setCreated(date.substring(0, 10)), [])

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{desc}</p>
                <div>
                    <a className={styles.author}>@{author}</a>
                    <a className={styles.date}>{created}</a>
                </div>
            </div>
        </div>
    )
}