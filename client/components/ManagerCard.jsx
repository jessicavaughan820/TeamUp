import React from 'React';

const ManagerCard = (props) => (
  // console.log("ManagerCard:", props)
  <div className="managerCard">
    <h2>Team Manager</h2>
    <img src={props.img} />
    <p>{props.firstName} {props.lastName}</p>
    <p>Bio: {props.bio}</p>
  </div>
);

export default ManagerCard;
