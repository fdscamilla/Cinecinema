import './App.css'
import Menu from './molecules/Menu'
import Footer from './molecules/Footer'
import Sessoes from './organism/Sessoes';
import Cardsblog from './molecules/cardsBlog';
//import Slider from './organism/slide';

function App() {
  return (
    <>
      <Menu />
      <div className='main'>
        <div className='banner'>

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
