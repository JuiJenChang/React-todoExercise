import React, { Component } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import './Selector.css';

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

        const colorList = this.props.pickColor.map((item, i) =>
            <li key={i}
                className="style-li"
                onClick={() => this.props.handleColor(i)}
            >
                {item}
            </li>
        )

        return (
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
        );
    }
}

export default ColorStyle;

