import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await axios.get('/users');
      if (response.data) {
        setUsers(response.data);
      }
    }
    loadUsers();
  }, []);

  return (
    <div id="app">
      <ul>
        {users.map((user) => (
          <li>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
