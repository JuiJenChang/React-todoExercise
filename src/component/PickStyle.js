import React, { Component } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import './PickStyle.css';

class PickStyle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colorList: false,
            typeList: false,
            unitList: false,
        }
    }

    pickColor = () => {
        this.setState({
            colorList: !this.state.colorList,
        })
    }

    pickType = () => {
        this.setState({
            typeList: !this.state.typeList,
        })
    }

    pickUnit = () => {
        this.setState({
            unitList: !this.state.unitList,
        })
    }

    render() {
        return (
            <div className="pickstyle-header">
                <div>
                    <div className="pickstyle">
                        {this.props.color}
                        <MdArrowDropDown onClick={this.pickColor} />
                    </div>
                    {
                        this.state.colorList ?
                            <div>
                                <ul className="pickstyle-ul">
                                    <li onClick={() => this.props.handleColor('blue')}>blue</li>
                                    <li onClick={() => this.props.handleColor('orange')}>orange</li>
                                    <li onClick={() => this.props.handleColor('red')}>red</li>
                                </ul>
                            </div> : <MdArrowDropDown onClick={this.pickColor} />
                    }
                </div>
                <div>
                    <div className="pickstyle">
                        {this.props.type}
                        <MdArrowDropDown onClick={this.pickType} />
                    </div>
                    {
                        this.state.typeList ?
                            <div>
                                <ul className="pickstyle-ul">
                                    <li onClick={() => this.props.handleType('light')}>light</li>
                                    <li onClick={() => this.props.handleType('dark')}>dark</li>
                                </ul>
                            </div> : <MdArrowDropDown onClick={this.pickType} />
                    }
                </div>
                <div>
                    <div className="pickstyle">
                        {this.props.unit}
                        <MdArrowDropDown onClick={this.pickUnit} />
                    </div>
                    {
                        this.state.unitList ?
                            <div>
                                <ul className="pickstyle-ul">
                                    <li onClick={() => this.props.handleUnit(6)}>6</li>
                                    <li onClick={() => this.props.handleUnit(8)}>8</li>
                                    <li onClick={() => this.props.handleUnit(12)}>12</li>
                                    <li onClick={() => this.props.handleUnit(14)}>14</li>
                                    <li onClick={() => this.props.handleUnit(16)}>16</li>
                                </ul>
                            </div> : <MdArrowDropDown onClick={this.pickUnit} />
                    }
                </div>
            </div>
        );
    }
}

export default PickStyle;