import React, { Component } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import './Selector.css';

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

        const typeList = this.props.pickType.map((item, i) =>
            <li key={i}
                className="style-li"
                onClick={() => this.props.handleType(item)}
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
        );
    }
}

export default TypeStyle;