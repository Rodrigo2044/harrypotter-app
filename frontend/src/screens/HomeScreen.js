import React, { useEffect } from 'react';
// import axios from 'axios';
import Character from '../components/Character';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listCharacters } from '../actions/characterActions';
// import data from '../data';

export default function HomeScreen(props) {
  // Usare los character from backend
  const characterList = useSelector((state) => state.characterList);
  const { loading, error, characters } = characterList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCharacters());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="row center">
            <button
              type="button"
              className="primary"
              onClick={() => props.history.push('/students')}
            >
              Estudiantes
            </button>
            <button
              type="button"
              className="primary"
              onClick={() => props.history.push('/staff')}
            >
              Staff
            </button>
          </div>
          {/* <div className="row center">
            {characters.map((character) => (
              <Character key={character._id} character={character}></Character>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
}
