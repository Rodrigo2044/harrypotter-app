import React from 'react';
import data from './data';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Harry Potter App
          </a>
        </div>
        <div>
          <a href="/cart">Estudiantes</a>
          <a href="/signin">Staff</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.characters.map((character) => (
              <div key={character._id} className="card">
                <a href={`/character/${character._id}`}>
                  <img
                    className="medium"
                    src={character.image}
                    alt={character.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/character/${character._id}`}>
                    <h2>{character.name}</h2>
                  </a>
                  <div className="cumple">
                    Cumpleaños:{character.dateOfBirth}
                  </div>
                  <div className="cumple">Género:{character.gender}</div>
                  <div className="cumple">
                    Color de ojos:{character.eyeColour}
                  </div>
                  <div className="cumple">
                    Color de pelo:{character.hairColour}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
