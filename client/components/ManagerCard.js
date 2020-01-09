import React from 'react';

const ManagerCard = (props) => {
  return(
    <div className="manager-card">
    <img src={props.img} alt={props.firstName + props.lastName} />
    <h4>Manager</h4>
    <p>{props.firstName} {props.lastName}</p>
    <p>Bio: {props.bio}</p>
  </div>
  )
}

export default ManagerCard;