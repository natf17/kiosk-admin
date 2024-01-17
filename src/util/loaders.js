import {getEventsAndSeasons} from './api.js';

export function loader() {
    const [eventSeasonData, eventData] = getEventsAndSeasons();

    return {events: eventData, eventSeasons: eventSeasonData};
}