import React, { Component } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import './UnitStyle.css';

class UnitStyle extends Component {
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
                <div className="unit-content"></div>
                {
                    this.state.picklist ?
                        <div>
                            <ul className="unitStyle-ul" onClick={this.switchList} style={this.props.typeStyle}>
                                <li className="unit-li-1" onClick={() => this.props.handleUnit(6)}>6</li>
                                <li className="unit-li-2" onClick={() => this.props.handleUnit(8)}>8</li>
                                <li className="unit-li-3" onClick={() => this.props.handleUnit(12)}>12</li>
                                <li className="unit-li-4" onClick={() => this.props.handleUnit(14)}>14</li>
                                <li className="unit-li-5" onClick={() => this.props.handleUnit(16)}>16</li>
                            </ul>
                        </div> :
                        <div className="unitStyle" onClick={this.switchList} >
                            <div>{this.props.unit}</div>
                            <MdArrowDropDown />
                        </div>
                }
            </div>
        );
    }
}

export default UnitStyle;