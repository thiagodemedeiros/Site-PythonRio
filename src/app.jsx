import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Sobre from './pages/sobre/sobre';
import LayoutPadrao from './LayoutPadrao';
import Inscreva from './pages/inscreva/Inscreva';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/inscreva' element={<Inscreva/>} />

                <Route element={<LayoutPadrao/>}>
                    <Route path='/sobre' element={<Sobre/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
