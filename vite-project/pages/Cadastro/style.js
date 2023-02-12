import styled from 'styled-components';

const estiloCadastro = styled.div`
  min-height: 100vh;
  
  .login-container {
   margin: 25px auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border: 2px solid #ccc;
  border-radius: 10px;
}

label {
  margin-top: 20px;
}

input {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 400px;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
}

.error-message {
  color: red;
  margin-top: 20px;
  color: blue;
}
  
`;

export default estiloCadastro;