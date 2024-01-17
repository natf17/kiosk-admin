import {useState} from 'react';
import { useLoaderData, useSubmit } from 'react-router-dom';
import SelectEventSeasonDropdown from './SelectEventSeasonDropdown';

function SeasonalEventForm() {
    const {eventSeasons} = useLoaderData();
    const [eventFormData, setEventFormData] = useState({chosenEventSeason: {}, startDate: "", eventLang: ""});
    let submit = useSubmit();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setEventFormData( (prevData) => {
            return {...prevData, [name]: value};
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        /*alert(`eventSeasonId: ${eventFormData.chosenEventSeason.displayName}, startDate: ${eventFormData.startDate}, eventLang: ${eventFormData.eventLang}` );*/
        submit(eventFormData, {
            method: "post",
            action: "/events/add",
            encType: "application/json",
        });
    }

    function handleClickEventSeason(e) {
        const yearValue = e.target.value === "All" ? "ALL" : e.target.value;
    }

    return (
        <form onSubmit={handleSubmit}>
            <SelectEventSeasonDropdown eventFormData={eventFormData} setEventFormData={setEventFormData} eventSeasons={eventSeasons}/>
            <label htmlFor="startDate">Start date: </label>
            <input type="text" id="startDate" name="startDate" value={eventFormData.startDate} onChange={handleChange}/>
            <label htmlFor="eventLang">Event language: </label>
            <input type="text" id="eventLang" name="eventLang" value={eventFormData.eventLang} onChange={handleChange}/>
            <button type="submit">Save</button>
        </form>
    );
}

export default SeasonalEventForm;