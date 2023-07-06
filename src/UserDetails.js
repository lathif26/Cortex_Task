import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user._id === id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className='user-details-container' >
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Mobile Number: {user.mobNum}</p>
      <p>Gender: {user.gender}</p>
      <p>Job Role: {user.jobRole}</p>
      <p>Experience: {user.experience}</p>
      <p>Qualification: {user.qualification}</p>
      <Link to={`/users/${user._id}/update`}>Update</Link>
    </div>
  );
};

export default UserDetails;
