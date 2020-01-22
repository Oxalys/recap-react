import React, { useState } from 'react';


const Calculatrice1 = () => {

    const [calcu1, setCalcu1] = useState("");
    const [calcu2, setCalcu2] = useState("");
    const [resultat1, setResultat1] = useState(" ?");

    const recup1 = (e) => {
        let value = e.target.value;
        setCalcu1(value);
    }

    const recup2 = (e) => {
        let value = e.target.value;
        setCalcu2(value);
    }

    const calcu1Res = () => {
        setResultat1(Number(calcu1) + Number(calcu2));
        setCalcu1('');
        setCalcu2('');
    }

    return(
        <div className="container bg-light my-3 p-3 pl-4">
            <h1>Création calculatrice</h1>
            <p>Niveau 1</p>
            <input value={calcu1} onChange={recup1} type="text"/> + <input value={calcu2} onChange={recup2} type="text"/> <button onClick={calcu1Res}>=</button>
            <span>{resultat1}</span>
        </div>
    )
};

export default Calculatrice1;