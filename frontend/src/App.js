import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CharacterScreen from './screens/CharacterScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/character/:id" component={CharacterScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
