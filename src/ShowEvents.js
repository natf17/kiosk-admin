import {useEffect, useState} from 'react';
import {getEventsAndSeasons} from './util/api.js';
import FilteredEvents from './FilteredEvents.js';
import { useLoaderData } from 'react-router-dom';

function ShowEvents() {
    //onst [events, setEvents] = useState([]);
    const {events, eventSeasons} = useLoaderData();
    //const [eventSeasons, setEventSeasons] = useState([{}]);

    /*
    useEffect(() => {
        const [eventSeasonData, eventData] = getEventsAndSeasons();

        setEvents(eventData);
        setEventSeasons(eventSeasonData);
    }, []) */

    return (
        <div>
            <FilteredEvents events={events}/>
        </div>
    );
}

export default ShowEvents;