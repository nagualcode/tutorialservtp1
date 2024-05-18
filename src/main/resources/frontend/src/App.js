import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TutorialList from './components/TutorialList';
import AddTutorial from './components/AddTutorial';
import Tutorial from './components/Tutorial';

const App = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Tutorials
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TutorialList />} />
          <Route path="/tutorials" element={<TutorialList />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
          <Route path="/add" element={<AddTutorial />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
