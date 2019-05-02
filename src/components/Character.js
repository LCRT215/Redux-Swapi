import React from "react";

const Character = props => {
  return (
    <div>
      <li>{props.character.name}</li>
      <li>{props.character.birth_year}</li>
    </div>
  );
};

export default Character;
