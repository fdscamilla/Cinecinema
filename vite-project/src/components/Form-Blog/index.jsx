import EstiloMenu from "./style";

function FormularioBlog(props){
  
  return(
    <>
      <h2>Blog</h2>
      <form onSubmit={props.onsubmit}> 
        <label for="fname">Título:</label><br></br>
        <input type="text" id="titulo" name="titulo" value={props.titulo} onChange={props.onchange}/>
        <label for="lname">Conteúdo:</label><br></br>
        <input type="text" id="conteudo" name="conteudo" value={props.conteudo} onChange={props.onchange}/>
        <label for="lname">Descrição:</label><br></br>
        <input type="text" id="descricao" name="descricao" value={props.descricao} onChange={props.onchange}/>
        <label for="lname">Capa:</label><br></br>
        <input type="text" id="capa" name="capa" value={props.capa} onChange={props.onchange}/>
        <label for="lname">Autor:</label><br></br>
        <input type="text" id="author" name="author" value={props.author} onChange={props.onchange}/>
        <label for="lname">Data:</label><br></br>
        <input type="text" id="date" name="date" value={props.date} onChange={props.onchange}/>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default FormularioBlog;