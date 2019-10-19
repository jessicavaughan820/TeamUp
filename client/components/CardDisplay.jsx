import React from 'react';

import PlayerCard from './PlayerCard.jsx';

const CardDisplay = (props) => {
  const players = [];
  for (let i = 0; i < props.players.length; i++) {   
    players.push(<div><PlayerCard className='playerCard' img={props.players[i].img} position={props.players[i].position} firstName={props.players[i].firstName} lastName={props.players[i].lastName} bio={props.players[i].bio} /></div>);
  }
  
  return (
    <div className="team">
      {players}
    </div>
  )
}

export default CardDisplay;
