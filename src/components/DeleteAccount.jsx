import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DeleteUser({ userId }) {
  // useNavigate() returns a function that can be used to navigate to a different page in the app
  const navigate = useNavigate();

  // Define a function to handle the form submission when the Delete User button is clicked
  const handleDelete = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      // Send a DELETE request to the server to delete the user with the specified ID
      const response = await axios.delete(`https://responsible-knowledgeable-restaurant.glitch.me/auth/users/${userId}`);
      console.log(response.data); // Log the response data to the console
    } catch (error) {
      console.error(error); // Log any errors that occur during the request
      navigate("/"); // Navigate back to the home page if an error occurs
    }
  };

  // Render a form with a Delete User button that triggers the handleDelete function on submission
  return (
    <form onSubmit={handleDelete}>
      <button className='btn btn-danger delete-btn' type="submit">Delete User</button>
    </form>
  );
};