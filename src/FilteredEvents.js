import {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom'; 
import EventFilters from './EventFilters.js';
import EventResults from './EventResults.js';

function FilteredEvents({events}) {
    const [filteredEvents, setFilteredEvents] = useState([]);
    //const [filters, setFilters] = useState({});

    const [searchParams, setSearchParams] = useSearchParams();



    useEffect(() => {
        const filters = extractFiltersFromSearchParams(searchParams);

        setFilteredEvents(filterEvents(filters, events));
        
    }, [searchParams, events])


    //
    function extractFiltersFromSearchParams(searchParams) {
        const filters = {};

        filters["eventType"] = searchParams.get("eventType");
        filters["serviceYear"] = searchParams.get("serviceYear");
        
        return filters;
    }

    function filterEvents(filters, events) {
        return events.flatMap((event) => {

            if(filters.eventType && filters.eventType.toUpperCase() !== "ALL" && event.event_season && event.event_season.type !== filters.eventType) {
                return [];
            }

            if(filters.serviceYear && filters.serviceYear.toUpperCase() !== "ALL" && event.event_season && event.event_season.serviceYear.toString() !== filters.serviceYear) {
                return [];
            }
            const filteredEvent = {...event};
            filteredEvent.event_season = {...event.event_season};

            return [filteredEvent];
        });
    }

    return (
        <div>
            <h1 className='text-center p-4'>Manage Events</h1>
            <EventFilters setSearchParams={setSearchParams}/>
            {filteredEvents.length > 0 && <EventResults eventData={filteredEvents}/>}
        </div>
    );
}

export default FilteredEvents;