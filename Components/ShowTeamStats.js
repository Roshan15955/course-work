// ShowTeamStats.js
import React, { useState } from 'react';
import axios from 'axios';

const ShowTeamStats = () => {
  const [teamName, setTeamName] = useState('');
  const [stats, setStats] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://your-backend-api-url/teams/${teamName}`);
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching team stats:', error);
    }
  };

  return (
    <div id='ShowTeamStats'>
      <form onSubmit={handleSubmit}>
        <label>Team Name: </label>
        <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />
        <button type="submit">Get Stats</button>
      </form>
      {stats && (
        <div>
          <p>Games Played: {stats.gamesPlayed}</p>
          <p>Wins: {stats.win}</p>
          <p>Draws: {stats.draw}</p>
          <p>Losses: {stats.loss}</p>
        </div>
      )}
    </div>
  );
};

export default ShowTeamStats;
