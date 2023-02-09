import '../origem/App.css'
import { useContext } from 'react'
import Menu from './components/Menu'
import Footer from './components/Footer'
import RoutesApp from './Routes'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PrivateRoutesApp from './privateRoutes';
import { AuthContext } from './Contexts/AuthContext'
import Menu2 from './components/Menu2'
//import Slider from './organism/slide';

function App() {
  const {setAuth, authenticate} = useContext(AuthContext)
  console.log(authenticate)
  return (
    <>
      {authenticate == true ? <Menu2 /> : <Menu />}
      {authenticate == true ? <PrivateRoutesApp /> : <RoutesApp />}
      <Footer />
    </>
    
  )
}

export default App;
