import React, {useEffect, useState} from "react";
import axios from "axios";



 function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  return (
    <div className=" texto"><h1> Login Usuário</h1>
    <div className="container">
    <div className="card mt-5 mb-5 w-50">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="email">Usuário</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Usuário" 
             
              />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Senha"
             
             />
          </div>
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  </div>
  </div>

  )
}

export default Login;
