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

  function handleSignIn(e){
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
  }

  if(user){
    setAuth(true), navigate('/Dashboard')
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
          <button type='submit' onClick={handleSignIn}>Entrar</button>
        </form>
        <div className='regitrar-se'>
          <p>Ainda não tenho uma Conta. <Link to='/Cadastro'>Quero me registrar</Link></p>
        </div>
      </div>
    </EstiloLogin>
    
  );
}

export default Login;
