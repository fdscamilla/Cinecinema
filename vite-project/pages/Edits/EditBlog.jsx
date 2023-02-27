import FormularioBlog from "../../src/components/Form-Blog";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EstiloEdit from "./style";
import Loading from '../../src/components/Loading'

function EditBlog(props){
  const [removeLoading, setRemoveLoading] = useState(false)
 const [dados, setdados] = useState(
  {
    titulo: '',
    conteudo: '',
    descricacao: '',
    capa: '',
    author: '',
    date: ''
  }
 );

 const {id} = useParams();

 function handleChange(event){
   const{name, value} = event.target;

   setdados({ ...dados, [name]: value});
 }

 useEffect(()=>{
  axios.get(`https://api-cinema-a8oa.onrender.com/blog/${id}`)
  .then((res)=>{
   setdados({ 
    titulo: res.data.titulo,
    conteudo: res.data.conteudo,
    descricao: res.data.descricao,
    capa: res.data.capa,
    author: res.data.author,
    date: res.data.date
    }, setRemoveLoading(true));
  });
 }, [])
 

 return (
   <EstiloEdit>
    {!removeLoading && <Loading />}
    <FormularioBlog onchange={
      handleChange
     } titulo={dados.titulo} conteudo={dados.conteudo} descricao={dados.descricao} capa={dados.capa} author={dados.author} date={dados.date}

     onsubmit={(e)=>{
        e.preventDefault();
      alert('Dados enviados com sucesso!')
      axios.put(`https://api-cinema-a8oa.onrender.com/blog/${id}`, {
                titulo: `${dados.titulo}`,
                conteudo: `${dados.conteudo}`,
                descricao: `${dados.descricao}`,
                capa: `${dados.capa}`,
                author: `${dados.author}`,
                date: `${dados.date}`
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })
      }}
     />
   </EstiloEdit>
 )
}

export default EditBlog;