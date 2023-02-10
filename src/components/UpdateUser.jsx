import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeleteUser from './DeleteAccount';
import "../styles/UpdateUser.css"

export default function UpdateUser({ userId }) {
    const navigate = useNavigate();
    // eslint-disable-next-line
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
        setUser(response.data);
        setUsername(response.data.username);
        setPassword(response.data.password);
        setEmail(response.data.email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [userId]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/users/${userId}`, {
        username,
        password,
        email
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
      navigate("/home")
    }
  };

  return (
    <div className="update-form">
        <h2 className='text-center mb-5'>UPDATE INFO</h2>
    <form onSubmit={handleUpdate}>
      <div>
        <label htmlFor="username">USERNAME:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          />
      </div>
      <div>
        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          />
      </div>
      <div>
        <label htmlFor="email">EMAIL:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
      </div>
      <button className='btn btn-warning update-btn' type="submit">Update User</button>
    </form>
    <h4>DELETE ACCOUNT?</h4>
    <DeleteUser/>
    </div>
  );
};
