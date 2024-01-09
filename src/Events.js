import {useEffect, useState} from 'react';
import  {getEventsAndSeasons} from './util/api.js';
import EventFilters from './EventFilters.js';
import EventResults from './EventResults.js';

function Events() {
    const [events, setEvents] = useState([]);
    const [eventSeasons, setEventSeasons] = useState([{}]);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        const [eventSeasonData, eventData] = getEventsAndSeasons();

        setEvents(eventData);
        setEventSeasons(eventSeasonData);
    }, [])

    return (
        <div>
            <h1 className='text-center p-4'>Manage Events</h1>
            <EventFilters/>
            {events.length > 0 && <EventResults eventData={events}/>}
        </div>
    )
}

export default Events;