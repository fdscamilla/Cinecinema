import './App.css'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Cardsblog from './components/cardsBlog';
import Sessoes from './components/Sessoes';
import Slider from './components/Slider';
//import Slider from './organism/slide';

function App() {
  return (
    <>
      <Menu />
      <div className='main'>
        <div className='banner'>
          <Slider />
        </div>
        <div className='sessoes'>
          <Sessoes />
        </div>
        <div className='blog'>
          <Cardsblog />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
