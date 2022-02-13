import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { loginAction } from './../../store/actions';
import styles from './LoginForm.module.scss';
import { useDispatch } from 'react-redux'


const LoginForm = () => {
    let url = useNavigate();
    const [redirect, setRedirect] = useState('/login')
    const dispatch = useDispatch()
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginAction(loginForm, setRedirect))
    }

    useEffect(()=> {
        url(redirect)
    }, [url, redirect])

    return (
        <div className={styles.main}>
        <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='email'>Email*</label>
            <input id='email' name='email' onChange={(e) => setLoginForm({...loginForm, email: e.target.value})} type='email' placeholder="email" required/>
            <label htmlFor='password'>Password*</label>
            <input id='password' name='password' onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}  type='password' placeholder="password" required/>
            <button>Entra</button>
        </form>
        </div>
    )
}

export default LoginForm