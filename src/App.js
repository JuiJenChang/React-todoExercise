import React, { Component } from 'react';
import Selector from './component/Selector';
import ExerciseItem from './component/ExerciseItem';
import './App.css';

const theStyle = {
  light: {
    background: 'white',
    color: '#202020',
  },
  dark: {
    background: '#202020',
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
      options: {
        color: ['blue', 'orange', 'red'],
        type: ['light', 'dark'],
        unit: [6, 8, 12, 14, 16]
      },
      typeStyle: theStyle.light,
    }
  }

  handleColor = color => {
    this.setState({
      color: color,
    })
  }

  handleType = type => {
    this.setState({
      type: type,
      typeStyle: this.state.typeStyle === theStyle[type] ? theStyle[type] : theStyle[type],
    })
  }

  handleUnit = unit => {
    this.setState({
      unit: unit,
    })
  }

  render() {

    const unit = this.state.unit;
    const styles = {
      root: {
        margin: `${unit * 3}px auto`,
        padding: unit * 2,
        maxWidth: 400,
      },
      header: {
        marginTop: `${unit * 2}`,
      },
      list: {
        marginBottom: unit,
      }
    }

    return (
      <div className="App-content" style={this.state.typeStyle}>
        <div style={styles.root}>
          <h1>Exercises</h1>
          <header className="header-container" style={styles.header}>
            <Selector
              selectItem={this.state.color}
              data={this.state.options.color}
              handleClick={this.handleColor}
              typeStyle={this.state.typeStyle}
            />
            <Selector
              selectItem={this.state.type}
              data={this.state.options.type}
              handleClick={this.handleType}
              typeStyle={this.state.typeStyle}
            />
            <Selector
              selectItem={this.state.unit}
              data={this.state.options.unit}
              handleClick={this.handleUnit}
              typeStyle={this.state.typeStyle}
            />
          </header>
          <ExerciseItem
            style={styles.list}
            color={this.state.color}
            typeStyle={this.state.typeStyle}
          />
        </div>
      </div >
    );
  }
}

export default App;
