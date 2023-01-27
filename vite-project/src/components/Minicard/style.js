import styled from 'styled-components';

const EstiloMinicard = styled.div`
  width: 33%;
  display: flex;
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