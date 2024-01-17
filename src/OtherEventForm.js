import {useState} from 'react';

function OtherEventForm({eventSeasons}) {
    const [eventFormData, setEventFormData] = useState({eventSeasonId: "", startDate: "", eventLang: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setEventFormData( (prevData) => {
            return {...prevData, [name]: value};
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`eventSeasonId: ${eventFormData.eventSeasonId}, startDate: ${eventFormData.startDate}, eventLang: ${eventFormData.eventLang}` );
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="startDate">Start date: </label>
            <input type="text" id="startDate" value={eventFormData.startDate} onChange={handleChange}/>
            <label htmlFor="endDate">Event language: </label>
            <input type="text" id="endDate" value={eventFormData.endDate} onChange={handleChange}/>
            <button type="submit">Save</button>
        </form>
    );
}

export default OtherEventForm;