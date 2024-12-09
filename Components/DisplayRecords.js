import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get('http://your-api-url.com/records?limit=10');
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching records', error);
      }
    };
    fetchRecords();
  }, []);

  return (
    <div id='DisplayRecords'>
      {records.map((record, index) => (
        <div key={index}>
          <p>{record.team} - {record.gamesPlayed} Games Played</p>
          {/* Display other data */}
        </div>
      ))}
    </div>
  );
};

export default DisplayRecords;
