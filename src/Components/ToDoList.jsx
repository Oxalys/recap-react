import React from 'react';


const ToDoList = () => {

    return(
        <div className="container bg-light my-3 p-3 pl-4">
            <h1>Todo List</h1>
            <hr />
            <input class="input7 w-100 border-0" type="text" placeholder="  Que dois-je faire ?" />
            <hr />
            <div class="btn7 text-center">
            <button class="btn-to rounded">Toutes</button>
            <button class="btn-to rounded">Completées</button>
            <button class="btn-to rounded">A faire </button>
            </div>
            <hr />
            <div id="list"></div>
        </div>
    )
};

export default ToDoList;