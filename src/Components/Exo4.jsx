import React, { Fragment, useState } from 'react';


const Exo4 = () => {

    const [count, setCount] = useState(0);

    return (
        <Fragment>
            <section className="container bg-light my-3 p-3 pl-4">
                <h1>Déplacer les éléments</h1>
                <div className="row">
                    <div className="col">
                        <div className="bleu">
                            {count % 2 === 1 && <div id="rouge"></div>} 
                        </div>
                    </div>
                    <div className="col">
                        <div className="bleu">
                        {count % 2 === 0 && <div id="rouge"></div>} 
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={() =>{setCount(count +1)}} className="btn my-3 text-center text-light btn-success">Change de place</button> <button className="ml-5 my-3 btn text-light btn-primary">Nombre de click {count}</button>
                </div>
            </section>
        </Fragment>
    )
};

export default Exo4;