import {useState} from 'react';

function SelectEventSeasonDropdown({eventFormData, setEventFormData, eventSeasons}) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClickEventSeason(e) {
        const seasonId =  e.target.value;
        const eventSeasonMatch = eventSeasons.find(i => i.id === seasonId);
        setEventFormData({
            ...eventFormData,
            chosenEventSeason: {
                id: seasonId,
                displayName: eventSeasonMatch.serviceYear + " " + eventSeasonMatch.theme,
            }
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
                <button className="" onClick={handleClickDropdownButton} type="button">{eventFormData.chosenEventSeason.displayName ? eventFormData.chosenEventSeason.displayName : "Choose an event season"}</button>
                {isOpen ? (
                    <div className="dropdown-menu-container">
                    <ul className="dropdown-list">
                        {eventSeasons.map(i => <li><button className="" onClick={handleClickEventSeason} value={i.id}>{i.serviceYear + " " + i.theme}</button></li>)}
                    </ul></div>) : null}
            </div>
        </div>
    );
}

export default SelectEventSeasonDropdown;