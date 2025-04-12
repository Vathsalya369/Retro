import './style.css';
import React, { useState } from 'react';

const LiveEvents = () => {

    const [formData, setFormData] = useState({
        eventName: '',
        eventDate: '',
        eventTime: '',
        peopleCount: '',
        garlandsCount: '',
        services: {
            decoration: false,
            current: false,
            catering: false,
            sweepers: false,
            servers: false,
            watersupply: false,
            priest: false,
            arkestra: false,
            garlands: false,
            poojamaterial: false,
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Event Data:', formData);
        alert('Live Event Booked!');
    };

    return (
        <div className="body">
            <form className="form1" onSubmit={handleSubmit}>
                <h1 className="heading">Live Events</h1>
                <p className="heading">Welcome to the live events page!</p>
                <label htmlFor="event-name">Enter Event Name</label>
                <input type="text" id="event-name" name="event-name" required /><br/><br/>

                <label htmlFor="event-date">Select Event Date</label>
                <input type="date" id="event-date" name="event-date" required /><br/><br/>

                <label htmlFor="event-time">Select Event Time</label>
                <input type="time" id="event-time" name="event-time" required /><br/><br/>

                <label htmlFor="event-people">Enter no of people attending</label>
                <input type="number" id="event-people" name="event-people" required /><br/><br/>

                {/* <input type="checkbox" id="decoration" />
                <label htmlFor="decoration">Decoration</label>
                <input type="checkbox" id="current" />
                <label htmlFor="current">Current</label>
                <input type="checkbox" id="catering" />
                <label htmlFor="catering">Catering</label>
                <input type="checkbox" id="sweepers" />
                <label htmlFor="sweepers">Sweepers</label>
                <input type="checkbox" id="Servers" />
                <label for="Servers">Servers</label>
                <input type="checkbox" id="watersupply" />
                <label htmlFor="watersupply">Water Supply</label>
                <input type="checkbox" id="priest" />
                <label htmlFor="priest">Priest</label>
                <input type="checkbox" id="arkestra" />
                <label htmlFor="arkestra">Arkestra</label>
                <input type="checkbox" id="garlands" />
                <label htmlFor="garlands">garlands</label>
                <input type="number" id="noofgarlands" placeholder="Enter no of garlands needed"/><br/>
                <input type="checkbox" id="poojamaterial" />
                <label htmlFor="poojamaterial">Pooja Material</label> */}

                <label htmlFor='name'>Name</label>
                <input id="name" type="email" /><br/><br/>

                <label htmlFor='email'>Email</label>
                <input id="email" type="email" /><br/><br/>

                <label htmlFor='phonenumber'>Phone Number</label>
                <input id="phonenumber" type="number" /><br/><br/>

                <button type="submit">Book Event</button>
            </form>
        </div>
        
    );
}

export default LiveEvents;