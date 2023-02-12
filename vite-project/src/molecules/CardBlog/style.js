import styled from 'styled-components'

const Estilocardblog = styled.div`
 padding: 15px;
 .cardBlog{
  overflow: hidden;
  width: 400px;
  text-align: center;
  border: 1px solid #f0f2f3;
  box-shadow: 0 3px 24px rgb(0 0 0 / 4%);
  border-radius: 8px;

  .imagem{
    height: 200px;
    width: 100%;
    img{
      width: 100%;
      height: 100%;
    }
 }

 .sub{
  padding: 15px;

  .description{
    p{

    }
  }

  .texto{
    h2{
      text-decoration: none;
      color: white;
      font-size: 25px;
      margin-bottom: 20px;
    }

    p{
      color: white;
    }
  }
 }

 .autor{
  display: flex;

  .imagem{
   height: 50px;
   width: 50px;
   border-radius: 50%;
   background-color: black;

  }
 }

 }


 
`

export default Estilocardblog;