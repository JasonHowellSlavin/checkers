import React, { Component } from 'react';
import './Square.scss';
import Piece from '../Piece/Piece';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello',
        }
    }

    componentDidMount() {
        return true;
    }

    render() {
        let selectedClassName = this.props.selected ? 'selected' : '';

        return (
            <div onClick={() => this.props.addPiece(this.props.pX, this.props.pY)}
                className={`square ${this.props.className} ${selectedClassName}`}>
                {this.props.pY}
                {this.props.pX}
                {this.props.piece && <Piece selectPiece={this.props.selectPiece} pX={this.props.pX} pY={this.props.pY}/>}
            </div>
        )
    }
}

export default Square;
