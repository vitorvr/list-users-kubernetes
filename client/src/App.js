import React, { useEffect, useState } from 'react';
import api from './services/api';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');
      if (response.data) {
        setUsers(response.data);
      }
    }
    loadUsers();
  }, []);

  return (
    <div id="app">
      <ul>
        {users.map(user => (
          <li>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
