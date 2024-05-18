import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TutorialDataService from '../services/TutorialService';

const Tutorial = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [currentTutorial, setCurrentTutorial] = useState({
    id: null,
    title: "",
    description: "",
    published: false
  });

  const getTutorial = id => {
    TutorialDataService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTutorial(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status
    };

    TutorialDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    TutorialDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        navigate("/tutorials");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    TutorialDataService.remove(currentTutorial.id)
      .then(response => {
        navigate("/tutorials");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTutorial.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentTutorial.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentTutorial.published ? (
            <button
              className="btn btn-primary m-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="btn btn-primary m-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="btn btn-danger m-2" onClick={deleteTutorial}>
            Delete
          </button>

          <button
            type="submit"
            className="btn btn-success m-2"
            onClick={updateTutorial}
          >
            Update
          </button>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
