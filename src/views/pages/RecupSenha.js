import React from 'react';


function ResetSenha(){
    return(  <div className='container'>
    <div className='container-login'>
      <div className='login-form'>
          <span className='login-form-cad'>RECUPERAR</span>
          <span className='login-form-login'>A SENHA</span>
          <div className='login-form-field'>
              <div className='login-form-field-user'>
                  <input type='text' placeholder='EMAIL DO USUÁRIO' size='50' id='usuario'/>
              </div>
             
          </div>
          
          <div className='login-form-button'>
              <div className='login-form-button-enter'>
              
              </div>
              <div className='login-form-button-cad'>
                  <button type='button'>ENVIAR</button>
              </div>
          </div>
          
          
      </div>
  </div>

</div>
    );
  }

export default ResetSenha;