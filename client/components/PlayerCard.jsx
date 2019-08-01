import React from 'React';

const PlayerCard = (props) => (
  // console.log("PlayerCard:", props)
  <div className="playerCard">
    <img src={props.img} />
    <h4>Position: {props.position}</h4>
    <p>{props.firstName} {props.lastName}</p>
    <p>Bio: {props.bio}</p>
  </div>
);

export default PlayerCard;
