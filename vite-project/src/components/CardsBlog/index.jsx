import Cardblog from "../../molecules/CardBlog"
import Estilocardsblog from "./style";

function Cardsblog(){
  return(
    <Estilocardsblog>
      <div className="cards">
        <Cardblog titulo="Título de teste" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" nome="Diego Fernando" time="26 dezembro 2022"/>
        <Cardblog titulo="Título de teste" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" nome="Diego Fernando" time="26 dezembro 2022"/>
        <Cardblog titulo="Título de teste" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" nome="Diego Fernando" time="26 dezembro 2022"/>
      </div>
    </Estilocardsblog>
  )
}

export default Cardsblog;