import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Sobre from './pages/sobre/sobre';
import LayoutPadrao from './LayoutPadrao';
import Inscreva from './pages/inscreva/Inscreva';
import Palestrantes from './pages/Palestrantes';
import SobrePalestrante from './pages/SobrePalestrante'

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/inscreva' element={<Inscreva/>} />

                <Route element={<LayoutPadrao/>}>
                    <Route path='/sobre' element={<Sobre/>} />
                    <Route path='/palestrantes' element={<Palestrantes/>} />
                    <Route path='/sobrepalestrante' element={<SobrePalestrante/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
