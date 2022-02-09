import { useState } from 'react'
import styles from './LoginPage.module.scss'
import LoginForm from './../../components/LoginForm'

const LoginPage = () => {
    const [form, setForm] = useState('login');

    return (
        <div className={styles.main}>
            {form === 'login' ?
                <LoginForm /> :
                'registration form'
            }
            <p>non hai un account? <span onClick={() => setForm('registration')}>Registrati</span></p>
        </div>
    )
}

export default LoginPage