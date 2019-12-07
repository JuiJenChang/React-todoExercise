import React, { Component } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import './Selector.css';

class Selector extends Component {
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
        const colorList = this.props.pickColor.map((item, i) =>
            <li key={i}
                className="style-li"
                onClick={() => this.props.handleColor(i)}
            >
                {item}
            </li>
        )

        const typeList = this.props.pickType.map((item, i) =>
            <li key={i}
                className="style-li"
                onClick={() => this.props.handleType(item)}
            >
                {item}
            </li>
        )

        const unitList = this.props.pickUnit.map((item, i) =>
            <li key={i}
                className="style-li"
                onClick={() => this.props.handleUnit(item)}
            >
                {item}
            </li>
        )
        return (
            <div className="selector-container">
                <div>
                    <div className="content"></div>
                    {
                        this.state.picklist ?
                            <div>
                                <ul className="colorStyle-ul" onClick={this.switchList} style={this.props.typeStyle}>
                                    {colorList}
                                </ul>
                            </div> :
                            <div className="selectStyle" onClick={this.switchList} >
                                <div>{this.props.color}</div>
                                <MdArrowDropDown />
                            </div>
                    }
                </div>
                <div>
                    <div className="content"></div>
                    {
                        this.state.picklist ?
                            <div>
                                <ul className="typeStyle-ul" onClick={this.switchList} style={this.props.typeStyle}>
                                    {typeList}
                                </ul>
                            </div> :
                            <div className="selectStyle" onClick={this.switchList} >
                                <div>{this.props.type}</div>
                                <MdArrowDropDown />
                            </div>
                    }
                </div>
                <div>
                    <div className="unit-content"></div>
                    {
                        this.state.picklist ?
                            <div>
                                <ul className="unitStyle-ul" onClick={this.switchList} style={this.props.typeStyle}>
                                    {unitList}
                                </ul>
                            </div> :
                            <div className="unitStyle" onClick={this.switchList} >
                                <div>{this.props.unit}</div>
                                <MdArrowDropDown />
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default Selector;