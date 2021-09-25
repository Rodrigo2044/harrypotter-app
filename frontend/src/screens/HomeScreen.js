import React from 'react';
import Character from '../components/Character';
import data from '../data';

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.characters.map((character) => (
          <Character key={character._id} character={character}></Character>
        ))}
      </div>
    </div>
  );
}
