import React from 'react';

const ManagerCard = (props) => {
  return(
    <div className="manager-card">
      <div className='image'>
        <img src={props.img} alt={props.firstName + props.lastName} />
      </div>
      <div className="info">
        <h4>{props.firstName} {props.lastName}</h4>
        <p>{props.bio}</p>
      </div>
  </div>
  )
}

export default ManagerCard;