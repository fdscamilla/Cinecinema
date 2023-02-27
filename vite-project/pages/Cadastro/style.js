import styled from 'styled-components';

const estiloCadastro = styled.div`
  min-height: 100vh;
  background-color: #000000;
  color: white;
  .cadastro-container {
   margin: 0 auto; 
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
}

label {
  margin-top: 20px;
  width: 100%;
}

input {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 400px;
}

button {
  border: none;
  position: relative;
  display: inline-block;
  width: 70%;
  height: 40px;
  margin-top: 30px;
  color: #2196f3;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  transition: 0.1s;
  color: white;
    background: #2196f3;
    box-shadow: 0 0 5px #2196f3, 0 0 15px #2196f3;
  :hover {
    color: white;
    background: #1a6099;
    box-shadow: 0 0 10px #1a6099, 0 0 40px #1a6099, 0 0 80px #1a6099;
  }
}

.error-message {
  color: red;
  margin-top: 20px;
  color: blue;
}




  
`;

export default estiloCadastro;