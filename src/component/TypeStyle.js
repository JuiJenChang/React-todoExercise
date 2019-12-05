import React, { Component } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import './TypeStyle.css';

class TypeStyle extends Component {
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
                <div className="type-content"></div>
                {
                    this.state.picklist ?
                        <div>
                            <ul className="typeStyle-ul" onClick={this.switchList} style={this.props.typeStyle}>
                                <li className="type-li-1" onClick={() => this.props.handleType('light')}>light</li>
                                <li className="type-li-2" onClick={() => this.props.handleType('dark')}>dark</li>
                            </ul>
                        </div> :
                        <div className="typeStyle" onClick={this.switchList} >
                            <div>{this.props.type}</div>
                            <MdArrowDropDown />
                        </div>
                }
            </div>
        );
    }
}

export default TypeStyle;