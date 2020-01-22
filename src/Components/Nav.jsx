import React, { Fragment } from 'react';
import Exo1 from './Exo1.jsx';
import Exo2 from './Exo2.jsx';
import Exo3 from './Exo3.jsx';
import Exo4 from './Exo4.jsx';
import Oeuf from './Oeuf.jsx';
import Calculatrice1 from './Calculatrice1.jsx';
import Calculatrice2 from './Calculatrice2.jsx';
import ToDoList from './ToDoList.jsx';   

const Nav = () => {


    return(
        <Fragment>
            <div className="bg-primary container p-3 text-white my-3 text-center font-weight-bolder">
                <h3>RECAP REACT</h3>
            </div> 
            <div className="container mt-3">
            <span className="text-primary mx-3" onClick={Exo1}>Exercice 1</span>
            <span className="text-primary mx-3" onClick={Exo2}>Exercice 2</span>
            <span className="text-primary mx-3" onClick={Exo3}>Exercice 3</span>
            <span className="text-primary mx-3" onClick={Exo4}>Exercice 4</span>
            <span className="text-primary mx-3" onClick={Oeuf}>Exercice 5</span>
            <span className="text-primary mx-3" onClick={Calculatrice1} onClick={Calculatrice2} >Exercice 6</span>
            <span className="text-primary mx-3" onClick={ToDoList}>Exercice 7</span>
            </div>
        </Fragment>
    )
};

export default Nav;