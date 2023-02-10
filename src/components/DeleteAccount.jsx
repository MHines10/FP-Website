import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DeleteUser({ userId }) {
    const navigate = useNavigate();

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:5000/api/users/${userId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      navigate("/")
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <button className='btn btn-danger delete-btn' type="submit">Delete User</button>
    </form>
  );
};
