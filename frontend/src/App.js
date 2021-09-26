import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CharacterScreen from './screens/CharacterScreen';
import HomeScreen from './screens/HomeScreen';
import StaffScreen from './screens/StaffScreen';
import StudentsScreen from './screens/StudentsScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Harry Potter App
            </Link>
          </div>
          {/* <div>
            <a className="brand" href="/">
              Harry Potter App
            </a>
          </div> */}
          <div>
            {/* <a href="/cart">Estudiantes</a>
            <a href="/signin">Staff</a> */}
            <Link to="/students">Estudiantes</Link>
            <Link to="/staff">Staff</Link>
          </div>
        </header>
        <main>
          <Route path="/character/:id" component={CharacterScreen}></Route>
          <Route path="/students" component={StudentsScreen}></Route>
          <Route path="/staff" component={StaffScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
