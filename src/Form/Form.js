import './Form.css';
import { useState } from 'react';

function Form( {addReservations} ){
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  function submitReservation(event) {
    event.preventDefault()
    const number = parseInt(guests)
    if(name && date && time && number){
        const newReservation = {
            id: Date.now(),
            name,
            date,
            time,
            number
        }
        addReservations(newReservation)
        clearInput()
    }
    else{
        if(number){
            alert('Invalid Submission')
        }
        else{
            alert('Give a valid Number of Guests')
        }
        
    }
    
  }

  function clearInput() {
    setName('');
    setDate('');
    setTime('');
    setGuests('');
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
          type='text'
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