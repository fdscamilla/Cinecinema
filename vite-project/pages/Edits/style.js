import styled from 'styled-components';

const estiloEdit = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
  padding-top: 100px;
  padding-bottom: 100px;

  .opcoesFormulario{
    width: 400px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    span{
      padding: 4px 10px;
      cursor: pointer;
      font-weight: bold;
      :hover{
        color: rgb(31, 128, 255);
        background-color: rgb(194, 220, 255);
        font-weight: bold;
        border-radius: 2px;
        transition: 0.2s;
      }
    }
  }

  form{
    margin: 0 auto;
    padding: 20px;
    max-width: 1000px;

    label {
      width: 100%;
    }

    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
      margin-bottom: 20px;
    }

    input[type='submit']{
      border: none;
      position: relative;
      display: inline-block;
      width: 70%;
      height: 40px;
      margin-top: 20px;
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
  }
`;

export default estiloEdit;