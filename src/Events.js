import {useEffect, useState} from 'react';
import  {getEventsAndSeasons} from './util/api.js';
import EventFilters from './EventFilters.js';
import EventResults from './EventResults.js';
import EventTools from './EventTools.js';

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
            <EventFilters/>
            <EventTools/>
            {events.length > 0 && <EventResults eventData={events}/>}
        </div>
    )
}

export default Events;