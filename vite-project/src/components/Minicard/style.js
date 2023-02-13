import styled from 'styled-components';

const EstiloMinicard = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  border: 0.2px solid white;
  border-radius: 10px;
  height: 50px;
  overflow: hidden;
  margin-bottom: 20px;

  .imagem{
    img{
      width: 80px;
    }
  }
  .titulo{
    h2{
      font-size: 22px;
    }
  }
  .info{
    cursor: pointer;
    color: green;
  }
  .editar{
    cursor: pointer;
    color: blue;
  }
  .excluir{
    cursor: pointer;
    color: red;
  }
`;

export default EstiloMinicard;