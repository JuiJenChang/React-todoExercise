import React, { Component } from 'react';
import PickStyle from './component/PickStyle';
import ExerciseItem from './component/ExerciseItem';
import './App.css';


const theStyle = {
  light: {
    background: 'white',
    color: 'black',
  },
  dark: {
    background: 'black',
    color: 'white',
  }
};

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: 'blue',
      type: 'light',
      unit: 8,
      option: {
        color: ['blue', 'orange', 'red'],
        type: ['light', 'dark'],
        unit: [6, 8, 12, 14, 16],
      },
      typeStyle: theStyle.light,
    }
  }

  handleColor = color => {
    const optionColor = this.state.option.color;
    for (let i = 0; i < optionColor.length; i++) {
      if (color === optionColor[i]) {
        this.setState({
          color: color,
        })
      }
    }
  }

  handleType = type => {
    const optionType = this.state.option.type;
    for (let i = 0; i < optionType.length; i++) {
      if (type === optionType[i]) {
        this.setState({
          type: type,
          typeStyle: this.state.typeStyle === theStyle.dark ? theStyle.light : theStyle.dark
        })
      }
    }
  }

  handleUnit = unit => {
    const optionUnit = this.state.option.unit;
    for (let i = 0; i < optionUnit.length; i++) {
      if (unit === optionUnit[i]) {
        this.setState({
          unit: unit,
        })
      }
    }
  }

  render() {
    const unit = this.state.unit;
    const styles = {
      main: {
        padding: `${unit * 3}px`,
      },
    }
    return (
      <div className="exercise-content" style={this.state.typeStyle}>
        <h1>Exercises</h1>
        <header style={this.state.unitStyle}>
          <PickStyle
            color={this.state.color}
            type={this.state.type}
            unit={this.state.unit}
            handleColor={this.handleColor}
            handleType={this.handleType}
            handleUnit={this.handleUnit}
          />
        </header>
          <ExerciseItem
            style={this.state.color}
          />
      </div >
    );
  }
}

export default App;
