import React from 'react';
import { Component } from 'react';
import MemberDisplay from './MemberDisplay.jsx';
import EntryForm from './EntryForm.jsx';

class MainDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log('props in MainDisplay:', this.props);
    return (
      <div className="container">
        {/* <p>Hello World!</p> */}
        <MemberDisplay managers={this.props.managers} players={this.props.players} />
        <EntryForm />
      </div>
    )
  }
}

export default MainDisplay;
