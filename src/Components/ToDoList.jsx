import React, { useState } from 'react';


const ToDoList = () => {

    const [list, setList] = useState([])

    const click = (e) => {
        let tache = e.target.previousElementSibling.value;
        e.target.previousElementSibling.value = "";
        list.push(tache);
    };

    return(
        <div className="container bg-light my-3 p-3 pl-4">
            <h1>Todo List</h1>
            <hr />
            <input className="input7 w-50 border-0 rounded" type="text" placeholder="  Que dois-je faire ?" /><button className="rounded mx-4 btn-success" onClick={click}>OK</button>
            <hr />
            <div className="btn7 text-center">
            <button className="btn-to rounded">Toutes</button>
            <button className="btn-to rounded">Completées</button>
            <button className="btn-to rounded">A faire</button> 
            </div>
            <hr />
            <div id="list"></div> 
        </div>
    )
};

export default ToDoList;