import styled from 'styled-components'

const Estilosessoes = styled.div`

 margin: 0 auto;

 .cinema-data{
  display: flex;
  justify-content: space-between;
  height: 200px;
  font-family: 'Roboto', sans-serif;
  font-size: 30px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  h3, h4 {
    font-size: 18px;
    text-align: center;
  }

  .esquerda{
    margin: auto;
  }
  
  .datas{
    margin: auto;

   .hoje{
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 15px 0;

    .data{
     margin: auto;
     align-content: flex-end;
     padding: 0 30px;
     line-height: 50px;
     border-right: 1px solid rgba(0, 0, 0, 0.16);
    }

    .data:last-child{
      border: none;
    }
   }
  }
 }

 .filmes{
  display: flex;
  justify-content: space-around;
  padding: 20px;
  width: 100%;
  

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
   margin: 0 0 20px 0;   
   
   .card{
    padding-top: 200px;
    width: 150px;
    background-color: black;
    margin: 0 25px;
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
 }

 
`
export default Estilosessoes;
