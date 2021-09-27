import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsCharacter } from '../actions/characterActions';
// import { detailsStudent } from '../actions/studentActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
// import data from '../data';

export default function CharacterScreen(props) {
  const dispatch = useDispatch();
  const characterId = props.match.params.id;
  const characterDetails = useSelector((state) => state.characterDetails);
  const { loading, error, character } = characterDetails;

  // const [favorito, setFavorito] = useState(
  //   window.localStorage.getItem('favorito')
  // );

  // const setLocalStorage = (value) => {
  //   try {
  //     favorito(value);
  //     window.localStorage.setItem('favorito', value);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    dispatch(detailsCharacter(characterId));
  }, [characterId, dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="row">
            <div className="col-2">
              <img
                className="large"
                src={character.image}
                alt={character.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>Nombre: {character.name}</h1>
                </li>
                <li>
                  <h1>Cumpleaños: {character.dateOfBirth}</h1>
                </li>
                <li>
                  <h1>Género: {character.gender}</h1>
                </li>
                <li>
                  <h1>Color de ojos: {character.eyeColour}</h1>
                </li>
                <li>
                  <h1>Color de pelo: {character.hairColour}</h1>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <button className="primary block">Agrega a favoritos</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
