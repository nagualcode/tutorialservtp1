import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TutorialDataService from '../services/TutorialService';

const TutorialList = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then(response => {
        setTutorials(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Tutorials List</h4>
        <ul className="list-group">
          {tutorials &&
            tutorials.map((tutorial, index) => (
              <li className="list-group-item" key={index}>
                <Link to={`/tutorials/${tutorial.id}`}>
                  {tutorial.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TutorialList;
