import React from 'react';
import ManagerCard from './ManagerCard.jsx';
import PlayerCard from './PlayerCard.jsx';

const MemberDisplay = (props) => {
  const players = [];
  for (let i = 0; i < 20; i++) {   
    players.push(<div><PlayerCard /></div>);
  }
  const managers = [];
  for (let i = 0; i < 2; i++) {
    managers.push(<div><ManagerCard /></div>);
  }
  return (
    <div className="team">
      {/* <p>Hello from the MemberDisplay</p> */}
      <h2>Our Team</h2>
      {managers}
      {players}
    </div>
  )
}

export default MemberDisplay;
