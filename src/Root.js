import React, { Component } from 'react';
import { defaultContext, Provider } from './component/context';
import App from './App';

class AppProvider extends Component {
  state = defaultContext

  handleConfigVarChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    })

  render() {
    const { state, state: { type, color, unit }, handleConfigVarChange } = this

    const theme = ({
      palette: {
        type,
        primary: color
      },
      spacing: {
        unit
      }
    })

    return (
      <Provider
        value={{
          ...state,
          handleConfigVarChange
        }}
      >
        <div theme={theme}>
          <App />
        </div>
      </Provider>
    )
  }
}

export default AppProvider;