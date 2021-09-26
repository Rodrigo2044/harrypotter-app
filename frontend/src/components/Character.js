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
        <div className="price">Cumpleaños: {character.dateOfBirth}</div>
        <div className="price">Género: {character.gender}</div>
        <div className="price">Color de ojos: {character.eyeColour}</div>
        <div className="price">Color de pelo: {character.hairColour}</div>
      </div>
    </div>
  );
}
