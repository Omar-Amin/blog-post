import styles from './css/input.module.css'


export default function Input({ title, type, action }) {
    return (
        <div className={styles.container}>
            <label className={styles.labelStyle}> {title} </label>
            <input className={styles.input} type={type} name="name" onChange={action} placeholder={title} />
        </div>
    )
}