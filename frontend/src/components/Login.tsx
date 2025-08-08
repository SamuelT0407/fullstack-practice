import {useState} from 'react';
import * as React from 'react';
import styles from '../assets/css/LoginRegister.module.css'

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

            const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('Login success!');
                localStorage.setItem('currentUser', JSON.stringify(data));
                window.location.href = '/welcome';
            } else {
                setMessage(data.message || 'Login failed.');
            }
        } catch (error) {
            console.error(error);
            setMessage('Something went wrong.');
        }
    };

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleLogin} className={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Login</button>
            </form>

            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}
