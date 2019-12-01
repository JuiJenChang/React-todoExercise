import React, { Component } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import './PickStyle.css';

class PickStyle extends Component {

    render() {
        return (
            <div className="pickstyle-header">
                <div>
                    {
                        this.props.colorList ?
                            <div>
                                <ul className="pickstyle-color-ul" style={this.props.typeStyle}>
                                    <li className="color-li-1" onClick={() => this.props.handleColor('blue')}>blue</li>
                                    <li className="color-li-2" onClick={() => this.props.handleColor('orange')}>orange</li>
                                    <li className="color-li-3" onClick={() => this.props.handleColor('red')}>red</li>
                                </ul>
                            </div> :
                            <div className="pickstyle" onClick={this.props.pickColor} >
                                <div>{this.props.color}</div>
                                <MdArrowDropDown />
                            </div>
                    }
                </div>
                <div>
                    {
                        this.props.typeList ?
                            <div>
                                <ul className="pickstyle-type-ul" style={this.props.typeStyle}>
                                    <li className="type-li-1" onClick={() => this.props.handleType('light')}>light</li>
                                    <li className="type-li-2" onClick={() => this.props.handleType('dark')}>dark</li>
                                </ul>
                            </div> :
                            <div className="pickstyle" onClick={this.props.pickType} >
                                <div>{this.props.type}</div>
                                <MdArrowDropDown />
                            </div>
                    }
                </div>
                <div>
                    {
                        this.props.unitList ?
                            <div>
                                <ul className="pickstyle-unit-ul" style={this.props.typeStyle}>
                                    <li className="unit-li-1" onClick={() => this.props.handleUnit(6)}>6</li>
                                    <li className="unit-li-2" onClick={() => this.props.handleUnit(8)}>8</li>
                                    <li className="unit-li-3" onClick={() => this.props.handleUnit(12)}>12</li>
                                    <li className="unit-li-4" onClick={() => this.props.handleUnit(14)}>14</li>
                                    <li className="unit-li-5" onClick={() => this.props.handleUnit(16)}>16</li>
                                </ul>
                            </div> :
                            <div className="pickstyle-unit" onClick={this.props.pickUnit} >
                                <div>{this.props.unit}</div>
                                <MdArrowDropDown />
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default PickStyle;