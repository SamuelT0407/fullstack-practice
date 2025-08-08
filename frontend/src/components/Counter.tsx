import {useState} from 'react';
import styles from '../assets/css/Counter.module.css'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.container}>
            <p>Current Count: {count}</p>
            <button className={styles.button} onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}

export default Counter;
