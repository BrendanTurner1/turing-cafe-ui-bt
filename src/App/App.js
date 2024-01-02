import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';

function App() {
  const [reservations, setReservations] = useState([])
  const [error, setError] = useState(null);

  function addReservations (newReservation) {
    setReservations([...reservations, newReservation])
  }
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Server Error!');
        }
      })
      .then((data) => {
        setReservations(data);
      })
      .catch((error) => {
        setError(error.message)
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addReservations={addReservations}/>
      </div>
      <div className='resy-container'>
        <Reservations reservations={ reservations }/>
      </div>
    </div>
  );
}

export default App; 