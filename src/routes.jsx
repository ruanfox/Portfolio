import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contatos from "./pages/Contatos";
import Home from "./pages/Home"
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/Page404";
import PageBase from './pages/PaginaBase'

function AppRoutes(){
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageBase />} >
                        <Route index element={<Home />}></Route>
                        <Route path="/sobre" element={<Sobre />}></Route>
                        <Route path="/projetos" element={<Projetos />}></Route>
                        <Route path="/contatos" element={<Contatos />}></Route>
                        <Route path="*" element={<Page404 />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}

export default AppRoutes