import styled from 'styled-components'

const Estilocardsblog = styled.div`
 width: 100%;
  .carousel{
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }
 .cards{
  display: flex;
  justify-content: space-between;
  width: 80%;
 }

 @media (max-width: 700px){
  .rec.rec-arrow {
    display: none;
  }
 }
`
export default Estilocardsblog;