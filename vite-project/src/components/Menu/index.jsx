import Estilomenu from './style'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';
import { MdOutlineTheaters } from 'react-icons/md';
import { FaTheaterMasks } from 'react-icons/fa';
import { HiSpeakerWave } from 'react-icons/hi2';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useState } from 'react';


function Menu(props){
  const [isActive, setActive] = useState("");
  const ToggleClass = () => {
    setActive(isActive == "is-active" ? "" : "is-active");
  }
  
  return(
    <Estilomenu>
      <div className="menu">
        <div className="logo">
          <h3><a href=''>CineCinema</a></h3>
        </div>
        <ul>
          <li><Link to="/">
          <AiOutlineArrowRight className='animate__animated arrow animate__slideInLeft' id='arrowOne'/><FaHome className='icon'/>Home</Link></li>
          <li><Link to="/Cinema"><AiOutlineArrowRight className='animate__animated arrow animate__slideInLeft' id='arrowTwo'/><FaTheaterMasks className='icon'/>Cinemas</Link></li>
          <li><Link to="/Filmes"><AiOutlineArrowRight className='animate__animated arrow animate__slideInLeft' id='arrowThree'/><MdOutlineTheaters className='icon'/>Filmes</Link></li>
          <li><Link to="/Filmes"><AiOutlineArrowRight className='animate__animated arrow animate__slideInLeft' id='arrowFour'/><HiSpeakerWave className='icon'/>Blog</Link></li>
          <li><Link to="/Filmes"><AiOutlineArrowRight className='animate__animated arrow animate__slideInLeft' id='arrowFive'/><BsTelephoneFill className='icon'/>Contato</Link></li>
        </ul>        
        <div className="direita">
          <div className="links">
            <button className='cadastro'><Link to="/Cadastro">Cadastre-se</Link></button>
            <Link className='login' to="/Login">login</Link>
          </div>
          <button className={`hamburger hamburger--elastic ${isActive}`} onClick={ToggleClass} type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div className='busca'>
            <input type='search' /><div className='lupa'><BiSearch /></div>
          </div> 
        </div>
      </div>
    </Estilomenu>
  )
}

export default Menu;