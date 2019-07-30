import React from 'react';
import './Piece.scss';

export default ({pX, pY, selectPiece}) => {
    return (
        <div onClick={() => selectPiece(pY, pX)} className={'piece'}>
            <p>{`pX: ${pX} | pY: ${pY}`}</p>
        </div>
    )
}
