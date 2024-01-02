import './Form.css';
import { useState } from 'react';

function Form( {addReservations} ){
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState();

  function submitReservation(event) {
    event.preventDefaul()
    const newReservation = {
        id: Date.now(),
        name,
        date,
        time,
        guests
    }
    addReservations(newReservation)
    clearInput()
  }

  function clearInput() {
    setName('');
    setDate('');
    setTime('');
    setGuests();
  }
  
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={date}
          onChange={event => setDate(event.target.value)}

        />

        <input
          type='text'
          placeholder='Time'
          name='time'
          value={time}
          onChange={event => setTime(event.target.value)}
        />

        <input
          type='number'
          placeholder='Number of Guests'
          name='guests'
          value={guests}
          onChange={event => setGuests(event.target.value)}
        />

        <button onClick={ event => submitReservation(event)}>Make Reservation</button>
      </form>
    )
}

export default Form;