

function Cadastro() {
  return (
    <div className='container'>
      <div className='container-login'>
        <div className='login-form'>
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
                
                </div>
                <div className='login-form-button-cad'>
                    <button type='button'>CADASTRE-SE</button>
                </div>
            </div>
            
            
        </div>
    </div>

</div>
  );
}

export default Cadastro;
