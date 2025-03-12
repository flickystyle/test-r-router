import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import PageNav from '../components/PageNav';
import styles from './Login.module.css';
import Button from '../components/Button';

export default function Login() {
    const [email, setEmail] = useState('vasiliy@example.com');
    const [password, setPassword] = useState('qwerty');
    const { login, isAuthenticated } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/app', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    function handleSubmit(e) {
        e.preventDefault();
        login(email, password);
    }

    return (
        <main className={styles.login}>
            <PageNav />
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div className={styles.btn}>
                    <Button type="primary">LOGIN</Button>
                </div>
            </form>
        </main>
    );
}
