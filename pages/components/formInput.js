import styles from '../../styles/Home.module.css'

export default function Input({ title, type, action }) {
    return (
        <div>
            <label> {title} </label>
            <input type={type} name="name" onChange={action} />
        </div>
    )
}