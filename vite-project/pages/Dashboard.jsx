import Formulario from "../src/components/form-filmes";
import axios from 'axios'
import { useState, useEffect } from "react";
import Minicard from "../src/components/Minicard";

function Dashboard(props){
  let filmes = Get('filmes');
  const [dados, setdados] = useState(
    {
      filme: '',
      sinopse: '',
      genero: '',
      trailler: '',
      situacao: '',
      duracao: '',
      rotten: '',
      indicacao: '',
      cartaz: '',
      elenco: ''
    }
  );

  function handleChange(event){
    const{name, value} = event.target;

    setdados({ ...dados, [name]: value});
  }

  const deleteFilme = (id, e) =>{
    axios.delete(`https://api-cinema-a8oa.onrender.com/filmes/${id}`)
    .then(res => console.log('Postado', res)).catch(err => console.log(err))
  }
  return (
    <>
      <Formulario onchange={
        handleChange
      }
      
      onsubmit={(e)=>{
        e.preventDefault();
      alert('Dados enviados com sucesso!')
      axios.post('https://api-cinema-a8oa.onrender.com/filmes', {
                filme: `${dados.filme}`,
                sinopse: `${dados.sinopse}`,
                genero: `${dados.genero}`,
                trailler: `${dados.trailler}`,
                situacao: `${dados.situacao}`,
                duracao: `${dados.duracao}`,
                rotten: `${dados.rotten}`,
                indicacao: `${dados.indicacao}`,
                cartaz: `${dados.cartaz}`,
                elenco: `${dados.elenco}`
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })
      }
      } />

      <div className="filmes">
        {
          filmes.map((slide, key)=>{
            return(
              <div>
                <Minicard key={key} src={slide.cartaz} titulo={slide.filme} delete={(e) => deleteFilme(slide.id, e)}/>
              </div>
            )
          })
        }
      </div>
    </>
  )

  function Get(endpoint){
    const [filmes, setFilmes] = useState([])
    let url = `https://api-cinema-a8oa.onrender.com/${endpoint}`
  
    useEffect(()=> {
      axios
      .get(url)
      .then((resposta) => setFilmes(resposta.data))
      .catch((erro) => console.log(erro));
    }, [])
  
    return(filmes)
  }
}

export default Dashboard;