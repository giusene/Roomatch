import { useState } from 'react';
import {loginAction} from './../../store/actions';
import styles from './LoginForm.module.scss';
import { useDispatch } from 'react-redux'
import CitiesSelector from '../CitiesSelector';


const LoginForm = () => {
    const dispatch = useDispatch()
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginAction(loginForm))
    }

    return (
        <div className={styles.main}>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => setLoginForm({...loginForm, email: e.target.value})} type='email' placeholder="email" required/>
            <input onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}  type='password' placeholder="password" required/>
            <button>Entra</button>
        </form>
        <CitiesSelector />
        </div>
    )
}

export default LoginForm