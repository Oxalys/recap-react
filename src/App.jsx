import React, { useState } from 'react';
import Nav from './Components/Nav';
import Exo1 from './Components/Exo1';
import Exo2 from './Components/Exo2';
import Exo3 from './Components/Exo3';
import Exo4 from './Components/Exo4';
import Oeuf from './Components/Oeuf';
import Calculatrice1 from './Components/Calculatrice1';
import Calculatrice2 from './Components/Calculatrice2';
import ToDoList from './Components/ToDoList';

const App = () => {

  const [exo, setExo] = useState([
    {div: <Exo1 />, etat:'block', lien: 'col-3'},
    {div: <Exo2 />, etat:'hide', lien: 'col-3'},
    {div: <Exo3 />, etat:'hide', lien: 'col-3'},
    {div: <Exo4 />, etat:'hide', lien: 'col-3'},
    {div: <Oeuf />, etat:'hide', lien: 'col-3'},
    {div: <Calculatrice1 />, etat:'hide', lien: 'col-3'},
    {div: <Calculatrice2 />, etat:'hide', lien: 'col-3'},
    {div: <ToDoList />, etat:'hide', lien: 'col-3'},
  ])

  return (
    <div>
      <Nav />
      <Exo1 btn="Clique!" />
      <Exo2 />
      <Exo3 />
      <Exo4 />
      <Oeuf />
      <Calculatrice1 />
      <Calculatrice2 />
      <ToDoList />
    </div>
  );
}

export default App;
