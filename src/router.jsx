import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app';
import Contato from './pages/contato';
import NotFound from './pages/notfound';
import Eventos from './pages/eventos';
import VarEstado from './pages/varEstado';
import Comps from './pages/comps';
import RenderizacaoCondicional from './pages/rendeCond';
import Efeitos from './pages/efeitos';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/eventos' element={<Eventos />}></Route>
                <Route path='/varestado' element={<VarEstado/>}></Route>
                <Route path='/componentes' element={<Comps/>}></Route>
                <Route path='/rend-cond' element={<RenderizacaoCondicional/>}></Route>
                <Route path='/efeitos' element={<Efeitos/>}></Route>

                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}