import styled from 'styled-components'

const Estilosessoes = styled.div`
 max-width: 1200px;
 margin: 0 auto;
 margin-top: 100px;
 margin-bottom: 200px;
 .cinema-data{
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  width: 100%;
  .datas{
    width: 100%;
   .hoje{
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: space-between;
    .data{
     cursor: pointer;
     h3{
      font-size: 20px;
     }
     h2{
      font-size: 22px;
     }
    }
   }
  }
 }

 .filmes{
  display: grid;
  grid-template-columns: 50% auto;
  width: 100%;

  .filmeEscolhido{
   .card{
    padding-top: 80%;
    width: 70%;
    border-radius: 10px;
    position: relative;

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

  .cardsFilmes{
   display: grid;
   grid-template-columns: auto auto auto auto;
   justify-content: space-between;
   width: 100%;
   margin-bottom: 20px;
   .card{
    padding-top: 200px;
    width: 150px;
    background-color: black;
    border-radius: 10px;
    position: relative;

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

  .sala{
    
  }
 }

 
`
export default Estilosessoes;
