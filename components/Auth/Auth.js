import React, {useState} from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

export default function Auth(props) {
    const { onCloseModal, setTitleModal } = props;
    const [ showLogin, setShowLogin ] = useState(true)

    const showLoginForm = () => {
        setShowLogin(true)
        setTitleModal("Iniciar sesión")
    }
    const showRegisterForm = () => {
        setShowLogin(false)
        setTitleModal("Registrar usuario")
    }


    return showLogin ?
        <LoginForm showRegisterForm={showRegisterForm }/>
        :
        <RegisterForm showLoginForm={showLoginForm }/>
}
