import React, { useState, useEffect } from 'react';
import './Userlist.css';
import { getUserList } from '../../../Services/AdminApi';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUserList();
        setUserList(response.data.userlist);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = (userId) => {
    console.log('Delete user', userId);   
  };

  return (
    <div className="user-list">
      <div className="user-list-container">
        <h2>User List</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => (
              <tr key={user._id}>
                <td className='userid'>{user.username}</td>
                <td className='userid'>{user.Emailaddress}</td>
                <td>
                  <div className="action-buttons">
                    <button onClick={() => handleDelete(user._id)}>BLOCK</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
