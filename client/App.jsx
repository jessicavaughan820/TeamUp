import React from 'react';
import { Component } from 'react';

import About from './components/About.jsx';
import CardDisplay from './components/CardDisplay.jsx';
import EntryForm from './components/EntryForm.jsx';

import './assets/styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      managers: [
        { 
          firstName: "Ms", 
          lastName: "Name", 
          img: "assets/img1.jpg", 
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. ' 
        }
      ],
      players: [
        { 
          firstName: "Player1", 
          lastName: "Name", 
          position: "Forward",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player2", 
          lastName: "Name", 
          position: "Left Midfielder",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player3", 
          lastName: "Name", 
          position: "Right Midfielder",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player4", 
          lastName: "Name", 
          position: "Center",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player5", 
          lastName: "Name", 
          position: "Left Back",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player6", 
          lastName: "Name", 
          position: "Right Back",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player7", 
          lastName: "Name", 
          position: "Center Back",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        {
          firstName: "Player8", 
          lastName: "Name", 
          position: "Goal Keeper",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player9", 
          lastName: "Name", 
          position: "Forward",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player10", 
          lastName: "Name", 
          position: "Forward",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player11", 
          lastName: "Name", 
          position: "Midfielder",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player11", 
          lastName: "Name", 
          position: "Midfielder",
          img: "assets/img1.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
      ],
    };
  }

  render() {
    console.log('in App.jsx this.state.managers[0].firstName:', this.state.managers[0].firstName);
    return (
      <div>
        <h1>TeamUp</h1>
        <About />
        <CardDisplay managers={this.state.managers} players={this.state.players} />
        <EntryForm />
      </div>
    );
  }
}

export default App;
