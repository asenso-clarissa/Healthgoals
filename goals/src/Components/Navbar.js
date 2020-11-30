import React from "react";
import homeIcon from '../img/home.png'

function Navbar() {
  return (
    <div>
      <footer>
        <ul>
          <li>
            <img src={homeIcon} alt="Homeicon" style={{width: '20px'}} /> Home
          </li>
          <li>Workout</li>
          <li>Recipies</li>
          <li>Profile</li>
        </ul>
      </footer>
    </div>
  );
}

export default Navbar;
