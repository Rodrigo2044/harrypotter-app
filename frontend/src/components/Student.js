import React from 'react';

export default function Student(props) {
  const { student } = props;
  return (
    <div key={student._id} className="card">
      <a href={`/student/${student._id}`}>
        <img className="medium" src={student.image} alt={student.name} />
      </a>
      <div className="card-body">
        <a href={`/student/${student._id}`}>
          <h2>{student.name}</h2>
        </a>
        <div className="price">Cumpleaños: {student.dateOfBirth}</div>
        <div className="price">Género: {student.gender}</div>
        <div className="price">Color de ojos: {student.eyeColour}</div>
        <div className="price">Color de pelo: {student.hairColour}</div>
      </div>
    </div>
  );
}
