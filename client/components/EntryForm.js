import React from 'react';

const EntryForm = (props) => (
  <div id='signup-section'>
  <div id="sign-up">
  <h2>Sign Up To Play!</h2>
  <div id='form-section'>
  <form action="/add" method="post">
    <label>First Name: <input type="text" name="firstName" size="30" required></input></label>
    <label>Last Name: <input type="text" name="lastName" size="30" required></input> </label>
    <label>Phone Number: <input type="text" name="phone" placeholder="###-###-####" required></input></label>
    <label>Email: <input type="email" name="email" required></input></label>
    <label>Position: 
      <select name="position" required>
      <option value="goalkeeper">Goalkeeper</option>
      <option value="centerForward">Center Forward</option>
      <option value="sweeper">Sweeper</option>
      <option value="fullBack">Full-back</option>
      <option value="wingBack">Wing-back</option>
      <option value="centerMidfield">Center Midfield</option>
      <option value="defensiveMidfield">Defensive Midfield</option>
      <option value="attackingMidfield">Attacking Midfield</option>
      <option value="wideMidfield">Wide Midfield</option>
      <option value="centerForward">Center Forward</option>
      <option value="secondStriker">Second Striker</option>
      <option value="winger">Winger</option>
      </select>
    </label>
    <label>Years of Experience: 
      <select name="experience" required>
      <option value="0">Less than 1</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">15+</option>
    </select>
    </label>
    <label>Message to the organizers:<textarea name="message" rows="10" cols="50"></textarea></label>
    <input type="submit" value="Submit" onClick={() => props.handleClick()}></input>
  </form>
  </div>
  </div>
  </div>
);

export default EntryForm;
