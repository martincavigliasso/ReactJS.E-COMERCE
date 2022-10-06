import React from 'react';

const Item = () => {
    
    return (
        <article className="card">
            <img
                src="https://http2.mlstatic.com/D_NQ_NP_728263-MLA43505128537_092020-O.jpg"
                alt=""
            />
            <div className="card-info">
                <h2>Nombre</h2>
                <h4>$Precio.-</h4>
                <h5>#Categoria</h5>
            </div>
        </article>
    );
};

export default Item;