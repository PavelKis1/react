import React, { useContext } from 'react'
import FormInput from '../components/UI/input/FormInput'
import FormButton from '../components/UI/button/FormButton'
import { AuthContext } from '../context';

function Login() {
    const { setIsAuth } = useContext(AuthContext);

    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <FormInput type="text" placeholder='Login' />
                <FormInput type="password" placeholder='Password' />
                <FormButton>Go to</FormButton>
            </form>

        </div>
    )
}

export default Login