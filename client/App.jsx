import React from 'react';
import { Component } from 'react';
import MainDisplay from './components/MainDisplay.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {/* <p>Hello World</p> */}
        <MainDisplay />
      </div>
    )
  }
}

export default App;
