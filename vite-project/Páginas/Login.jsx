import React, { useState } from 'react';


function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'diego@gmail.com' && password === '123456789') {
      setErrorMessage('');
      alert('Bem Vindo! '+ username)

    } else if (username === 'camila@gmail.com' && password === '987654321') {
      setErrorMessage('');
      alert('Bem Vindo! '+ username)

    } else if (username === 'hudson@gmail.com' && password === 'abcdef1234') {
      setErrorMessage('');
      alert( 'Bem Vindo! ' + username) 

    }else if (username === 'flavia@gmail.com' && password === 'abcdef5678') {
      setErrorMessage('');
      alert( 'Bem Vindo! ' + username) 
    } else {
      setErrorMessage('Senha incorreta ou os campos incompletos!');
    }
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Nome de Usuário:</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Senha:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
