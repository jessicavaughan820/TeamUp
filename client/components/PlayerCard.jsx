import React from 'React';

const PlayerCard = (props) => (
  <div className="playerCard">
    <img src={props.img} />
    <h3>Position: {props.position}</h3>
    <p>{props.firstName} {props.lastName}</p>
    <p>Bio: {props.bio}</p>
  </div>
);

export default PlayerCard;
