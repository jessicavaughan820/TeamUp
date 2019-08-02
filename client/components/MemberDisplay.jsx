import React from 'react';
import ManagerCard from './ManagerCard.jsx';
import PlayerCard from './PlayerCard.jsx';

const MemberDisplay = (props) => {
  console.log(props);
  console.log(props.managers);
  console.log(props.managers[0]);
  console.log(props.managers[0].firstName);
  console.log(props.players);
  console.log(props.players[0]);
  console.log(props.players[0].firstName);

  const players = [];
  for (let i = 0; i < props.players.length; i++) {   
    players.push(<div><PlayerCard className='playerCard' img={props.players[i].img} position={props.players[i].position} firstName={props.players[i].firstName} lastName={props.players[i].lastName} bio={props.players[i].bio} /></div>);
  }
  const managers = [];
  for (let i = 0; i < props.managers.length; i++) {
    managers.push(<div><ManagerCard className='managerCard' img={props.managers[i].img} firstName={props.managers[i].firstName} lastName={props.managers[i].lastName} bio={props.managers[i].bio} /></div>);
  }
  
  return (
    <div className="team">
      {/* <p>Hello from the MemberDisplay</p> */}
      {managers}
      {players}
    </div>
  )
}

export default MemberDisplay;
