import React, { Component } from 'react';
import './App.css';
import ExerciseItem from './component/ExerciseItem';
import TitleList from './component/TitleList';
import { Consumer } from './component/context';
import { MdArrowDropDown } from "react-icons/md";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      exercises: [],
      title: '',
    }
  }

  handleInput = e => {
    const keyTitle = e.target.value;
    this.setState({
      title: keyTitle,
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
      <Consumer>
        {({ options, handleConfigVarChange, ...configVars }) => (
          <div className="exercise-content">
            <h1>Exercises</h1>
            <div>
              {Object.entries(options).map(([variable, defaults]) => (
                <div key={variable}>
                  <select>
                    name={variable}
                    value={configVars[variable]}
                    onChange={handleConfigVarChange(variable)}
                    {defaults.map(value => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                  </select>
                </div>
              ))}
            </div>
            <ExerciseItem
              title={this.state.title}
              handleInput={this.handleInput}
              addTitle={this.addTitle}
            />
            <TitleList
              exercises={this.state.exercises}
              deleteTitle={this.deleteTitle}
            />
          </div>
        )}
      </Consumer>
    );
  }
}

export default App;
