// AddTeamData.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AddTeamData = () => {
  const [team, setTeam] = useState('');
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
      team,
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
      await axios.post('http://your-backend-api-url/teams', data);
      alert('Data Added Successfully!');
    } catch (error) {
      console.error('Error adding team data:', error);
    }
  };

  return (
    <div id='AddTeamData'>
    <form onSubmit={handleSubmit}>
      <label>Team: </label>
      <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} required />
      <br />
      <label>Games Played: </label>
      <input type="number" value={gamesPlayed} onChange={(e) => setGamesPlayed(e.target.value)} required />
      <br />
      <label>Win: </label>
      <input type="number" value={win} onChange={(e) => setWin(e.target.value)} required />
      <br />
      <label>Draw: </label>
      <input type="number" value={draw} onChange={(e) => setDraw(e.target.value)} required />
      <br />
      <label>Loss: </label>
      <input type="number" value={loss} onChange={(e) => setLoss(e.target.value)} required />
      <br />
      <label>Goals For: </label>
      <input type="number" value={goalsFor} onChange={(e) => setGoalsFor(e.target.value)} required />
      <br />
      <label>Goals Against: </label>
      <input type="number" value={goalsAgainst} onChange={(e) => setGoalsAgainst(e.target.value)} required />
      <br />
      <label>Points: </label>
      <input type="number" value={points} onChange={(e) => setPoints(e.target.value)} required />
      <br />
      <label>Year: </label>
      <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
      <br />
      <button type="submit">Add Team</button>
    </form>
    </div>
  );
};

export default AddTeamData;
