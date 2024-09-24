import '../public/css/style.css'
import Header from './components/layout/Header'
import logo from '../public/img/viulogo.png'

function App() {
  return (
    <>
      <Header ImageSrc= {logo} ImageAlt="Vite logo" brandUrl="#"/>
    </>
  );
}

export default App
