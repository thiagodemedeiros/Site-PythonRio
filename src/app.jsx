import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Sobre from './pages/sobre/sobre';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
            </Routes>
        </BrowserRouter>
    )
}
