import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsCharacter } from '../actions/characterActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
// import data from '../data';

export default function CharacterScreen(props) {
  // Ya no vamos a traer los datos de frontend, ahora los traemos de react store
  // const character = data.characters.find(
  //   (x) => x._id === props.match.params.id
  // );

  const dispatch = useDispatch();
  // Con esto traemos el id del url
  const characterId = props.match.params.id;
  const characterDetails = useSelector((state) => state.characterDetails);
  const { loading, error, character } = characterDetails;

  // if (!character) {
  //   return <div> Character Not Found</div>;
  // }

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
            <div className="col-1"></div>
          </div>
        </div>
      )}
    </div>
  );
}
