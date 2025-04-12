import './style.css';
import React, { useState } from 'react';

const Prebooking = () => {
    const [guestCount, setGuestCount] = useState(1);
    const [selectedDate, setSelectedDate] = useState('Today');
    const [selectedTime, setSelectedTime] = useState(null);

    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//     This block generates the dateOptions array that looks like this:
// [
//   { day: "Today", date: "09 Apr" },
//   { day: "Wednesday", date: "10 Apr" },
//   { day: "Thursday", date: "11 Apr" },
//   { day: "Friday", date: "12 Apr" },
//   { day: "Saturday", date: "13 Apr" }
// ]
// This is the first object in the array.
// day: 'Today': Label shown to the user.
// date: ...: Formats today’s date as 09 Apr (for example).
// today.getDate() → gets the numeric day (e.g., 9)
// .padStart(2, '0') → makes it 2-digit (e.g., '09')
// months[today.getMonth()] → converts month number to string (e.g., 3 → Apr)

// ...Array.from({ length: 4 }, (_, i) => {
//     This creates an array of 4 elements: [0, 1, 2, 3]
//     The spread ... unpacks these elements into the main array.
//     For each index i, you're generating the date i+1 days from today.

// const date = new Date(today);
//     date.setDate(today.getDate() + i + 1);
// new Date(today) → makes a copy of today’s date.
// setDate(...) → adds (i + 1) days to today's date.
// So i = 0 → +1 (tomorrow)
// i = 1 → +2 (day after tomorrow), and so on.

// return {
//     day: days[date.getDay()],
//     date: `${String(date.getDate()).padStart(2, '0')} ${months[date.getMonth()]}`
// };
// days[date.getDay()]: Gets the day of the week (e.g., "Wednesday").
// date: ...: Formats the date as before (e.g., 10 Apr, 11 Apr, ...)


    const dateOptions = [
        { day: 'Today', date: `${String(today.getDate()).padStart(2, '0')} ${months[today.getMonth()]}` },
        ...Array.from({ length: 4 }, (_, i) => {
            const date = new Date(today);
            date.setDate(today.getDate() + i + 1);
            return {
                day: days[date.getDay()],
                date: `${String(date.getDate()).padStart(2, '0')} ${months[date.getMonth()]}`
            };
        })
    ];

    const lunchSlots = [
        '12:30 PM', '12:45 PM', '01:00 PM', '01:15 PM',
        '01:30 PM', '01:45 PM', '02:00 PM', '02:15 PM',
        '02:30 PM', '02:45 PM', '03:00 PM', '03:15 PM'
    ];
    
    const dinnerSlots = [
        '06:00 PM', '06:15 PM', '06:30 PM', '06:45 PM',
        '07:00 PM', '07:15 PM', '07:30 PM', '07:45 PM',
        '08:00 PM', '08:15 PM', '08:30 PM', '08:45 PM',
        '09:00 PM', '09:15 PM', '09:30 PM', '09:45 PM',
        '10:00 PM', '10:15 PM', '10:30 PM', '10:45 PM',
        '11:00 PM', '11:15 PM'
    ];
    

    // Convert time string like "08:45 PM" to a Date object today
    const convertToTodayTime = (timeStr) => {
        const [time, modifier] = timeStr.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (modifier === 'PM' && hours !== 12) hours += 12;
        if (modifier === 'AM' && hours === 12) hours = 0;

        const slotDate = new Date();
        slotDate.setHours(hours);
        slotDate.setMinutes(minutes);
        slotDate.setSeconds(0);
        return slotDate;
    };

    // Filter future time slots only if selected date is Today
    const getFilteredSlots = (slots) => {
        if (selectedDate !== 'Today') return slots;
        return slots.filter(slot => convertToTodayTime(slot) > today);
    };
    
    const filteredLunchSlots = getFilteredSlots(lunchSlots);
    const filteredDinnerSlots = getFilteredSlots(dinnerSlots);

    return (
        <div className="body1">
            <form className="form2">
                <h1 className="heading" style={{ color: "#FFFCEF", flexWrap: "wrap" }}>Book a Table</h1>

                <label htmlFor="number" style={{ marginBottom: "10px", color: "#FFFCEF", fontSize: "20px", textAlign: "center" }}>Number of guest(s)</label>

                <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", gap: "10px" }}>
                    {Array.from({ length: 10 }, (_, i) => (
                        <div key={i + 1} className={`numberOfGuests ${guestCount === i + 1 ? 'activeGuest' : ''}`} onClick={() => setGuestCount(i + 1)}>{i + 1}</div>
                    ))}
                </div>

                <label style={{ marginTop: "20px", color: "#FFFCEF", fontSize: "20px" }}>When are you visiting?</label>
                <div className="date-selection">
                    {dateOptions.map((option, index) => (
                        <div key={index} className={`date-button ${selectedDate === option.day ? 'activeDate' : ''}`} onClick={() => setSelectedDate(option.day)}>
                            <div className="day">{option.day}</div>
                            <div className="date">{option.date}</div>
                        </div>
                    ))}
                </div>

                <label className="label">Select the time of day to see the offers</label>

                {filteredLunchSlots.length > 0 && (
                <>
                    <div className="dinner-time-title">Lunch<br /><span>12:30 PM to 03:30 PM</span></div>
                    <div className="time-slots-grid">
                        {filteredLunchSlots.map((slot, idx) => (
                        <div key={idx} className={`time-slot ${selectedTime === slot ? 'activeTime' : ''}`} onClick={() => setSelectedTime(slot)}>{slot}</div>
                        ))}
                    </div>
                </>
                )}

                {filteredDinnerSlots.length > 0 && (
                <>
                    <div className="dinner-time-title">Dinner<br /><span>06:00 PM to 11:30 PM</span></div>
                    <div className="time-slots-grid">
                        {filteredDinnerSlots.map((slot, idx) => (
                        <div key={idx} className={`time-slot ${selectedTime === slot ? 'activeTime' : ''}`} onClick={() => setSelectedTime(slot)}>{slot}</div>
                    ))}
                    </div>
                </>
                )}

                {filteredLunchSlots.length === 0 && filteredDinnerSlots.length === 0 && (
                <div style={{ color: "#FFFCEF", textAlign: "center", margin: "10px 0" }}>No slots available for today.</div>
                )}

                <button type="submit" className="proceed-button">Proceed</button>
            </form>
        </div>
    );
};

export default Prebooking;
