import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Ruby Gems</h2>
        <App />
      </React.Fragment>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);