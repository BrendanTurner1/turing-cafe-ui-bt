import './Reservations.css';

function Reservations({ reservations }) {
    function showReservations() {
        return reservations.map(reservation => {
            return (
                <section className={`reservation-card-${reservation.id}`}>
                    <h1>{reservation.name}</h1>
                    <p>{reservation.date}</p>
                    <p>{reservation.time}</p>
                    <p>Number of Guests: {reservation.number}</p>
                    <button>Cancel</button>
                </section>
            )
        })
    }
    return (
        <div className='reservation-cards'>
            {showReservations()}
        </div>
    )
};

export default Reservations;