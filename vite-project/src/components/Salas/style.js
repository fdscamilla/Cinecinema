import styled from "styled-components";

const Estilosalas = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  margin-bottom: 10px;
 .salaCinema{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  cursor: pointer;
  

  .sala{
    width: 25%;
    h3{
      font-size: 20px;
    }

  }
  .filmes{
    width: 40%;
    display: flex;
    align-items: center;
  }
  .scrumbs{
   display: flex;
  }
 }
`

export default Estilosalas;