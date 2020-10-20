import styles from './css/post.module.css'

export default function Post({ title, desc, author }) {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{desc}</p>
                <p className={styles.author}>@{author}</p>
            </div>
        </div>
    )
}