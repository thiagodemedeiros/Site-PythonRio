import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Layout from './layout';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/proximo_evento' element = {<Home/>}/>
            <Route path='/sobre' element = {<Home/>}/>
            <Route path='/inscreva-se' element = {<Home/>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
