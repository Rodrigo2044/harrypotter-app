import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CharacterScreen from './screens/CharacterScreen';
import HomeScreen from './screens/HomeScreen';
import StaffScreen from './screens/StaffScreen';
import StudentScreen from './screens/StudentScreen';
import StudentsScreen from './screens/StudentsScreen';

function App(props) {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Harry Potter App
            </Link>
          </div>

          <div>
            <div className="dropdown">
              <Link to="#admin">
                Favoritos <i className="fa fa-caret-down"></i>
              </Link>
              <ul className="dropdown-content">
                <li>
                  <a href={`/character/5`}>
                    <h1>Minerva McGonagall</h1>
                  </a>
                  {/* <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/student/33`);
                    }}
                  >
                    Harry Potter
                  </button> */}
                </li>
              </ul>
            </div>
            {/* <Link to="/students">Estudiantes</Link>
            <Link to="/staff">Staff</Link> */}
          </div>
        </header>
        <main>
          <Route path="/character/:id" component={CharacterScreen}></Route>
          <Route path="/student/:id" component={StudentScreen}></Route>
          <Route path="/staff/:id" component={StaffScreen}></Route>
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
