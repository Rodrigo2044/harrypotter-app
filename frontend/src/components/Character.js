import React from 'react';

export default function Character(props) {
  const { character } = props;
  return (
    <div key={character._id} className="card">
      <a href={`/character/${character._id}`}>
        <img className="medium" src={character.image} alt={character.name} />
      </a>
      <div className="card-body">
        <a href={`/character/${character._id}`}>
          <h2>{character.name}</h2>
        </a>
        <div className="cumple">Cumpleaños: {character.dateOfBirth}</div>
        <div className="cumple">Género: {character.gender}</div>
        <div className="cumple">Color de ojos: {character.eyeColour}</div>
        <div className="cumple">Color de pelo: {character.hairColour}</div>
      </div>
    </div>
  );
}
