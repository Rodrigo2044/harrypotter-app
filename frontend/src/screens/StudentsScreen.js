import React, { useEffect } from 'react';
// import Character from '../components/Character';
import Student from '../components/Student';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listStudents } from '../actions/studentActions';

export default function StudentsScreen() {
  const studentList = useSelector((state) => state.studentList);
  const { loading, error, students } = studentList;

  console.log(studentList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listStudents());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {students.map((student) => (
            <Student key={student._id} student={student}></Student>
          ))}
        </div>
      )}
    </div>
  );
}
