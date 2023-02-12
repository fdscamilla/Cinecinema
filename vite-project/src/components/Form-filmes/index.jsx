

function Formulario(props){
  
  return(
    <>
      <h2>Filmes</h2>
      <form onSubmit={props.onsubmit}> 
        <label for="fname">Nome do Filme:</label><br></br>
        <input type="text" id="filme" name="filme" value={props.filme} onChange={props.onchange}/>
        <label for="lname">Sinopse:</label><br></br>
        <input type="text" id="sinopse" name="sinopse" value={props.sinopse} onChange={props.onchange}/>
        <label for="lname">Gênero:</label><br></br>
        <input type="text" id="genero" name="genero" value={props.genero} onChange={props.onchange}/>
        <label for="lname">Trailler:</label><br></br>
        <input type="text" id="trailler" name="trailler" value={props.trailler} onChange={props.onchange}/>
        <label for="lname">Situação:</label><br></br>
        <input type="text" id="situacao" name="situacao" value={props.situacao} onChange={props.onchange}/>
        <label for="lname">Duração:</label><br></br>
        <input type="text" id="duracao" name="duracao" value={props.duracao} onChange={props.onchange}/>
        <label for="lname">Rotten:</label><br></br>
        <input type="text" id="rotten" name="rotten" value={props.rotten} onChange={props.onchange}/>
        <label for="lname">Indicação:</label><br></br>
        <input type="text" id="indicacao" name="indicacao" value={props.indicacao} onChange={props.onchange}/>
        <label for="lname">Cartaz:</label><br></br>
        <input type="text" id="cartaz" name="cartaz" value={props.cartaz} onChange={props.onchange}/>
        <label for="lname">Elenco:</label><br></br>
        <input type="text" id="elenco" name="elenco" value={props.elenco} onChange={props.onchange}/>
        <input type="submit" value="Submit" />
      </form>

      
      
    </>
  )
}

export default Formulario;