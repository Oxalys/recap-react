import React, { useState } from 'react';


const ToDoList = () => {

    const [list, setList] = useState([]);

    const click = (e) => {
        let tache = e.target.previousElementSibling.value;
        e.target.previousElementSibling.value = "";
        let tab = list.slice();
        tab.push(tache);
        setList(tab);
    };

    const handleNewTodo = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            setList([...list, {
                id: genId(),
                label: e.target.value,
                check: false,
            }]) 
            e.target.value = ''
        };
    };

    const etats = ["tout", "à faire", "fait"];

    const [etat, setEtat] = useState(etats[0]);

    const filteredList = () => {
        if (etat === etats[0]) {
            return list
        } else if (etat === etats[1]) {
            return list.filter(t => t.check)
        } else if (etat === etats[2]) {
            return list.filter(t => !t.check) 
        };
    };

    // générateur d'id random
    const genId = () => '_' + Math.random().toString(36).substr(2, 9) + '_' + Math.random().toString(36).substr(2, 9)
    // checked
    const handleDone = (todo) => { setList(list.map(t => t.id === todo.id ? { ...t, check: !t.check } : t)) }
    // close
    const handleRemove = (todo) => { setList(list.filter(t => t.id !== todo.id)) }


    return (
        <div className="container bg-light my-3 p-3 pl-4">
            <h1>Todo List</h1>
            <hr />
            <input className="input7 w-50 border-0 rounded" type="text" placeholder="  Que dois-je faire ?" /><button className="rounded mx-4 btn-success" onClick={click} onKeyPress={handleNewTodo}>OK</button>
            <hr />
            <div id='all' className="btn7 text-center">
                <button onClick={() => setEtat(etats[0])} className={etat === etat[0] ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'} className="btn-to rounded">Toutes</button>
                <button onClick={() => setEtat(etats[1])} className={etat === etat[1] ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'} className="btn-to rounded">Completées</button>
                <button onClick={() => setEtat(etats[2])} className={etat === etat[2] ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'} className="btn-to rounded">A faire</button>
            </div>
            <hr />
            <div>
                {filteredList().map((todo, i) =>
                    <div key={todo.id} className={todo.check ? "bg-green" : ""}>
                        <input onChange={() => handleDone(todo)} type="checkbox" name="" value={todo.check} id="" /> {todo.label}
                        <button type="button" className="ml-2 close" data-dismiss="toast" aria-label="Close" ><span aria-hidden="true" onClick={() => handleRemove(todo)}>&times;</span>
                        </button>
                    </div>)}
            </div>
        </div>

    )
};

export default ToDoList;