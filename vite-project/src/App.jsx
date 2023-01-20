import './App.css'
import Menu from './components/Menu'
import Footer from './components/Footer'
import RoutesApp from './Routes'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//import Slider from './organism/slide';

function App() {

  return (
    <>
      <Menu />
      <RoutesApp />
      <Footer />
    </>
    
  )
}

export default App;
