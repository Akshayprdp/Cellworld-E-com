import React from 'react';
import './Blockedusers.css';

function BlockedUsers() {
  // Dummy data for blocked users
  const blockedUsers = [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
    { id: 3, username: 'user3', email: 'user3@example.com' },
  ];

  const handleUnblock = (userId) => {
    console.log(`Unblock user with ID: ${userId}`);
    // Logic to unblock the user can be added here
  };

  return (
    <div className="blocked-users">
      <div className="div2">
        <center>
          <h2 className="heading">Blocked Users</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blockedUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleUnblock(user.id)}
                    >
                      Unblock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </div>
  );
}

export default BlockedUsers;
