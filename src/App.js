import React, { Component } from 'react';
import PickStyle from './component/PickStyle';
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
      option: {
        color: ['blue', 'orange', 'red'],
        type: ['light', 'dark'],
        unit: [6, 8, 12, 14, 16],
      },
      colorList: false,
      typeList: false,
      unitList: false,
      typeStyle: theStyle.light,
    }
  }

  handleColor = color => {
    const optionColor = this.state.option.color;
    for (let i = 0; i < optionColor.length; i++) {
      if (color === optionColor[i]) {
        this.setState({
          color: color,
          colorList: !this.state.colorList,
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
          typeList: !this.state.typeList,
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
          unitList: !this.state.unitList,
        })
      }
    }
  }

  pickColor = () => {
    this.setState({
      colorList: !this.state.colorList,
    })
  }

  pickType = () => {
    this.setState({
      typeList: !this.state.typeList,
    })
  }

  pickUnit = () => {
    this.setState({
      unitList: !this.state.unitList,
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
      <div className="exercise-content" style={this.state.typeStyle}>
        <div style={styles.root}>
        <h1>Exercises</h1>
        <header style={styles.header}>
          <PickStyle
            color={this.state.color}
            type={this.state.type}
            unit={this.state.unit}
            colorList={this.state.colorList}
            typeList={this.state.typeList}
            unitList={this.state.unitList}
            pickColor={this.pickColor}
            pickType={this.pickType}
            pickUnit={this.pickUnit}
            handleColor={this.handleColor}
            handleType={this.handleType}
            handleUnit={this.handleUnit}
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
