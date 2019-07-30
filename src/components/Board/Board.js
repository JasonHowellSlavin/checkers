import React, { Component } from 'react';
import './Board.scss';
import Square from '../Square/Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello',
            isPieceSelected: false,
            fourByFour: [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]],
            threeByThree: [
                [
                    {posY: 0, posX: 0, piece: true, selected: false, viable: false},
                    {posY: 0, posX: 1, piece: false, selected: false, viable: false},
                    {posY: 0, posX: 2, piece: false, selected: false, viable: false},
                ],
                [
                    {posY: 1, posX: 0, piece: false, selected: false, viable: false},
                    {posY: 1, posX: 1, piece: false, selected: false, viable: false},
                    {posY: 1, posX: 2, piece: false, selected: false, viable: false},
                ],
                [
                    {posY: 2, posX: 0, piece: false, selected: false, viable: false},
                    {posY: 2, posX: 1, piece: false, selected: false, viable: false},
                    {posY: 2, posX: 2, piece: false, selected: false, viable: false},
                ]
            ]
        }
        this.addPiece = this.addPiece.bind(this);
        this.selectPiece = this.selectPiece.bind(this);
        this.removeAttribute = this.removeAttribute.bind(this);
    }

    removeAttribute(attribute) {
        let currentBoard = this.state.threeByThree.slice();

        currentBoard.forEach((row) => {
            row.forEach((cell) => {
                if (cell[attribute] === true) {
                    cell[attribute] = false;
                }
            })
        })
    }

    selectPiece(pY, pX) {
        let currentBoard = this.state.threeByThree.slice();

        this.removeAttribute('selected');

        currentBoard[pY][pX].selected = true;

        this.setState({threeByThree: currentBoard, isPieceSelected: true});
    }

    addPiece(pX, pY) {
        let currentBoard = this.state.threeByThree.slice();

        console.log(currentBoard[pY][pX].selected);

        if (!this.state.isPieceSelected) {
            return;
        }

        this.removeAttribute('piece');
        this.removeAttribute('selected');

        currentBoard[pY][pX].piece = true;
        this.setState({threeByThree: currentBoard, isPieceSelected: false});
    }

    checkForPositionsToMove(pY, pX) {
        let currentBoard = this.state.threeByThree;
        let avaialableSpaces = [];

        let moveUp = currentBoard[pY - 1] !== undefined ? currentBoard[pY - 1] : false;
        let moveDown = currentBoard[pY + 1] !== undefined ? currentBoard[pY + 1] : false;
        let moveWest = currentBoard[pY - 1] !== undefined ? currentBoard[pY - 1] : false;

    }

    componentDidMount() {
        return true;
    }

    render() {
        return (
            <section className={'board'}>
                <h1>{this.state.message}</h1>
                <div className={'fourByFour'}>
                    {this.state.threeByThree
                        .map((item) => {
                             return <section>
                                {item.map(elem => <div>
                                    <Square
                                        pY={elem.posY}
                                        pX={elem.posX}
                                        piece={elem.piece}
                                        selected={elem.selected}
                                        className={elem.piece ? 'full' : 'empty'}
                                        addPiece={this.addPiece}
                                        selectPiece={this.selectPiece}
                                     />
                                </div>)}
                            </section>
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Board;
