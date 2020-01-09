import React from 'react';
import ManagerCard from './ManagerCard';
import PlayerCard from './PlayerCard';

const CardDisplay = (props) => {
  const managers = [];
  for (let i = 0; i < props.managers.length; i++) {
    console.log('managers populated');
    managers.push(<ManagerCard img={props.managers[i].img} firstName={props.managers[i].firstName} lastName={props.managers[i].lastName} bio={props.managers[i].bio} key={'manager' + i} />);
    console.log('array', managers, 'properties', props.managers);
  }
  
  const players = [];
  for (let i = 0; i < props.players.length; i++) {   
    players.push(<PlayerCard img={props.players[i].img} position={props.players[i].position} firstName={props.players[i].firstName} lastName={props.players[i].lastName} bio={props.players[i].bio} key={'player' + i} />);
  }
  
  return (
    <div className="team">
      {managers}
      {players}
    </div>
  )
}

export default CardDisplay;
