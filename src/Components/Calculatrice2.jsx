import React, { useState } from 'react';


const Calculatrice2 = () => {
    const [input, setInput] = useState('');
    const [p, setP] = useState('');
    const [op, setOp] = useState('');
    const [nb, setNb] = useState('');
    const [nb2, setNb2] = useState('');
    const [save, setSave] = useState('');
    let tab = [{ nb: nb, fct: setNb }, { nb: nb2, fct: setNb2 }]
    const [count, setCount] = useState(0);
    const egal = () => {
        setP(p + save);
        switch (op) { 
            case '+':;
                setP(save + ' = ' + (Number(nb) + Number(nb2)));
                break;
            case '-':
                setP(save + ' = ' + (Number(nb) - Number(nb2)));
                break;
            case '*':
                setP(save + ' = ' + (Number(nb) * Number(nb2)));
                break;
            case '/':
                setP(save + ' = ' + (Number(nb) / Number(nb2)));
                break;
            default:
                setP(' '); 
        }
        setInput('') 
        setOp('');
        setNb('');
        setNb2('');
        setSave('');
        setCount(0);
    }
    const ajoute = (e) => {
        setInput(input + e.target.innerText);
        setSave(save + e.target.innerText);
        tab[count].fct(tab[count].nb + e.target.innerText);
    }
    const operator = (e) => {
        setOp(e.target.innerText);
        setP(save + e.target.innerText);
        setSave(save + e.target.innerText);
        setInput('');
        setCount((count + 1) % 2)
    }
    const clear = () => {
        setInput('');
        setP(0);
        setCount(0);
        setNb('');
        setNb2('');
        setSave('')
    }
    return (
        <div className='niveau2 mt-4 container bg-light my-3 p-3 pl-4'>
            <h4>Niveau 2</h4>
            <div className="calculatrice bg-dark text-white p-2 w-25 rounded ">
                <div className="resultat d-flex justify-content-end mr-3 pt-2">
                    <p className='justify-content-start'>{p}</p>
                    <input type="text" className='text-dark rounded' value={input} onChange={() => setInput(input)} />
                </div>
                <div className="boutons">
                    <button className="btn btn-light col-2 ml-3 mt-3 mx-2" onClick={ajoute}>1</button>
                    <button className="btn btn-light col-2 ml-2 mt-3 mx-2" onClick={ajoute}>2</button>
                    <button className="btn btn-light col-2 ml-2 mt-3 mx-2" onClick={ajoute}>3</button>
                    <div className="btn btn-primary col-2 ml-2 mt-3 mx-2" onClick={operator}>+</div>
                    <div className="w-100"></div>
                    <button className="btn btn-light col-2 ml-3 mt-3 mx-2" onClick={ajoute}>4</button>
                    <button className="btn btn-light col-2 ml-2 mt-3 mx-2" onClick={ajoute}>5</button>
                    <button className="btn btn-light col-2 ml-2 mt-3 mx-2" onClick={ajoute}>6</button>
                    <div className="btn btn-primary col-2 ml-2 mt-3 mx-2" onClick={operator}>-</div>
                    <div className="w-100"></div>
                    <button className="btn btn-light col-2 ml-3 mt-3 mx-2" onClick={ajoute}>7</button>
                    <button className="btn btn-light col-2 ml-2 mt-3 mx-2" onClick={ajoute}>8</button>
                    <button className="btn btn-light col-2 ml-2 mt-3 mx-2" onClick={ajoute}>9</button>
                    <div className="btn btn-primary col-2 ml-2 mt-3 mx-2" onClick={operator}>*</div>
                    <div className="w-100"></div>
                    <div className="btn btn-danger col-2 ml-3 mt-3 mx-2 mb-2" onClick={clear}>C</div>
                    <button className="btn btn-light col-2 ml-2 mt-3 mx-2 mb-2" onClick={ajoute}>0</button>
                    <div className="btn btn-success col-2 ml-2 mt-3 mx-2 mb-2" onClick={egal}>=</div>
                    <div className="btn btn-primary col-2 ml-2 mt-3 mx-2 mb-2" onClick={operator}>/</div>
                </div>
            </div>
        </div>
    )
};
export default Calculatrice2;

