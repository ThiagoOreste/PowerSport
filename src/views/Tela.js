import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "@fontsource/do-hyeon";
import NavBar from "../component/NavBar";
import Home from "./pages/Home";


export default function Tela() {
    return(<>
        <header>
            <NavBar />
        </header>
        <main>
            <Routes>
                <Route exact path="/" element= {<Home />}/>
                <Route path="/contato" element />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element />
            </Routes>
        </main>
    
    </>);
}