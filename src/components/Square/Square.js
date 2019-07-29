import React, { Component } from 'react';
import './Square.scss';

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
        return (
            <div onClick={() => this.props.addPiece(this.props.pX, this.props.pY)} className={`square ${this.props.className}`}>
                {this.props.pX}
                {this.props.pY}
                {this.props.piece ? 'true' : 'false'}
            </div>
        )
    }
}

export default Square;
