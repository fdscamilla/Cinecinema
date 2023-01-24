import EstiloMenu from "./style";

function Formulario(props){
  return(
    <EstiloMenu>
      <h2>Filmes</h2>
      <form>
        <label for="fname">Nome do Filme:</label><br></br>
        <input type="text" id="filme" name="filme" value={props.filme}/>
        <label for="lname">Sinopse:</label><br></br>
        <input type="text" id="sinopse" name="sinopse" value={props.sinopse}/>
        <label for="lname">Gênero:</label><br></br>
        <input type="text" id="genero" name="genero" value={props.genero}/>
        <label for="lname">Trailler:</label><br></br>
        <input type="text" id="trailler" name="trailler" value={props.trailler}/>
        <label for="lname">Situação:</label><br></br>
        <input type="text" id="situacao" name="situacao" value={props.situacao}/>
        <label for="lname">Duração:</label><br></br>
        <input type="text" id="duracao" name="duracao" value={props.duracao}/>
        <label for="lname">Rotten:</label><br></br>
        <input type="text" id="rotten" name="rotten" value={props.rotten}/>
        <label for="lname">Indicação:</label><br></br>
        <input type="text" id="indicacao" name="indicacao" value={props.indicacao}/>
        <label for="lname">Cartaz:</label><br></br>
        <input type="text" id="cartaz" name="cartaz" value={props.cartaz}/>
        <label for="lname">Elenco:</label><br></br>
        <input type="text" id="elenco" name="elenco" value={props.elenco}/>
        <input type="submit" value="Submit" />
      </form>

      
      
    </EstiloMenu>
  )
}

export default Formulario;