import { redirect } from "react-router-dom";
import {addEvent} from './api.js';

export async function addEventAction({request}) {
    // save event
    let receivedEvent = await request.json();

    const eventToSubmit = {
        eventSeasonId: receivedEvent.chosenEventSeason.id,
        startDate: receivedEvent.startDate,
        eventLanguage: receivedEvent.eventLang,
    }

    addEvent(eventToSubmit);

    return redirect("/events");
}