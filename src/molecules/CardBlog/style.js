import styled from 'styled-components'

const Estilocardblog = styled.div`
 padding: 15px;
 height: auto;
 
 .cardBlog{
  border: 2px solid black;
  border-radius: 10px;
  width: 400px;
  height: auto;

  h2 {
    margin: 15px;
  }

  p {
    text-justify: justify;
    margin: 15px;
  }

  .imagem{
  background-color: black;
  height: 200px;
  width: 100%;
 }

 .autor{
  display: flex;
  font-size: 14px;
  align-items: center;
  margin: 15px;
  
  h3 {
    font-size: 18px;
  }

  .imagem{
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background-color: black;

  }
 }

 }


 
`

export default Estilocardblog;