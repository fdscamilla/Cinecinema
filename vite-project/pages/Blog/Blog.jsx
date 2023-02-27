import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EstiloBlog from './style'
import Loading from '../../src/components/Loading'

function Blog(props){
  const [removeLoading, setRemoveLoading] = useState(false)
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
    }, setRemoveLoading(true));
  });
 }, [])
 

 return (
   <EstiloBlog>
    {!removeLoading && <Loading />}
    <div className="area">
        <div className="titulo">
          <h2>{dados.titulo}</h2>
        </div>
        <div className="imagem-capa">
          <img src={dados.capa}></img>
        </div>
        <div className="info">
          <span>{dados.author}</span>
          <span>{dados.date}</span>
        </div>
        <div className="conteudo">
          <p>{dados.conteudo}</p>
        </div>
        <div className="lateral"></div>
    </div>
   </EstiloBlog>
 )
}

export default Blog;