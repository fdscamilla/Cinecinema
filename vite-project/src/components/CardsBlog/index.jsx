import React, {useEffect, useState, Fragment} from 'react'
import Cardblog from "../../molecules/CardBlog"
import Estilocardsblog from "./style";
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
const breakPoints = [
  {width: 550, itemsToShow: 1},
  {width: 800, itemsToShow: 2},
  {width: 1200, itemsToShow: 3}
];

function Cardsblog(){

  let artigos = Get('blog');

    return(
      <Estilocardsblog>
        <Fragment>
              <Carousel className='carousel' breakPoints={breakPoints}>
                {artigos.map((slide, key)=>{
                  return(
                    <div>
                      <Cardblog key={key} to={`/Blog/${slide.id}`} src={slide.capa} titulo={slide.titulo} texto={slide.descricao} nome={slide.author} time={slide.date}/>
                    </div>
                  )                
                })}
              </Carousel>
        </Fragment>
      </Estilocardsblog>
    )
}

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

export default Cardsblog;