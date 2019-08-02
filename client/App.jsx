import React from 'react';
import { Component } from 'react';
import MainDisplay from './components/MainDisplay.jsx';
import './assets/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      managers: [
        { 
          firstName: "Ms", 
          lastName: "Name", 
          img: "image1.jpg", 
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. ' 
        }
      ],
      players: [
        { 
          firstName: "Player1", 
          lastName: "Name", 
          position: "Forward",
          img: "image2.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player2", 
          lastName: "Name", 
          position: "Left Midfielder",
          img: "image3.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player3", 
          lastName: "Name", 
          position: "Right Midfielder",
          img: "image4.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player4", 
          lastName: "Name", 
          position: "Center",
          img: "image5.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player5", 
          lastName: "Name", 
          position: "Left Back",
          img: "image6.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player6", 
          lastName: "Name", 
          position: "Right Back",
          img: "image7.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player7", 
          lastName: "Name", 
          position: "Center Back",
          img: "image8.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        {
          firstName: "Player8", 
          lastName: "Name", 
          position: "Goal Keeper",
          img: "image9.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player9", 
          lastName: "Name", 
          position: "Forward",
          img: "image10.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player10", 
          lastName: "Name", 
          position: "Forward",
          img: "image11.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
        { 
          firstName: "Player11", 
          lastName: "Name", 
          position: "Midfielder",
          img: "image12.jpg", 
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. " 
        },
      ],
    };
  }

  render() {
    console.log('in App.jsx this.state.managers[0].firstName:', this.state.managers[0].firstName);
    return (
      <div>
        {/* <p>Hello World</p> */}
        <MainDisplay managers={this.state.managers} players={this.state.players} />
      </div>
    );
  }
}

export default App;
