import { useState } from "react";
import EstiloCadastro from './style';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../src/services/firebaseConfig";
import { Link } from "react-router-dom";

function Cadastro(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e){
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  return (
    <EstiloCadastro>
      <div className='cadastro-container'>
        <h1>Cadastro</h1>
        <form >
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
          <button type='submit' onClick={handleSignOut}>Entrar</button>
        </form>
        <p>Já tenho uma Conta. <Link to='/Login'>Fazer Login</Link></p>
      </div>
    </EstiloCadastro>
  )
}

export default Cadastro;