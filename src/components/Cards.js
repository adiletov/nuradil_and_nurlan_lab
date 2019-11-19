import React from 'react';

const suits = {
    'D':'diams',
    'H':'hearts',
    'S':'spades',
    'C':'clubs'
};
const suit = {
    'D':'♦',
    'H':'♥',
    'S':'♠',
    'C':'♣'
};


const Card = props => {
    return (
            <div className={`card rank-${props.rank.toLowerCase()} ${props.suit} ${suits[props.suit]}`} onClick={() => props.click(props.id)}>
                <span className="rank">{props.rank}</span>
                <span className="suit">{suit[props.suit]}</span>
            </div>
    );
};

export default Card;
