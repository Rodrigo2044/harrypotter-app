import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsStudent } from '../actions/studentActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function StudentScreen(props) {
  const dispatch = useDispatch();
  const studentId = props.match.params.id;
  const studentList = useSelector((state) => state.studentList);
  const { loading, error, student } = studentList;

  useEffect(() => {
    dispatch(detailsStudent(studentId));
  }, [dispatch, studentId]);

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
                src={student.image}
                alt={student.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>Nombre: {student.name}</h1>
                </li>
                <li>
                  <h1>Cumpleaños: {student.dateOfBirth}</h1>
                </li>
                <li>
                  <h1>Género: {student.gender}</h1>
                </li>
                <li>
                  <h1>Color de ojos: {student.eyeColour}</h1>
                </li>
                <li>
                  <h1>Color de pelo: {student.hairColour}</h1>
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
