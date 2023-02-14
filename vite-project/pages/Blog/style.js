import styled from 'styled-components';

const estiloBlog = styled.div`
  background-color: black;
  color: white;

  .area{
    min-height: 100vh;
    margin: 0 auto;
    padding: 150px 0;
    width: 90%;
    .titulo{
    grid-area: titulo;
    width: 80%;
    height: 100px;
      h2{
        color: white;
      }
    }
    .imagem-capa{
      grid-area: imagem;
      width: 80%;
      height: 400px;
      overflow: hidden;
      display: flex;
      align-items: center;
      align-content: center;
      margin-bottom: 20px;
    }
    .info{
      grid-area: info;
      width: 80%;
      margin-bottom: 40px;
    }
    .conteudo{
      grid-area: conteudo;
      width: 80%;
      p{
        line-height: 30px;
        text-align: justify;
      }
    }
    .lateral{
      grid-area: lateral;
      width: 10%;
    }
  }

  
  
`;

export default estiloBlog;