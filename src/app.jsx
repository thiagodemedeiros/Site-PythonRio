import { useState , useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InscrevaSe from './pages/Inscreva-se';
import Sobre from './pages/Sobre';
import Layout from './layout';
import PaginaDoPalestrante from './pages/PaginaDoPalestrante'
import Galeria from './pages/Galeria';
import Administrativo from './pages/Administrativo';
import LoadingOverlay from './components/LoadingOverlay';

function App() {
  const [ loading , setLoading ] = useState(true)

  const forceLoading = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setLoading(false);
  }

  useEffect(() => {
    forceLoading();
  }, [])

  return (
    <>
      {loading && <LoadingOverlay />}
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/inscreva-se' element={<InscrevaSe />} />
            <Route path='/PaginaDoPalestrante/:id' element={<PaginaDoPalestrante />} />
            <Route path='/galeria' element={<Galeria />} />
            <Route path='/adm' element={<Administrativo />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
