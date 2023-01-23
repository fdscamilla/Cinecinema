import styled from 'styled-components'

const estiloFooter = styled.div`
  background-color: #242424;
  width: 100%;
  color: white;
  padding-top: 20px;
  
  nav{
    display: flex;
    gap: 20px;

    ul{
      list-style: none;

      h4{
          margin-bottom: 10px;
        }

      li{
        

        a{
          text-decoration: none;
          color: white;
        }
      }
    }
  }

  .sub{
    text-align: center;
    padding: 20px;
    font-size: 12px;
  }
`

export default estiloFooter;