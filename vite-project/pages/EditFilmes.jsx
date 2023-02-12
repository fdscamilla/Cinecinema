import Formulario from "../src/components/Form-filmes";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditFilme(props){
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

 const {id} = useParams();

 function handleChange(event){
   const{name, value} = event.target;

   setdados({ ...dados, [name]: value});
 }

 useEffect(()=>{
  axios.get(`https://api-cinema-a8oa.onrender.com/filmes/${id}`)
  .then((res)=>{
   setdados({ 
    filme: res.data.filme,
    sinopse: res.data.sinopse,
    genero: res.data.genero,
    trailler: res.data.trailler,
    situacao: res.data.situacao,
    duracao: res.data.duracao,
    rotten: res.data.rotten,
    indicacao: res.data.indicacao,
    cartaz: res.data.cartaz,
    elenco: res.data.elenco
    });
  });
 }, [])
 

 return (
   <>
    <Formulario onchange={
      handleChange
     } filme={dados.filme} sinopse={dados.sinopse} genero={dados.genero} trailler={dados.trailler} situacao={dados.situacao} duracao={dados.duracao} rotten={dados.rotten} indicacao={dados.indicacao} cartaz={dados.cartaz} elenco={dados.elenco} 

     onsubmit={(e)=>{
        e.preventDefault();
      alert('Dados enviados com sucesso!')
      axios.put(`https://api-cinema-a8oa.onrender.com/filmes/${id}`, {
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
      }}
     />
   </>
 )
}

export default EditFilme;