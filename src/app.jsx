import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InscrevaSe from './pages/Inscreva-se';
import Sobre from './pages/Sobre';
import Layout from './layout';
import PaginaDoPalestrante from './pages/PaginaDoPalestrante'

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/sobre' element = {<Sobre/>}/>
            <Route path='/inscreva-se' element = {<InscrevaSe/>}/>
            <Route path='/PaginaDoPalestrante/:nome' element = {<PaginaDoPalestrante/>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
