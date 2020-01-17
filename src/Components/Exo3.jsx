import React, { useState } from 'react';


const Exo3 = () => {

    const [change, setChange] = useState("inconnu");

    const click = (e) => {
        setChange(e.target.previousElementSibling.value);
        e.target.previousElementSibling.value = "";
    }

    return (
        <div className="container bg-light my-3 py-4">
            <h2>Welcome {change}</h2>
            <p>écrivez dans l'input ci-dessous le nom de la personne que vous voulez accueillir
            lorsque vous cliquez sur le bouton "go" le nom de vous avez ajouté dans l'input sera 
            alors mis dans le span du h2 et l'input srea alors vidé de tout contenu. Attention, 
            interdiction de toucher à l'html</p>
            <input type="text" name="" id=""/><button className="rounded btn-success" onClick={click}>GO</button>

        </div>
    )
};

export default Exo3;

