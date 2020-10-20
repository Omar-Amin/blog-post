import styles from './css/upload.module.css'

export default function UploadLayout() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <textarea className={styles.title} type="" name="title" placeholder="Title" />
                <textarea className={styles.desc} type="" name="content" placeholder="Description" />
                <button className={styles.submit}>Click me</button>
            </div>
        </div>
    )
}