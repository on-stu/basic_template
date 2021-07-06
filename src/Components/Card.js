import React from 'react';
import './card.css';

function Card({title}) {
    return (
        <div className="card">
            <div className="card__container">
                <div className="card__title">
                    <h2>{title}</h2>
                    <div className="card__lecture">
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card
