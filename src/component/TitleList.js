import React, { Component } from 'react';
import { MdDelete } from "react-icons/md";

class TitleList extends Component {
    render() {
        const titleLsit = this.props.exercises.map((item, i) =>
            <li key={i}>
                {item}
                <MdDelete onClick={() => this.props.deleteTitle(i)} />
            </li>
        )
        return (
            <div>
                <ol>
                    {titleLsit}
                </ol>
            </div>
        );
    }
}

export default TitleList;