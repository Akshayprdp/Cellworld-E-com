import React, { useState, useEffect } from 'react';
import './Userlist.css';
import { getUserList, updateUserStatus } from '../../../Services/AdminApi';

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

  const handleStatusToggle = async (userId, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'blocked' : 'active';
    try {
      const response = await updateUserStatus(userId, { status: newStatus });
      if (response.data.success) {
        setUserList((prevUserList) =>
          prevUserList.map((user) =>
            user._id === userId ? { ...user, status: newStatus } : user
          )
        );
      }
    } catch (error) {
      console.error('Error updating user status:', error);
    }
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
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user._id}>
                <td className="userid">{user.username}</td>
                <td className="userid">{user.Emailaddress}</td>
                <td className="userid">{user.status}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      onClick={() => handleStatusToggle(user._id, user.status)}
                    >
                      {user.status === 'active' ? 'BLOCK' : 'UNBLOCK'}
                    </button>
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
