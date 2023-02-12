import styled from 'styled-components';

const estiloMenu = styled.div`
  background-color: rgb(7, 7, 7);
  width: 100%;
  color: white;
  padding: 0;
  .menu{
    display: grid;
    grid-template-columns: 12% 800px 13%;
    height: 70px;
    max-width: 1400px;
    margin: 0 auto;
    align-content: center;
    justify-content: space-around;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    .logo{
      height: 100%;
      display: flex;
      align-items: center;
      a{
        color: white;
        text-decoration: none;
        font-family: 'Chivo Mono', monospace;
      }
    }

    ul{
      display: grid;
      grid-template-columns: auto auto auto auto auto;
      list-style: none;
      align-content: center;
      justify-content: end;
      height: 100%;
    
      .animate__animated.animate__slideInLeft{
        --animate-duration: 0.5s;
      }
      li{
        margin-right: 25px;
        padding: 5px 15px;
        border-radius: 10px;
        .arrow{
          margin-right: 8px;
          display: none;
        }
        .icon{
          margin-right: 8px;
          color: #3d3d3d;
        }
        a{
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 18px;
          color: rgb(177, 177, 177);
          
        }
      }
      li:hover{
        background-color: rgb(194, 220, 255);
        animation-duration: 1s;
        .arrow{
          display: inline;
          color: rgb(31, 128, 255);
        }
        .icon{
          color: rgb(31, 128, 255);
        }
        a{
          color: rgb(31, 128, 255);
        }
      }
    }

    .direita{
      display: flex;
      align-items: center;
      .hamburger{
        display: none;
        .hamburger-box{
          .hamburger-inner{
          }
          
        }
      }
      .links{
        .cadastro{
          background-color: rgb(31, 128, 255);
          padding: 5px 10px;
          border-radius: 5px;
        }
        .login{
          text-align: center;
          font-size: 12px;
        }
        a{
          text-decoration: none;
          color: white;
          margin: 0 10px;
        }
      }

      .busca{
        display: none;
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

  @media (max-width: 1200px){
    .menu{
      padding: 10px;
      grid-template-columns: 13% 680px 14%;
      .logo{
        padding: 0 10px;

        a{
          font-size: 22px;
        }
      }
      ul{
        li{
        margin-right: 22px;
        padding: 5px 12px;
        border-radius: 8px;
        a{
          font-size: 16px;
          
        }
      }
      }
    }  
  }

  @media (max-width: 1000px){
    .menu{
      grid-template-areas: ". logo . direita.";
      grid-template-columns:  2% 12% 72% 12% 2%;
      .logo{
        grid-area: logo;
      }
      ul{
        display: none;
      }

      .direita{
        grid-area: direita;
        .links{
          display: none;
        }
        .hamburger{
        display: block;
      }
      }
    }  
  }
`;

export default estiloMenu;