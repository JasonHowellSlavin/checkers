import React, { Component } from 'react';
import './Board.scss';
import Square from '../Square/Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello',
            fourByFour: [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]],
            threeByThree: [
                [
                    {posY: 0, posX: 0, piece: false},
                    {posY: 0, posX: 1, piece: false},
                    {posY: 0, posX: 2, piece: false},
                ],
                [
                    {posY: 1, posX: 0, piece: false},
                    {posY: 1, posX: 1, piece: false},
                    {posY: 1, posX: 2, piece: false},
                ],
                [
                    {posY: 2, posX: 0, piece: false},
                    {posY: 2, posX: 1, piece: false},
                    {posY: 2, posX: 2, piece: false},
                ]
            ]
        }
        this.addPiece = this.addPiece.bind(this);
    }

    addPiece(pX, pY) {
        let currentBoard = this.state.threeByThree;
        currentBoard[pY][pX].piece = true;

        console.log(currentBoard);

        this.setState({threeByThree: currentBoard});

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
                                        className={elem.piece ? 'full' : 'empty'}
                                        addPiece={this.addPiece}
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
