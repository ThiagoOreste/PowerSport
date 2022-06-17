import React from 'react';
import './css/Login.css'
import "@fontsource/do-hyeon";
import Acess from '../../component/LoginAcess';
import { Link } from 'react-router-dom';


const Login = () => {
    return(
        <div className='container'>
            <div className='container-login'>
                <div className='login-form'>
                    <span className='login-form-login'>LOGUE OU</span>
                    <span className='login-form-cad'>CADASTRE-SE</span>
                    <div className='login-form-field'>
                        <div className='login-form-field-user'>
                            <input type='text' placeholder='EMAIL OU NOME DE USUÁRIO' size='50' id='usuario'/>
                        </div>
                        <div className='login-form-field-password'>
                            <input type='text' placeholder='DIGITE AQUI SUA SENHA' size='50' id='senha'/>
                        </div>      
                    </div>
                    
                    <div className='login-form-button'>
                        <div className='login-form-button-enter'>
                        <Link exact to='/'><button type='button' onClick={Acess}>ENTRAR</button></Link>
                        </div>
                        <div className='login-form-button-cad'>
                            <button type='button'>CADASTRE-SE</button>
                        </div>
                    </div>
                    
                    <Link exact to='/recup'><a href='#' className='login-form-recovery'>RECUPERE SUA SENHA AQUI</a></Link>
                </div>
            </div>
        
        </div>
        
    )
}
export default Login;