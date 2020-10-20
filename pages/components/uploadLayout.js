import styles from './css/upload.module.css'

export default function UploadLayout({ handleTitle, handleDesc, submit }) {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <textarea className={styles.title} onChange={handleTitle} type="" name="title" placeholder="Title" />
                <textarea className={styles.desc} onChange={handleDesc} type="" name="content" placeholder="Description" />
                <button className={styles.submit} onClick={submit}>Upload</button>
            </div>
        </div>
    )
}