import Formulario from "../../src/components/Form-filmes";
import axios from 'axios'
import { useState, useEffect } from "react";
import Minicard from "../../src/components/Minicard";
import FormularioSessao from "../../src/components/Form-Sessao";
import FormularioBlog from "../../src/components/Form-Blog";
import EstiloDashboard from "./style";
import Loading from '../../src/components/Loading'

function Dashboard(props){
  let filmes = Get('filmes');
  let sessoes = Get('sessoes');
  let blog = Get('blog');
  const [removeLoading, setRemoveLoading] = useState(false)

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

  const [dados2, setdados2] = useState(
    {
      filme: '',
      dia: '',
      hora: '',
      sala: ''
    }
  );

  const [dados3, setdados3] = useState(
    {
      titulo: '',
      conteudo: '',
      descricao: '',
      capa: '',
      author: '',
      date: ''
    }
  );

  const [formFilmes, setformFilmes] = useState(true)
  const [formSessao, setformSessao] = useState(false)
  const [formBlog, setformBlog] = useState(false)

  function handleChange(event){
    const{name, value} = event.target;

    setdados({ ...dados, [name]: value});
  }

  function handleChange2(event){
    const{name, value} = event.target;

    setdados2({ ...dados2, [name]: value});
  }

  function handleChange3(event){
    const{name, value} = event.target;

    setdados3({ ...dados3, [name]: value});
  }

  const deleteFilme = (id, e) =>{
    axios.delete(`https://api-cinema-a8oa.onrender.com/filmes/${id}`)
    .then(res => console.log('Postado', res)).catch(err => console.log(err))
  }

  const deleteSessao = (id, e) =>{
    axios.delete(`https://api-cinema-a8oa.onrender.com/sessoes/${id}`)
    .then(res => console.log('Postado', res)).catch(err => console.log(err))
  }

  const deleteBlog = (id, e) =>{
    axios.delete(`https://api-cinema-a8oa.onrender.com/blog/${id}`)
    .then(res => console.log('Postado', res)).catch(err => console.log(err))
  }


  return (
    <EstiloDashboard>
      {!removeLoading && <Loading />}
      <div className="opcoesFormulario">
        <span onClick={()=>{
          setformFilmes(true);
          setformBlog(false);
          setformSessao(false)
        }}>Subir Filme</span>
        <span onClick={()=>{
          setformFilmes(false);
          setformBlog(false);
          setformSessao(true)
        }}>Subir Sessão</span>
        <span onClick={()=>{
          setformFilmes(false);
          setformBlog(true);
          setformSessao(false)
        }}>Subir Artigo</span>
      </div>

      {formFilmes && <Formulario onchange={
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
      } />}

      {formSessao && <FormularioSessao onchange={
        handleChange2
      }
      
      onsubmit={(e)=>{
        e.preventDefault();
      alert('Dados enviados com sucesso!')
      axios.post('https://api-cinema-a8oa.onrender.com/sessoes', {
                filme: `${dados2.filme}`,
                dia: `${dados2.dia}`,
                hora: `${dados2.hora}`,
                sala: `${dados2.sala}`
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })
      }
      }
      />}

      {formBlog && <FormularioBlog onchange={
        handleChange3
      }

      onsubmit={(e)=>{
        e.preventDefault();
      alert('Dados enviados com sucesso!')
      axios.post('https://api-cinema-a8oa.onrender.com/blog', {
                titulo: `${dados3.titulo}`,
                conteudo: `${dados3.conteudo}`,
                descricao: `${dados3.descricao}`,
                capa: `${dados3.capa}`,
                author: `${dados3.author}`,
                date: `${dados3.date}`
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              })
      }
      }
      />}

      {formFilmes && <div className="filmes">
        {
          filmes.map((slide, key)=>{
            return(
              <div>
                <Minicard key={key} to={`/EditFilmes/${slide.id}`} src={slide.cartaz} titulo={slide.filme} delete={(e) => deleteFilme(slide.id, e)}/>
              </div>
            )
          })
        }
      </div>}

      {formSessao && <div className="sessoes">
        {
          sessoes.map((slide, key)=>{
            return(
              <div>
                <Minicard key={key} to={`/EditSessoes/${slide.id}`}  titulo={slide.filme} dia={slide.dia} hora={slide.hora} sala={slide.sala} delete={(e) => deleteSessao(slide.id, e)}/>
              </div>
            )
          })
        }
      </div>}

      {formBlog && <div className="blog">
        {
          blog.map((slide, key)=>{
            return(
              <div>
                <Minicard key={key} to={`/EditBlog/${slide.id}`}  titulo={slide.titulo} delete={(e) => deleteBlog(slide.id, e)}/>
              </div>
            )
          })
        }
      </div>}
    </EstiloDashboard>
  )

  function Get(endpoint){
    const [filmes, setFilmes] = useState([])
    let url = `https://api-cinema-a8oa.onrender.com/${endpoint}`
  
    useEffect(()=> {
      axios
      .get(url)
      .then((resposta) => {
        setFilmes(resposta.data)
        setRemoveLoading(true)
      })
      .catch((erro) => console.log(erro));
      
    }, [])
  
    return(filmes)
  }
}

export default Dashboard;