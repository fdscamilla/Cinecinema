import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Blog(props){
 const [dados, setdados] = useState(
  {
    titulo: '',
    conteudo: '',
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
    capa: res.data.capa,
    author: res.data.author,
    date: res.data.date
    });
  });
 }, [])
 

 return (
   <>
    <h2>{dados.titulo}</h2>
    <div className="imagem-capa">
      <img src={dados.capa}></img>
    </div>
    <span>{dados.author}</span>
    <span>{dados.date}</span>
    <p>{dados.conteudo}</p>
   </>
 )
}

export default Blog;