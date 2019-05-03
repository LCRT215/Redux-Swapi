import React from "react";
import character from "../styles/character.css";

const Character = props => {
  return (
    <div className="charDiv">
      <h2 className="charName">{props.character.name}</h2>
      <hr />
      <p>
        <strong>Gender:</strong> {props.character.gender}
      </p>
      <p>
        <strong>Height:</strong> {props.character.height}
      </p>
      <p>
        <strong>Mass:</strong> {props.character.mass}
      </p>
    </div>
  );
};

export default Character;
