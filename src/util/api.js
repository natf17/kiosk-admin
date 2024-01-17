const seasons = [
    {
        id: "1",
        type: "REG",
        durationDays: 3,
        theme: "REG-Theme",
        serviceYear: 2024,
        seasonYears: "1",
        durationText: "3 days",
    },
    {
        id: "2",
        type: "CACO",
        durationDays: 2,
        theme: "CACO-Theme",
        serviceYear: 2024,
        seasonYears: "1",
        durationText: "2 days",
    },
]; 



const events = [
    {
        id: "1",
        seasonalType: "REG",
        startDate: "20240101",
        eventLanguage: "EN",
        event_season: {
            serviceYear: 2024,
            seasonYears: "1",
            type: "REG",
            theme: "REG-Theme",
        }
    },
    {
        id: "2",
        seasonalType: "REG",
        startDate: "20240105",
        eventLanguage: "EN",
        event_season: {
            serviceYear: 2024,
            seasonYears: "1",
            type: "REG",
            theme: "REG-Theme",
        }
    },
    {
        id: "3",
        seasonalType: "REG",
        startDate: "20240106",
        eventLanguage: "EN",
        event_season: {
            serviceYear: 2024,
            seasonYears: "1",
            type: "REG",
            theme: "REG-Theme",
        }
    }
];

export function getEventsAndSeasons() {

    return [seasons, events];
}

export function addEvent(event) {
    event.id = events.length + 1;
    
    const seasonMatch = seasons.find(i => i.id === event.eventSeasonId);
    event.seasonalType = seasonMatch.type;
    event.event_season = {
        ...seasonMatch,
    }
    events.push(event);
}