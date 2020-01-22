import React, { Fragment, useState } from 'react';


const List = () => {
  const etats = ['ALL', 'DONE', 'DO']
  const [list, setList] = useState([]);
  const [etat, setEtat] = useState(etats[0])


  //retourne une list filtrée sur base du filtre
  const filteredList = () => {
    if (etat === etats[0]) {
      return list
    } else if (etat === etats[1]) {
      return list.etat(t => t.check)
    } else if (etat === etats[2]) {
      return list.etat(t => !t.check)
    };
  };


  // Add tâche list
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


  // générateur d'id random
  const genId = () => '_' + Math.random().toString(36).substr(2, 9) + '_' + Math.random().toString(36).substr(2, 9)
  // checked
  const handleDone = (list) => { setList(list.map(t => t.id === list.id ? { ...t, check: !t.check } : t)) }
  // close
  const handleRemove = (list) => { setList(list.etat(t => t.id !== list.id)) }

  
  return (
    <Fragment>
      <section className="bg-light container mt-5 pt-4 pb-4 mb-5">
        <h2>To do list</h2>
        <hr />
        <input className="w-75 mb-4" type="text" placeholder="Que dois-je faire ?" onKeyPress={handleNewTodo} />
        <div id="all">
          <button onClick={() => setEtat(etats[0])} className={etat === etats[0] ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}>Toutes</button>
          <button onClick={() => setEtat(etats[1])} className={etat === etats[1] ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}>Completées</button>
          <button onClick={() => setEtat(etats[2])} className={etat === etats[2] ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}>À faire</button>
        </div>
        <hr />
        <div>
          {filteredList().map((list) =>
            <div key={list.id} className={list.check ? "bg-success" : ""}>
              <input onChange={() => handleDone(list)} type="checkbox" name="" value={list.check} id="" /> <span>{list.label}</span>
              <button type="button" className="ml-2 close" data-dismiss="toast" aria-label="Close"><span aria-hidden="true" onClick={() => handleRemove(list)}>&times;</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
};
export default List;