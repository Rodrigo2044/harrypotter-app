import React from 'react';
import data from '../data';

export default function CharacterScreen(props) {
  const character = data.characters.find(
    (x) => x._id === props.match.params.id
  );
  if (!character) {
    return <div> Character Not Found</div>;
  }
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <img
            className="large"
            src={character.image}
            alt={character.name}
          ></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>Nombre: {character.name}</h1>
            </li>
            <li>
              <h1>Cumpleaños: {character.dateOfBirth}</h1>
            </li>
            <li>
              <h1>Género: {character.gender}</h1>
            </li>
            <li>
              <h1>Color de ojos: {character.eyeColour}</h1>
            </li>
            <li>
              <h1>Color de pelo: {character.hairColour}</h1>
            </li>
          </ul>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
