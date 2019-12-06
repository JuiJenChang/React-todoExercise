import React, { Component } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import './Selector.css';

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

        const unitList = this.props.pickUnit.map((item, i) =>
            <li key={i}
                className="style-li"
                onClick={() => this.props.handleUnit(item)}
            >
                {item}
            </li>
        )

        return (
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
        );
    }
}

export default UnitStyle;