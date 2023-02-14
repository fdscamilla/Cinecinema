import styled from 'styled-components';

const estiloMenu = styled.div`
  background-color: rgb(7, 7, 7);
  width: 100%;
  color: white;
  position: fixed;
  z-index: 999;
  top: 0;
  border-bottom: 0.2px solid rgba(255, 255, 255, 0.15);
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
          font-weight: bold;
          font-size: 18px;
          color: rgb(177, 177, 177);
          
        }
        
      }
      .direita2{
          display: none;
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
          border: none;
          position: relative;
          display: inline-block;
          padding: 5px 10px;
          color: #2196f3;
          text-transform: uppercase;
          text-decoration: none;
          font-size: 12px;
          overflow: hidden;
          transition: 0.2s;
          color: #255784;
            background: #2196f3;
            box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
            transition-delay: 0.2s;
          :hover {
            color: #255784;
            background: #1a6099;
            box-shadow: 0 0 10px #1a6099, 0 0 40px #1a6099, 0 0 80px #1a6099;
            transition-delay: 0.2s;

            span{
              :nth-child(1){
                left: 100%;
                transition: 1s;
              }

              :nth-child(2) {
                top: 100%;
                transition: 1s;
                transition-delay: 0.25s;
              }

              :nth-child(3) {
                right: 100%;
                transition: 1s;
                transition-delay: 0.5s;
              }

              :nth-child(4) {
                bottom: 100%;
                transition: 1s;
                transition-delay: 0.75s;
              }
            }
          }

          span {
            position: absolute;
            display: block;
            :nth-child(1) {
              top: 0;
              left: -100%;
              width: 100%;
              height: 2px;
              background: linear-gradient(90deg, transparent, #2196f3);
            }

            :nth-child(2) {
              top: -100%;
              right: 0;
              width: 2px;
              height: 100%;
              background: linear-gradient(180deg, transparent, #2196f3);
            }

            :nth-child(3) {
              bottom: 0;
              right: -100%;
              width: 100%;
              height: 2px;
              background: linear-gradient(270deg, transparent, #2196f3);
            }

            :nth-child(4) {
              bottom: -100%;
              left: 0;
              width: 2px;
              height: 100%;
              background: linear-gradient(360deg, transparent, #2196f3);
            }
          }
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
    .animate__animated.animate__fadeIn{
      opacity: 0.8 !important;
    }
    .cobrir{
      background-color: black;
      opacity: 0.8;
      width: 100vw;
      height: 100vh;
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
    }
    .menu{
      grid-template-areas: ". logo . direita.";
      grid-template-columns:  2% 12% 72% 12% 2%;
      .logo{
        grid-area: logo;
      }
      ul{
        display: none;
        
      }

      ul.ulResponsivo{
        display: block;
        width: 300px;
        position: fixed;
        z-index: 9998;
        height: 100vh;
        background-color: black;
        opacity: 1;
        top: 0;
        right: 0;
        padding-top: 50px;

        .direita2{
          display: block;
          position: relative;
          height: 100%;
          .links{
            margin-top: 40px;
            .cadastro{
              border: none;
              position: relative;
              display: inline-block;
              padding: 5px 10px;
              color: #2196f3;
              text-transform: uppercase;
              text-decoration: none;
              font-size: 12px;
              overflow: hidden;
              transition: 0.2s;
              color: #255784;
                background: #2196f3;
                box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
                transition-delay: 0.2s;
              :hover {
                color: #255784;
                background: #1a6099;
                box-shadow: 0 0 10px #1a6099, 0 0 40px #1a6099, 0 0 80px #1a6099;
                transition-delay: 0.2s;

                span{
                  :nth-child(1){
                    left: 100%;
                    transition: 1s;
                  }

                  :nth-child(2) {
                    top: 100%;
                    transition: 1s;
                    transition-delay: 0.25s;
                  }

                  :nth-child(3) {
                    right: 100%;
                    transition: 1s;
                    transition-delay: 0.5s;
                  }

                  :nth-child(4) {
                    bottom: 100%;
                    transition: 1s;
                    transition-delay: 0.75s;
                  }
                }
              }

              span {
                position: absolute;
                display: block;
                :nth-child(1) {
                  top: 0;
                  left: -100%;
                  width: 100%;
                  height: 2px;
                  background: linear-gradient(90deg, transparent, #2196f3);
                }

                :nth-child(2) {
                  top: -100%;
                  right: 0;
                  width: 2px;
                  height: 100%;
                  background: linear-gradient(180deg, transparent, #2196f3);
                }

                :nth-child(3) {
                  bottom: 0;
                  right: -100%;
                  width: 100%;
                  height: 2px;
                  background: linear-gradient(270deg, transparent, #2196f3);
                }

                :nth-child(4) {
                  bottom: -100%;
                  left: 0;
                  width: 2px;
                  height: 100%;
                  background: linear-gradient(360deg, transparent, #2196f3);
                }
              }
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
        }
      }

      .direita{
        grid-area: direita;
        .links{
          display: none;
        }
        .hamburger{
        display: block;
        z-index: 9999;
      }
      }
    }  
  }
`;

export default estiloMenu;