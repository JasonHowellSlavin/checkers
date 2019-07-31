import React, { Component } from 'react';
import './Board.scss';
import Square from '../Square/Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello',
            isPieceSelected: false,
            availableMoves: [],
            fourByFour: [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]],
            threeByThree: [
                [
                    {posY: 0, posX: 0, piece: true, selected: false},
                    {posY: 0, posX: 1, piece: false, selected: false},
                    {posY: 0, posX: 2, piece: false, selected: false},
                    {posY: 0, posX: 3, piece: false, selected: false},
                    {posY: 0, posX: 4, piece: false, selected: false},
                ],
                [
                    {posY: 1, posX: 0, piece: false, selected: false},
                    {posY: 1, posX: 1, piece: false, selected: false},
                    {posY: 1, posX: 2, piece: false, selected: false},
                    {posY: 1, posX: 3, piece: false, selected: false},
                    {posY: 1, posX: 4, piece: false, selected: false},
                ],
                [
                    {posY: 2, posX: 0, piece: false, selected: false},
                    {posY: 2, posX: 1, piece: false, selected: false},
                    {posY: 2, posX: 2, piece: false, selected: false},
                    {posY: 2, posX: 3, piece: false, selected: false},
                    {posY: 2, posX: 4, piece: false, selected: false},
                ],
                [
                    {posY: 3, posX: 0, piece: false, selected: false},
                    {posY: 3, posX: 1, piece: false, selected: false},
                    {posY: 3, posX: 2, piece: false, selected: false},
                    {posY: 3, posX: 3, piece: false, selected: false},
                    {posY: 3, posX: 4, piece: false, selected: false},
                ],
                [
                    {posY: 4, posX: 0, piece: false, selected: false},
                    {posY: 4, posX: 1, piece: false, selected: false},
                    {posY: 4, posX: 2, piece: false, selected: false},
                    {posY: 4, posX: 3, piece: false, selected: false},
                    {posY: 4, posX: 4, piece: false, selected: false},
                ]
            ]
        }
        this.addPiece = this.addPiece.bind(this);
        this.selectPiece = this.selectPiece.bind(this);
        this.removeAttribute = this.removeAttribute.bind(this);
        this.checkForPositionsToMove = this.checkForPositionsToMove.bind(this);
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

        let availableMoves = this.checkForPositionsToMove(pY, pX);

        currentBoard[pY][pX].selected = true;

        this.setState({threeByThree: currentBoard, isPieceSelected: true, availableMoves: availableMoves});
    }

    addPiece(pX, pY) {
        let currentBoard = this.state.threeByThree.slice();
        let currentAvaialableMoves = this.state.availableMoves.slice();

        if (!this.state.isPieceSelected) {
            return;
        }

        let selectedSpot = [pY, pX];
        console.log(selectedSpot, this.state.availableMoves);

        let canMove = currentAvaialableMoves.filter((arr) => {
            return arr[0] === selectedSpot[0] && arr[1] === selectedSpot[1];
        })

        if (canMove.length === 0) {
            return;
        }

        this.removeAttribute('piece');
        this.removeAttribute('selected');


        currentBoard[pY][pX].piece = true;
        this.setState({threeByThree: currentBoard, isPieceSelected: false});
    }

    checkForPositionsToMove(pY, pX) {

        // Finsihing programming what the available spaces are
        let currentBoard = this.state.threeByThree.slice();

        let moveUp = currentBoard[pY - 1] !== undefined ? (pY - 1) : -1;
        let moveDown = currentBoard[pY + 1] !== undefined ? (pY + 1) : -1;
        let moveWest = currentBoard[pX - 1] !== undefined ? (pX - 1) : -1;
        let moveEast = currentBoard[pX + 1] !== undefined ? (pX + 1) : -1;

        let allSpaces = [[moveUp, moveEast], [moveUp, moveWest], [moveDown, moveEast], [moveDown, moveWest]];

        return allSpaces.filter((arr) => arr.every(pos => pos >= 0 ));
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
