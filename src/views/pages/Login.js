import React from 'react';
import './css/Login.css'
import "@fontsource/do-hyeon";


const Login = () => {
    return(
        <div className='container'>
            <div className='container-login'>
                <form className='login-form'>
                    <span className='login-form-login'>LOGUE OU</span>
                    <span className='login-form-cad'>CADASTRE-SE</span>
                    <div className='login-form-field'>
                        <div className='login-form-field-user'>
                            <input type='text' placeholder='EMAIL OU NOME DE USUÁRIO' size='50'/>
                        </div>
                        <div className='login-form-field-password'>
                            <input type='text' placeholder='DIGITE AQUI SUA SENHA' size='50'/>
                        </div>      
                    </div>
                    
                    <div className='login-form-button'>
                        <div className='login-form-button-enter'>
                            <button type='button'>ENTRAR</button>
                        </div>
                        <div className='login-form-button-cad'>
                            <button type='button'>CADASTRE-SE</button>
                        </div>
                    </div>
                    
                    <a href='#' className='login-form-recovery'>RECUPERE SUA SENHA AQUI</a>
                </form>
            </div>
        </div>
    )
}
export default Login;