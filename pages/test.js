import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Test() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/api/db', {
            params: {
                username: "navn",
                password: "12345"
            }
        })
            .then((res) => setData(res.data))
            .catch((err) => err)
    }, [])

    return (
        <div className={styles.container}>
            {data.length > 0 ? data[1].username : null}
        </div>
    )
}

