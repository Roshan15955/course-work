// DeleteTeam.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteTeam = () => {
  const [teamName, setTeamName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://your-backend-api-url/teams/${teamName}`);
      alert('Team Deleted Successfully!');
    } catch (error) {
      console.error('Error deleting team:', error);
    }
  };

  return (
    <div id='DeleteTeam'>
    <form onSubmit={handleSubmit}>
      <label>Team Name: </label>
      <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />
      <button type="submit">Delete Team</button>
    </form>
    </div>
  );
};

export default DeleteTeam;
