import React from 'react';
import { Component } from 'react';
import MemberDisplay from './MemberDisplay.jsx';
import EntryForm from './EntryForm.jsx';

class MainDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="container">
        {/* <p>Hello World!</p> */}
        <MemberDisplay />
        <EntryForm />
      </div>
    )
  }
}

export default MainDisplay;
