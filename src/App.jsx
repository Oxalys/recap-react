import React from 'react';
import Nav from './Components/Nav';
import Exo1 from './Components/Exo1';
import Exo2 from './Components/Exo2';
import Exo3 from './Components/Exo3';
import Exo4 from './Components/Exo4';
import Oeuf from './Components/Oeuf';
import Calculatrice from './Components/Calculatrice';
import ToDoList from './Components/ToDoList';

const App = () => {
  return (
    <div>
      <Nav />
      <Exo1 btn="Clique!" />
      <Exo2 />
      <Exo3 />
      <Exo4 />
      <Oeuf />
      <Calculatrice />
      <ToDoList />
    </div>
  );
}

export default App;
