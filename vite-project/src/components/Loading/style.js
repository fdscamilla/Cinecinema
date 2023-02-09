import styled from 'styled-components'

const estiloLoading = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: rgb(7, 7, 7);
  .c-loader{
    animation: rotating 1s infinite;
    width: 50px;
    height: 50px;
    border: 6px solid rgb(177, 177, 177);
    border-top-color: rgb(31, 128, 255);
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
  }

  @keyframes rotating{
    to{
      transform: rotate(1turn);
    }
  }
`

export default estiloLoading;