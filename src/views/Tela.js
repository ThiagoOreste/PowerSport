import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "@fontsource/do-hyeon";
import NavBar from "../component/NavBar";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import ResetSenha from "./pages/RecupSenha";

export default function Tela() {
    return(<>
    
        <main>
            <Routes>
                <Route exact path="/" element= {<Home />}/>
                <Route path="/recup" element={<ResetSenha/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />}/>
            </Routes>
        </main>
    
    </>);
}