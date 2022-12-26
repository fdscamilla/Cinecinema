import styled from 'styled-components';

const estiloMenu = styled.div`
  background-color: #242424;
  width: 100%;
  color: white;

  .menu{
    display: flex;
    padding: 10px 30px;
    justify-content: space-between;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    .logo{
      a{
        color: white;
        text-decoration: none;
        font-family: 'Chivo Mono', monospace;
      }
    }

    ul{
      display: flex;
      list-style: none;

      li{
        margin: 0 10px;

        a{
          text-decoration: none;
          color: white;
        }
      }
    }

    .direita{
      display: flex;
      flex-direction: column;

      .links{
        display: flex;
        margin-right: 20px;
        margin-bottom: 5px;
        a{
          text-decoration: none;
          color: white;
          margin: 0 10px;
        }
      }

      .busca{
        display: flex;
        color: black;
        font-size: 18px;
        input{
          padding: 10px 5px;
          width: 360px;
          border: none;
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;

          :focus{
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
          }
        }
        
        .lupa{
          padding: 10px;
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
          background-color: white;
        }
      }
    }
  }
`;

export default estiloMenu;