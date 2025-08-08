import {useState} from 'react';
import * as React from 'react';
import styles from '../assets/css/LoginRegister.module.css'

export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

            const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password})
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('Registration success!');
                localStorage.setItem('currentUser', JSON.stringify(data));
                window.location.href = '/welcome'; // 自动跳转
            } else {
                setMessage(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error(error);
            setMessage('Something went wrong.');
        }
    };

    return (
        <div className={styles.container}>
            <h2>Register</h2>
            <form onSubmit={handleRegister} className={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className={styles.input}
                />

                <button type="submit" className={styles.button}>Register</button>
            </form>

            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}
