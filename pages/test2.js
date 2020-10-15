import styles from '../styles/Home.module.css'
import React, { useState } from 'react'

export default function Test2() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState({ counter: 0 });
    const [egg, setEgg] = useState(0);

    return (
        <div>
            <p>You clicked {count.counter} times</p>
            <button onClick={() => setCount({ counter: count.counter + 1 })}>
                Click me
        </button>
        </div>
    );
}
