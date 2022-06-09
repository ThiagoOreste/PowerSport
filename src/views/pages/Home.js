import React from "react";
import './css/Home.css';
import Imgfundo from '../../assets/pista.jpg';
import Imgtexto from '../../assets/text.png';
import Sport from '../../assets/logogrande2.PNG';


const Home = () =>{
    return(<>
        <div class="img">
            <img src={Imgfundo} />
            <div>
                <img src={Imgtexto} />
            </div>
        </div>

        <h1 id='apresenta'><b>HEALTHFUL</b> Apresenta</h1>

        <div>
            <img id='Sportimg' src={Sport} alt='sport'/>
        </div>

        <div className="texto">
            <p>Na necessidade de levarmos saúde à todos, nós da <b id='caixa-text'>EQUIPE HEALTHFUL</b>
                pensamos também nas pessoas que necessitem de equipamentos e artigos de esporte, 
                voltado à todas as áreas do esporte! 
            </p>

        </div>

    </>);
} 

export default Home ;