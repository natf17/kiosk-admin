import {useState} from 'react';
import {getEventsAndSeasons} from './util/api.js';

function TestComponents() {

    return <Dropdown />;
}


function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedEventSeason, setSelectedEventSeason] = useState();
    const [eventSeasons] = getEventsAndSeasons();

    function handleClickEventSeason(e) {
        const seasonId =  e.target.value;
        const eventSeasonMatch = eventSeasons.find(i => i.id === seasonId);
        setSelectedEventSeason({
            id: seasonId,
            name: eventSeasonMatch.serviceYear + " " + eventSeasonMatch.theme,
        });
        setIsOpen(false);

    }

    function handleClickDropdownButton() {
        setIsOpen(!isOpen);
    }
    
    return (
        <div>
            Event season:
            <div className="dropdown-container">
                <button className="" onClick={handleClickDropdownButton} type="button">{selectedEventSeason ? selectedEventSeason.name : "Choose an event season"}</button>
                {isOpen ? (
                    <div className="dropdown-menu-container">
                    <ul className="dropdown-list">
                        {eventSeasons.map(i => <li><button className="" onClick={handleClickEventSeason} value={i.id}>{i.serviceYear + " " + i.theme}</button></li>)}
                    </ul></div>) : null}
            </div>
        </div>
    );
}

export default TestComponents;