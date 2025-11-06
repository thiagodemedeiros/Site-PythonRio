import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InscrevaSe from './pages/Inscreva-se';
import Sobre from './pages/Sobre';
import ProximoEvento from './pages/ProximoEvento';
import Layout from './layout';
//aaaaaaa

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/proximo_evento' element = {<ProximoEvento/>}/>
            <Route path='/sobre' element = {<Sobre/>}/>
            <Route path='/inscreva-se' element = {<InscrevaSe/>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
