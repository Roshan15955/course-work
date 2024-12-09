// UpdateTeamData.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateTeamData = () => {
  const [teamName, setTeamName] = useState('');
  const [gamesPlayed, setGamesPlayed] = useState('');
  const [win, setWin] = useState('');
  const [draw, setDraw] = useState('');
  const [loss, setLoss] = useState('');
  const [goalsFor, setGoalsFor] = useState('');
  const [goalsAgainst, setGoalsAgainst] = useState('');
  const [points, setPoints] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      teamName,
      gamesPlayed,
      win,
      draw,
      loss,
      goalsFor,
      goalsAgainst,
      points,
      year
    };
    
    try {
      await axios.put(`http://your-backend-api-url/teams/${teamName}`, data);
      alert('Data Updated Successfully!');
    } catch (error) {
      console.error('Error updating team data:', error);
    }
  };

  return (
    <div id='UpdateTeamData'>
    <form onSubmit={handleSubmit}>
      <label>Team Name: </label>
      <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />
      <br />
      {/* Repeat fields from AddTeamData */}
      <button type="submit">Update Team</button>
    </form>
    </div>
  );
};

export default UpdateTeamData;
