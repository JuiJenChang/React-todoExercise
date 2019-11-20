import React, { Component } from 'react';

class ExerciseItem extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addTitle}>
                <input
                    value={this.props.title}
                    onChange={this.props.handleInput}
                    placeholder='exercise'
                />
                <button type="submit" >create</button>
                </form>
            </div>
        );
    }
}

export default ExerciseItem;