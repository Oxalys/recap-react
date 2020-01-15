import React, { useState } from 'react';


const Exo1 = (props) => {

    const [titre, setTitre] = useState(<h1>Le titre</h1>)

    return (
        <div className="container bg-light my-3 p-3 pl-4">
            <h2>{titre}</h2>
            <p>list de propriété et de méthodes à retrouver dans la documentation</p>
            <ul>
                <li>innerText</li>
                <li>innerHTML</li>
                <li>querySelector()</li>
                <li>querySelectorAll()</li>
                <li>style</li>
                <li>classList</li>
            </ul>
            <p>Changer le contenu du h2 par "le titre modifié"</p>
            <p>Changer la couleur du h2 (couleur au choix)</p>
            <p>Ajouter une class background bootstrap au h2</p>
            <button onClick={() => {setTitre(<h1 className="text-light bg-primary">Titre modifié</h1>)}} className="btn-success">{props.btn}</button>
        </div>
    )
};

export default Exo1;

