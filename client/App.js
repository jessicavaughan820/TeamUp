import React, { Component } from 'react';

import Header from './components/Header';
import About from './components/About';
import ImageViewer from './components/ImageViewer';
import CardDisplay from './components/CardDisplay';
import EntryForm from './components/EntryForm';
import SignUpMessage from './components/SignUpMessage';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      images: [],
      aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit libero volutpat sed cras ornare arcu dui. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Ac turpis egestas sed tempus urna. Mauris commodo quis imperdiet massa tincidunt. Vitae auctor eu augue ut lectus arcu bibendum. Adipiscing diam donec adipiscing tristique risus nec feugiat. Lectus quam id leo in vitae turpis massa sed elementum. Molestie nunc non blandit massa enim nec dui nunc mattis. Massa tincidunt dui ut ornare lectus sit amet est. Eu turpis egestas pretium aenean pharetra. Malesuada fames ac turpis egestas integer. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Luctus venenatis lectus magna fringilla urna. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Sit amet luctus venenatis lectus magna fringilla urna. Convallis aenean et tortor at risus viverra. Neque viverra justo nec ultrices dui sapien eget mi proin. Libero enim sed faucibus turpis in.',
      managers: [
        { 
          firstName: "Ms", 
          lastName: "Name", 
          img: "assets/img1.jpg", 
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dolor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin nec tincidunt libero. Curabitur posuere libero ac hendrerit eleifend. Integer ac arcu congue, pellentesque nulla eu, sollicitudin risus. ' 
        },
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isRegistered: true });
  }

  render() {
    return (
      <div>
        <Header />
        <ImageViewer images={this.state.images} />
        <About text={this.state.aboutText} />
        <CardDisplay managers={this.state.managers} players={this.state.players} />
        {this.state.isRegistered ? <SignUpMessage /> : <EntryForm handleClick={this.handleClick} />}
        <Footer />
      </div>
    );
  }
}

export default App;
