import React, { Component } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import './Selector.css';

class Selector extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openSelector: false
        }
    }

    switchSelector = () => {
        this.setState({
            openSelector: !this.state.openSelector,
        })
    }

    render() {
        const List = this.props.data.map((item, i) =>
            <li key={i}
                className="selector-li"
                onClick={() => {
                    this.props.handleClick(item)
                    this.switchSelector()
                }}
            >
                {item}
            </li>
        )

        return (
            <div>
                <div className="selector-content"></div>
                {
                    this.state.openSelector ?
                        <div>
                            <ul className="selector-ul" onClick={this.switchSelector} style={this.props.typeStyle}>
                                {List}
                            </ul>
                        </div> :
                        <div className="selectStyle" onClick={this.switchSelector} >
                            <div>{this.props.selectItem}</div>
                            <MdArrowDropDown />
                        </div>
                }
            </div>
        );
    }
}

export default Selector;