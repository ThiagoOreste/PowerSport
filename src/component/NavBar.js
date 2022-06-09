import React from "react";
import './css_comp/NavBar.css';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import Lupa from '../assets/lupa.png';

const NavBar = () =>{
    return(<>
        <div className="container-nav">
            <nav>
                <Link className="item-logo" exact to='/' > 
                    <img  alt="Logo" src={Logo}/>
                </Link>

                <div className='item-nav'>
                    <li id="imagem">
                        <input className="btn-text-top" type="text" name="txtsearch" placeholder="Pesquise aqui..."/>
                        <button className="btn-buscar-top" type="submit">
                            <img id="img-lupa" alt="lupa" src={Lupa}/>
                        </button>
                   </li>
                   <div className="item-nav-right">
                        <li id="item-text">
                            <Link exact to="/cadastro">Cadastro</Link>
                        </li>
                        <li>/</li>
                        <li id="item-text" >
                            <Link exact to="/login">Login</Link>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
        
        
        
    </>);
} 

export default NavBar;