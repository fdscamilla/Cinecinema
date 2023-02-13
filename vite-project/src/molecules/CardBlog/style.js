import styled from 'styled-components'

const Estilocardblog = styled.div`
 padding: 15px;
 .link{
  text-decoration: none;
 }
 .cardBlog{
  overflow: hidden;
  width: 400px;
  text-align: left;
  box-shadow: 0 3px 24px rgb(0 0 0 / 4%);
  height: 500px;

  .imagem{
    height: 250px;
    width: 100%;
    z-index: 2;
    overflow: hidden;
    img{
      width: 100%;
      height: auto;
      z-index: 1;
    }
 }

 .sub{
  z-index: 3;
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

  h3{
    font-size: 16px;
    margin-bottom: 0;
    color: white;
  }
  p{
    font-size: 14px;
    color: white;
  }
 }

 }


 
`

export default Estilocardblog;