import styled from 'styled-components';
import imagemBackground from '../../src/imagens/background.jpg'

const estiloMenu = styled.div`
  background-color: rgb(10, 10, 10);
  width: 100%;
  color: white;
  padding: 0;
  padding-bottom: 80px;
  margin-top: 40px;
  .sessoes{
    h2{
      text-align: center;
      font-size: 50px;
      margin-bottom: 100px;
      span{
        color: rgb(31, 128, 255);
      }
    }
  }

  .blog{
    h2{
      text-align: center;
      font-size: 50px;
      margin-bottom: 100px;
      color: rgb(31, 128, 255);
    }
  }
`;

export default estiloMenu;