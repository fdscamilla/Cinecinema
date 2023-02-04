import FormularioSessao from "../src/components/Form-Sessao";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditSessoes(props){
 const [dados, setdados] = useState(
  {
    filme: '',
    dia: '',
    hora: '',
    sala: ''
  }
 );

 const {id} = useParams();

 function handleChange(event){
   const{name, value} = event.target;

   setdados({ ...dados, [name]: value});
 }

 useEffect(()=>{
  axios.get(`https://api-cinema-a8oa.onrender.com/sessoes/${id}`)
  .then((res)=>{
   setdados({ 
    filme: res.data.filme,
    dia: res.data.dia,
    hora: res.data.hora,
    sala: res.data.sala
    });
  });
 }, [])
 

 return (
   <>
    <FormularioSessao onchange={
      handleChange
     } filme={dados.filme} dia={dados.dia} hora={dados.hora} sala={dados.sala} 

     onsubmit={(e)=>{
        e.preventDefault();
      alert('Dados enviados com sucesso!')
      axios.put(`https://api-cinema-a8oa.onrender.com/sessoes/${id}`, {
                filme: `${dados.filme}`,
                dia: `${dados.dia}`,
                hora: `${dados.hora}`,
                sala: `${dados.sala}`
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

export default EditSessoes;