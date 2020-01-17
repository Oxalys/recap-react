import React, { useState } from 'react';


const Calculatrice = () => {

    const [calcu1, setCalcu1] = useState("");
    const [calcu2, setCalcu2] = useState("");
    const [resultat1, setResultat1] = useState(" ?");
    const [calcu3, setCalcu3] = useState("");
    const [resultat2, setResultat2] = useState(" ?");

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

    const number = (e) => {
        setCalcu3(e.target.innerHTML)
    }
    

    return(
        <div className="container bg-light my-3 p-3 pl-4">
            <h1>Création calculatrice</h1>
            <p>Niveau 1</p>
            <input value={calcu1} onChange={recup1} type="text"/> + <input value={calcu2} onChange={recup2} type="text"/> <button onClick={calcu1Res}>=</button>
            <span>{resultat1}</span>


            <p className="mt-3">Niveau 2</p>

            <div className="calcu bg-dark w-25 pb-3">
                <div className="text-white d-flex justify-content-end mr-3 pt-2" id="resultat">0</div>
                <input className="ml-3" id="calcul" type="text" value={calcu3} />
                <hr className="bg-secondary" />
                <button onClick={number} className="num rounded ml-3 mx-2 px-3 py-2">1</button>
                <button onClick={number} className="num rounded mx-2 px-3 py-2">2</button>
                <button onClick={number} className="num rounded mx-2 px-3 py-2">3</button>
                <button onClick={number} className="signe rounded bg-primary text-white mx-3 px-3 py-2">+</button>
                <hr className="bg-secondary" />
                <button onClick={number} className="num rounded ml-3 mx-2 px-3 py-2">4</button>
                <button onClick={number} className="num rounded mx-2 px-3 py-2">5</button>
                <button onClick={number} className="num rounded mx-2 px-3 py-2">6</button>
                <button onClick={number} className="signe rounded bg-primary text-white mx-3 px-3 py-2">-</button>
                <hr className="bg-secondary" />
                <button onClick={number} className="num rounded ml-3 mx-2 px-3 py-2">7</button>
                <button onClick={number} className="num rounded mx-2 px-3 py-2">8</button>
                <button onClick={number} className="num rounded mx-2 px-3 py-2">9</button>
                <button onClick={number} className="signe rounded bg-primary text-white mx-3 px-3 py-2">*</button>
                <hr className="bg-secondary" />
                <button onClick={number} className="signe rounded bg-danger text-white ml-3 mx-2 px-3 py-2">C</button>
                <button onClick={number} className="num rounded mx-2 px-3 py-2">0</button>
                <button onClick={number} className="egal2 rounded bg-success text-white mx-2 px-3 py-2">=</button>
                <button onClick={number} className="signe rounded bg-primary text-white mx-3 px-3 py-2 mb-2">/ </button>
            </div>
        </div>
    )
};

export default Calculatrice;