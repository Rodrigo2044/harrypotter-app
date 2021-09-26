import React, { useEffect } from 'react';
// import Student from '../components/Student';
import Staff from '../components/Staff';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
// import { listStudents } from '../actions/studentActions';
import { listStaff } from '../actions/staffActions';

export default function StaffScreen() {
  const staffList = useSelector((state) => state.staffList);
  const { loading, error, staff } = staffList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listStaff());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {staff.map((staff) => (
            <Staff key={staff._id} staff={staff}></Staff>
          ))}
        </div>
      )}
    </div>
  );
}
