import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './Components/LandingPage'; 
import AddTeamData from './Components/AddTeamData';
import UpdateTeamData from './Components/UpdateTeamData';
import ShowTeamStats from './Components/ShowTeamStats';
import DeleteTeam from './Components/DeleteTeam';
import DisplayRecords from './Components/DisplayRecords';
import DisplayAverageGoals from './Components/DisplayAverageGoals';
import SearchBar from './SearchBar'; // Import SearchBar component

const App = () => {
  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Implement your search logic here, e.g., filtering or redirecting based on the query
  };

  return (
    <Router>
      <div className='nav'>
      <div id='logo'>
      </div> 
            {/* Add the SearchBar Component here */}
            <div className="search-bar-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="nav-bar">
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-team">Add Team</Link></li>
            <li><Link to="/update-team">Update Team</Link></li>
            <li><Link to="/show-stats">Show Team Stats</Link></li>
            <li><Link to="/delete-team">Delete Team</Link></li>
            <li><Link to="/display-records">Display Records</Link></li>
            <li><Link to="/display-average-goals">Display Average Goals</Link></li>
          </ul>
        </nav>
      </div>
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add-team" element={<AddTeamData />} />
        <Route path="/update-team" element={<UpdateTeamData />} />
        <Route path="/show-stats" element={<ShowTeamStats />} />
        <Route path="/delete-team" element={<DeleteTeam />} />
        <Route path="/display-records" element={<DisplayRecords />} />
        <Route path="/display-average-goals" element={<DisplayAverageGoals />} />
      </Routes>
    </Router>
  );
};

export default App;

