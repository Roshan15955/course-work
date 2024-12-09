// DisplayAverageGoals.js
import React, { useState } from 'react';
import axios from 'axios';

const DisplayAverageGoals = () => {
  const [year, setYear] = useState('');
  const [teams, setTeams] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://your-backend-api-url/teams/average-goals/${year}`);
      setTeams(response.data);
    } catch (error) {
      console.error('Error fetching teams with average goals:', error);
    }
  };

  return (
    <div id='DisplayAverageGoals'>
      <form onSubmit={handleSubmit}>
        <label>Year: </label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        <button type="submit">Get Teams</button>
      </form>
      {teams.length > 0 && (
        <ul>
          {teams.map((team) => (
            <li key={team._id}>{team.team} - {team.averageGoals}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayAverageGoals;
