import React from 'react';

const ManagerCard = (props) => {
  return(
    <div className="manager-card">
      <div className='image'>
        <img src={props.img} alt={props.firstName + props.lastName} />
      </div>
      <div id="info">
        <h4>Manager</h4>
        <p>{props.firstName} {props.lastName}</p>
        <p>Bio: {props.bio}</p>
      </div>
  </div>
  )
}

export default ManagerCard;