import React from 'react';

export default function Staff(props) {
  const { staff } = props;
  return (
    <div key={staff._id} className="card">
      <a href={`/staff/${staff._id}`}>
        <img className="medium" src={staff.image} alt={staff.name} />
      </a>
      <div className="card-body">
        <a href={`/staff/${staff._id}`}>
          <h2>{staff.name}</h2>
        </a>
        <div className="price">Cumpleaños: {staff.dateOfBirth}</div>
        <div className="price">Género: {staff.gender}</div>
        <div className="price">Color de ojos: {staff.eyeColour}</div>
        <div className="price">Color de pelo: {staff.hairColour}</div>
      </div>
    </div>
  );
}
