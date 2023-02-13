import styled from 'styled-components'

const Estilosessoes = styled.div`
 max-width: 1200px;
 margin: 0 auto;
 margin-bottom: 150px;
 .cinema-data{
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;

  .esquerda{
    h4{
      font-size: 14px;
    }
    h3{
      font-size: 20px;
    }
  }
  .datas{
    width: 100%;
   .hoje{
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: space-between;
    max-width: 600px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 8px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
      display: none;        /* color of the tracking area */
    }
    ::-webkit-scrollbar-thumb {
      background-color: #2196f3;    /* color of the scroll thumb */
      border-radius: 20px;
    }
    .data{
      margin-right: 20px;
      border-radius: 5px;
      color: black;
      padding: 0;
      width: 80px;
      height: 40px;
     cursor: pointer;
     h3{
      font-size: 16px;
      margin-bottom: 1px;
      color: rgb(177, 177, 177);
      text-align: center;
     }
     h2{
      font-size: 14px;
      margin-bottom: 0;
      color: rgb(177, 177, 177);
      text-align: center;
     }
     :hover{
      background-color: rgb(194, 220, 255);
      transition: 0.5s;
      h3{
        color: rgb(31, 128, 255);
        font-weight: bold;
        
      }
      h2{
        color: rgb(31, 128, 255);
        font-weight: 600;
      }
     }
    }
   }
  }
 }

 .filmes{
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  padding: 0 20px;
  .filmeEscolhido{
   .card{
    padding-top: 80%;
    width: 70%;
    position: relative;

    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
   }
  }

  a{
    text-decoration: none;
  }

  .cardsFilmes{
   display: grid;
   grid-template-columns: auto auto auto auto;
   justify-content: space-between;
   max-width: 600px;
   margin-bottom: 20px;
   padding: 8px;
   overflow-x: scroll;
   ::-webkit-scrollbar {
      height: 8px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
      display: none;        /* color of the tracking area */
    }
    ::-webkit-scrollbar-thumb {
      background-color: #2196f3;    /* color of the scroll thumb */
      border-radius: 20px;
    }
   .card{
    padding-top: 200px;
    width: 150px;
    background-color: black;
    border-radius: 10px;
    position: relative;
    margin-right: 20px;
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      
    }
   }
  }

  .salas{
    height: 200px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 8px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
      display: none;        /* color of the tracking area */
    }
    ::-webkit-scrollbar-thumb {
      background-color: #2196f3;    /* color of the scroll thumb */
      border-radius: 20px;
      :hover{
        background: #1a6099;
        box-shadow: 0 0 10px #1a6099, 0 0 40px #1a6099, 0 0 80px #1a6099;
        transition-delay: 0.2s;
      }
            
    }
  }
 }
 
`
export default Estilosessoes;
