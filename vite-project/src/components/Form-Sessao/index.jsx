import EstiloMenu from "./style";

function FormularioSessao(props){
  
  return(
    <EstiloMenu>
      <h2>Sessoes</h2>
      <form onSubmit={props.onsubmit}> 
        <label for="fname">Nome do Filme:</label><br></br>
        <input type="text" id="filme" name="filme" value={props.filme} onChange={props.onchange}/>
        <label for="lname">Dia:</label><br></br>
        <input type="text" id="dia" name="dia" value={props.dia} onChange={props.onchange}/>
        <label for="lname">Hora:</label><br></br>
        <input type="text" id="hora" name="hora" value={props.hora} onChange={props.onchange}/>
        <label for="lname">Sala:</label><br></br>
        <input type="text" id="sala" name="sala" value={props.sala} onChange={props.onchange}/>
        <input type="submit" value="Submit" />
      </form>
    </EstiloMenu>
  )
}

export default FormularioSessao;