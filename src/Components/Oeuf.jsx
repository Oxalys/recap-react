import React, { useState } from 'react';
import Egg from '../img/oeuf.png';


const Oeuf = () => {

    const [ajout, setAjout] = useState([]);

    const click = () => {
        let tab = ajout.slice();
        tab.push(ajout);
        setAjout(tab);
    }

    return(
        <div className="container bg-light my-3 p-3 pl-4">
            <h1>Générer des éléments du DOM (bah non du coup)</h1>
            <p>Cliquez sur le bouton ci-dessous pour générer des oeufs.</p>
            <button className="my-3" onClick={click}>Ajouter un oeuf</button>
            <div>
                {ajout.map(e =>
                    <img src={Egg} alt=""/>
                )}
            </div>
        </div>
    )
};

export default Oeuf;