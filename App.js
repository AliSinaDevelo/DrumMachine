import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Fetch data from server
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>MERN App</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
