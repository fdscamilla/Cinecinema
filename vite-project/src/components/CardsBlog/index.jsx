import React, {useEffect, useState, Fragment} from 'react'
import Cardblog from "../../molecules/CardBlog"
import Estilocardsblog from "./style";
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4}
];

function Cardsblog(){

  let artigos = Get('blog');

    return(
      <Estilocardsblog>
        <Fragment>
          <section>
            <div className='row'>
              <Carousel breakPoints={breakPoints}>
                {artigos.map((slide, key)=>{
                  return(
                    <div>
                      <Cardblog key={key} titulo={slide.titulo} texto={slide.descricao} nome={slide.author} time={slide.date}/>
                    </div>
                  )                
                })}
              </Carousel>
            </div>
          </section>
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