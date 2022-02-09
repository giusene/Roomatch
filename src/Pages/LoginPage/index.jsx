import { useState } from 'react'
import styles from './LoginPage.module.scss'
import LoginForm from './../../components/LoginForm'
import RegistrationForm from '../../components/SubscribeForm/RegistrationForm';

const LoginPage = () => {
    const [form, setForm] = useState('login');

    return (
        <div className={styles.main}>
            {form === 'login' ?
                <LoginForm /> :
                <RegistrationForm />
            }
            <p>non hai un account? <span onClick={() => setForm('registration')}>Registrati</span></p>
        </div>
    )
}

export default LoginPage