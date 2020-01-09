import React from 'react';

const PlayerCard = (props) => (
  <div className="player-card">
    <img src={props.img} alt={props.position + props.firstName + props.lastName} />
    <h4>Position: {props.position}</h4>
    <p>{props.firstName} {props.lastName}</p>
    <p>Bio: {props.bio}</p>
  </div>
);

export default PlayerCard;
