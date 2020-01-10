import React from 'react';

const PlayerCard = (props) => (
  <div className="player-card">
    <div className='player-card-header'>
      <img src={props.img} alt={props.position + props.firstName + props.lastName} height='168' width='168' />
      <div className='title-box'>
        <h5>{props.position}</h5>
        <p className='player-name'>{props.firstName} {props.lastName}</p>
      </div>
      
    </div>
    <p>{props.bio}</p>
  </div>
);

export default PlayerCard;
