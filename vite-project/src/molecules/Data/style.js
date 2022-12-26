import styled from 'styled-components'

const Estilosessoes = styled.div`
 max-width: 1200px;
 margin: 0 auto;

 .cinema-data{
  display: flex;
  justify-content: space-between;
  
  .datas{
   .hoje{
    display: flex;

    .data{
     margin: 0 8px;
     
    border-right: 3px solid black;
    }
   }
  }
 }

 .filmes{
  display: flex;

  .filmeEscolhido{
   width: 50%;
   .card{
    padding-top: 80%;
    width: 70%;
    background-color: black;
    margin: 0 auto;
    border-radius: 10px;
   }
  }

  .cardsFilmes{
   display: flex;
   
   .card{
    padding-top: 200px;
    width: 150px;
    background-color: black;
    margin: 0 25px;
    border-radius: 10px;
   }
  }
 }

 
`
export default Estilosessoes;
