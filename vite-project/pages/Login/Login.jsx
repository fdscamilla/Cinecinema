import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EstiloLogin from './style';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../src/services/firebaseConfig';
import { AuthContext } from '../../src/Contexts/AuthContext';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const {setAuth, authenticate} = useContext(AuthContext)
  console.log('auth', authenticate)

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/


  function handleSignIn(e){
    e.preventDefault()
    if(emailRegex.test(email) && passwordRegex.test(password)){
      signInWithEmailAndPassword(email, password);
      if(user){
        alert('Dados Enviados com sucesso!');
        setAuth(true), navigate('/')
      }else{
        alert('Você não está cadastrado!')
      }
      
    }else{
      alert('Email ou Senha inválidos!');
    }
    
  }

  
  return (
    <EstiloLogin>
      <div className='login-container'>
        <h1>Login</h1>
        <form>
          <label htmlFor='username'>Nome de Usuário:</label>
          <input
            type='text'
            id='username'
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
          <label htmlFor='password'>Senha:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to=''>Esqueceu a Senha?</Link>
          <button type='submit' onClick={handleSignIn}><span></span>
              <span></span>
              <span></span>
              <span></span>
              Entrar
          </button>
        </form>
        <div className='regitrar-se'>
          <p>Ainda não tenho uma Conta. <Link to='/Cadastro'>Quero me registrar</Link></p>
        </div>
      </div>
    </EstiloLogin>
    
  );
}

export default Login;
