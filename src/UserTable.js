import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUserAsync } from './store';
import { Link } from 'react-router-dom';
import './UserTable.css'

const UserTable = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const baseUrl = 'http://3.109.214.83:4000';
  const createUserUrl = `${baseUrl}/employee/new`;
  const deleteUserUrl = `${baseUrl}/employee/del/`;

  const handleDeleteUser = (userId) => {
    dispatch(deleteUserAsync(userId));
  };

  return (
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>Gender</th>
          <th>JobRole</th>
          <th>Experience</th>
          <th>Qualification</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.mobNum}</td>
            <td>{user.gender}</td>
            <td>{user.jobRole}</td>
            <td>{user.experience}</td>
            <td>{user.qualification}</td>
            <td>
              <Link to={`/users/${user._id}`} className="view-button">View</Link>
              
              <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      
    </table>
    <div className="view-button-form_ctn"><Link to={`/userform`} className="view-button-form">Create</Link></div>
    
    
    
    </div>
  );
};

export default UserTable;

