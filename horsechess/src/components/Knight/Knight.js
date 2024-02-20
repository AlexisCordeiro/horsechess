import React from "react";
import './Knight.css';

const Knight = ({white}) => {
    const knightColor = white ? 'white-knight' : 'black-knight';

    return <div className={`knight ${knightColor}`}>♞</div>;
}

export default Knight;