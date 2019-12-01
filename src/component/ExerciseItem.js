import React, { Component } from 'react';
import TitleList from './TitleList';
import './ExerciseItem.css';

class ExerciseItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            exercises: [],
        }
    }

    handleInput = e => {
        const addTitle = e.target.value;
        this.setState({
            title: addTitle,
        })
    }

    addTitle = e => {
        e.preventDefault();
        const title = this.state.title;
        if (title !== '') {
            const titleList = [...this.state.exercises, title]
            this.setState({
                exercises: titleList,
                title: '',
            })
        }
    }

    deleteTitle = key => {
        const filterExercises = this.state.exercises.filter((item, i) => {
            return i !== key
        })
        this.setState({
            exercises: filterExercises,
        })
    }

    render() {
        return (
            <div>
                <div className="exercise-main">
                    <form onSubmit={this.addTitle}>
                        <input
                            className="exerciseItem-input"
                            value={this.state.title}
                            onChange={this.handleInput}
                            placeholder='Exercise'
                            style={this.props.typeStyle}
                        />
                        <button type="submit" style={{ backgroundColor: this.props.color }}>create</button>
                    </form>
                </div>
                <TitleList
                    exercises={this.state.exercises}
                    deleteTitle={this.deleteTitle}
                    color={this.props.color}
                />
            </div>
        );
    }
}

export default ExerciseItem;