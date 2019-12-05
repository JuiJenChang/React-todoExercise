import React, { Component } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import './ColorStyle.css';

class ColorStyle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            picklist: false,
        }
    }

    switchList = () => {
        this.setState({
            picklist: !this.state.picklist,
        })
    }

    render() {
        return (
            <div>
                <div className="color-content"></div>
                {
                    this.state.picklist ?
                        <div>
                            <ul className="colorStyle-ul" onClick={this.switchList} style={this.props.typeStyle}>
                                <li className="color-li-1" onClick={() => this.props.handleColor('blue')}>blue</li>
                                <li className="color-li-2" onClick={() => this.props.handleColor('orange')}>orange</li>
                                <li className="color-li-3" onClick={() => this.props.handleColor('red')}>red</li>
                            </ul>
                        </div> :
                        <div className="colorStyle" onClick={this.switchList} >
                            <div>{this.props.color}</div>
                            <MdArrowDropDown />
                        </div>
                }
            </div>
        );
    }
}

export default ColorStyle;