import styled from 'styled-components';

const EstiloMinicard = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border: 0.2px solid white;
  border-radius: 10px;
  height: 50px;
  overflow: hidden;
  margin-bottom: 20px;
  padding-right: 10px;
  align-items: center;

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

  .actions{
    display: flex;
  }

  .info{
    cursor: pointer;
    color: green;
    margin: 0 5px;
  }
  .editar{
    cursor: pointer;
    color: blue;
    margin: 0 5px;

  }
  .excluir{
    cursor: pointer;
    color: red;
    margin: 0 5px;
  }
`;

export default EstiloMinicard;