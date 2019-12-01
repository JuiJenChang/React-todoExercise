import React, { Component } from 'react';
import { MdDelete } from "react-icons/md";
import './TitleList.css';

class TitleList extends Component {
    render() {
        const titleLsit = this.props.exercises.map((item, i) =>
            <li key={i}>
                <span>{item}</span>
                <MdDelete className="MdDelete" onClick={() => this.props.deleteTitle(i)} style={{ color: this.props.color }} />
            </li>
        )
        return (
                <ol className="create-ol">
                    {titleLsit}
                </ol>
        );
    }
}

export default TitleList;