import React from 'react';
import './Piece.scss';

export default ({pX, pY, selectPiece}) => {
    return (
        <div onClick={() => selectPiece(pY, pX)} className={'piece'}>
            <p>{`pY: ${pY} | pX: ${pX}`}</p>
        </div>
    )
}
